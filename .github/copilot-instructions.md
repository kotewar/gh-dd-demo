# GitHub Copilot Custom Instructions

## Repository Purpose

This is a demo repository for showcasing GitHub Copilot features available directly on GitHub.com — no IDE required. It is used for hands-on exploration of:

- **Copilot Chat** (ask questions about code directly in the browser)
- **Copilot Code Review** (automated PR reviews)
- **Copilot Autofix** (AI-generated security vulnerability fixes)
- **Copilot Workspace** (end-to-end issue-to-PR workflow)
- **Copilot Extensions** (e.g., `@datadog`, `@sentry`, `@docker`)

## Repository Structure

| Path | Description |
|------|-------------|
| `examples/autofix_example.js` | JavaScript file with intentional security vulnerabilities (SQL injection, XSS, path traversal, open redirect, hardcoded credentials) — used to demonstrate Copilot Autofix |
| `examples/code_review_example.py` | Python file with intentional bugs and style issues (off-by-one error, missing validation, O(n²) algorithm) — used to demonstrate Copilot Code Review |
| `examples/refactor_example.ts` | TypeScript file with old-style patterns (`var`, no types, manual loops) — used to demonstrate Copilot refactoring suggestions |
| `docs/copilot_tips.md` | Tips, slash commands, keyboard shortcuts, and prompting guide for Copilot on GitHub.com |
| `.github/workflows/codeql.yml` | CodeQL workflow that enables Copilot Autofix on security alerts |

## Language & Tech Stack

- **JavaScript (Node.js / Express)** — `examples/autofix_example.js`
- **Python 3** — `examples/code_review_example.py`
- **TypeScript** — `examples/refactor_example.ts`
- **Markdown** — documentation files
- **GitHub Actions / CodeQL** — CI/CD and security scanning

## Coding Conventions

- The example files contain **intentional bugs and vulnerabilities** — do not "fix" them unless asked. They exist for demonstration purposes.
- TypeScript code in this repo should use modern ES2022+ syntax (arrow functions, `const`/`let`, array methods like `map`, `filter`, `reduce`) when writing new code.
- Python code should follow PEP 8 style conventions.
- JavaScript code should use `const`/`let`, avoid `var`, and prefer template literals over string concatenation.

## Copilot Usage Context

When answering questions or making suggestions in this repository, keep in mind:

- Users are likely exploring Copilot capabilities and may be new to AI-assisted development.
- Prefer clear, well-commented code examples that illustrate best practices.
- When asked about the example files, explain both *what the issue is* and *how to fix it* so the user learns from the interaction.
- Slash commands (`/explain`, `/fix`, `/tests`, `/doc`, `/simplify`) are a key part of the workflow — suggest them when relevant.
- Security fixes should always prefer parameterized queries, output encoding, and path validation over simple string manipulation.
