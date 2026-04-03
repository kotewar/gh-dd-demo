/**
 * Refactor Example — Let Copilot Improve This Code!
 *
 * This TypeScript file is functional but has opportunities for improvement.
 * Open Copilot Chat and ask:
 *   - "Refactor this code to be more idiomatic TypeScript"
 *   - "Add proper type safety to this module"
 *   - "Write unit tests for the functions in this file"
 *   - "Add JSDoc comments to all functions"
 *
 * Copilot can also generate the entire implementation from just the types and comments!
 */

// --- Types --- (Copilot can generate implementations from these alone!)

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  createdAt: Date;
  lastLoginAt?: Date;
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  tags: string[];
}

interface Order {
  id: number;
  userId: number;
  items: Array<{ productId: number; quantity: number; unitPrice: number }>;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
}

// --- Utility Functions (could use improvement) ---

// TODO: Copilot can make this more type-safe and add error handling
function filterByRole(users: any[], role: string) {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].role == role) {
      result.push(users[i]);
    }
  }
  return result;
}

// TODO: Copilot can simplify this and handle edge cases
function calculateOrderTotal(order: any) {
  var total = 0;
  for (var i = 0; i < order.items.length; i++) {
    total = total + order.items[i].quantity * order.items[i].unitPrice;
  }
  return total;
}

// TODO: Copilot can add input validation and proper typing
function searchProducts(products: any[], query: string, category?: string) {
  var results = [];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      if (!category || product.category === category) {
        results.push(product);
      }
    }
  }
  return results;
}

// TODO: Copilot can suggest using reduce() and proper error handling
function groupByCategory(products: any[]) {
  var groups: any = {};
  for (var i = 0; i < products.length; i++) {
    var cat = products[i].category;
    if (!groups[cat]) {
      groups[cat] = [];
    }
    groups[cat].push(products[i]);
  }
  return groups;
}

// TODO: Copilot can suggest a more functional style and better types
function getRecentOrders(orders: any[], days: number) {
  var cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  var result = [];
  for (var i = 0; i < orders.length; i++) {
    if (new Date(orders[i].createdAt) > cutoff) {
      result.push(orders[i]);
    }
  }
  return result;
}

// TODO: Ask Copilot to generate a paginate() function for this data
// TODO: Ask Copilot to generate unit tests for all functions above
// TODO: Ask Copilot to generate API route handlers using these functions

export {
  User,
  Product,
  Order,
  filterByRole,
  calculateOrderTotal,
  searchProducts,
  groupByCategory,
  getRecentOrders,
};
