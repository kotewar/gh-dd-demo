"""
Code Review Example — Ask Copilot to Review This!

This file contains intentional style issues and a subtle bug.
Try asking Copilot to review this code by:
  1. Opening a PR with this file
  2. Clicking "Request a Copilot review" in the Reviewers section
  3. Or opening Copilot Chat and asking: "Review the code in this file"

Copilot will identify issues like:
  - The off-by-one error in paginate()
  - Missing input validation
  - Inefficient list operations
  - Inconsistent naming conventions
"""

import json
from datetime import datetime


# Fetches user data from a dict-based "database"
def get_user(db, user_id):
    for u in db:
        if u["id"] == user_id:
            return u
    return None


def calculate_discount(price, discount_percent):
    """Apply a percentage discount to a price."""
    if discount_percent > 100:
        discount_percent = 100
    discounted = price - (price * discount_percent / 100)
    return discounted


def paginate(items, page, page_size):
    """Return a single page of items from a list.

    BUG: This has an off-by-one error — can Copilot spot it?
    """
    start = (page - 1) * page_size
    end = start + page_size + 1  # Off-by-one: should be `start + page_size`
    return items[start:end]


def process_orders(orders):
    """Process a list of orders and return a summary."""
    total = 0
    processed = []
    for order in orders:
        # Missing input validation: what if 'amount' key is missing?
        total = total + order["amount"]
        processed.append({
            "id": order["id"],
            "amount": order["amount"],
            "processed_at": datetime.now().isoformat(),
        })
    return {"total": total, "orders": processed}


def find_duplicates(lst):
    """Find duplicate values in a list.

    Inefficient: O(n²) — Copilot can suggest an O(n) approach using a set.
    """
    duplicates = []
    for i in range(len(lst)):
        for j in range(i + 1, len(lst)):
            if lst[i] == lst[j] and lst[i] not in duplicates:
                duplicates.append(lst[i])
    return duplicates


def serialize_user(user):
    """Serialize a user object to JSON string."""
    # Inconsistent: other functions use dicts, this returns a string
    return json.dumps(user)


# --- Example Usage ---
if __name__ == "__main__":
    database = [
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
        {"id": 2, "name": "Bob", "email": "bob@example.com"},
        {"id": 3, "name": "Charlie", "email": "charlie@example.com"},
    ]

    user = get_user(database, 2)
    print(f"Found user: {user}")

    price = calculate_discount(100.0, 20)
    print(f"Discounted price: ${price:.2f}")

    items = list(range(1, 21))
    page = paginate(items, page=1, page_size=5)
    print(f"Page 1: {page}")  # Bug: returns 6 items instead of 5

    dupes = find_duplicates([1, 2, 3, 2, 4, 3, 5])
    print(f"Duplicates: {dupes}")
