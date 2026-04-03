# 📋 Backlog: Future Work Items

This file tracks all possible future work items for the **gh-dd-demo** repository — a showcase for GitHub Copilot features on GitHub.com.

---

## 🧪 Example Files & Code Quality

- [ ] **Fix the off-by-one bug in `paginate()`** in `examples/code_review_example.py` — the slice currently returns `page_size + 1` items (`end = start + page_size + 1` should be `end = start + page_size`)
- [ ] **Add input validation to `process_orders()`** in `examples/code_review_example.py` — guard against missing `amount` or `id` keys
- [ ] **Replace O(n²) `find_duplicates()`** in `examples/code_review_example.py` with an O(n) set-based approach
- [ ] **Standardize `serialize_user()`** in `examples/code_review_example.py` to return a dict instead of a JSON string, consistent with the rest of the module
- [ ] **Refactor `examples/refactor_example.ts`** — replace all `any` types with the defined `User`, `Product`, and `Order` interfaces; convert `var` to `const`/`let`; rewrite loops using `.filter()`, `.reduce()`, `.map()`
- [ ] **Implement the missing `paginate()` function** in `examples/refactor_example.ts` (marked as a TODO in the file)
- [ ] **Add JSDoc comments** to all functions in `examples/refactor_example.ts`
- [ ] **Add a Jest/Vitest test suite** for `examples/refactor_example.ts` (showcases Copilot `/tests` slash command)
- [ ] **Add a `pytest` test suite** for `examples/code_review_example.py` (showcases Copilot `/tests` slash command)

---

## 🛡️ Security & Autofix Examples

- [ ] **Resolve open CodeQL alerts** in `examples/autofix_example.js` using Copilot Autofix ("Generate fix") — SQL injection, XSS, path traversal, open redirect, and hardcoded credentials
- [ ] **Add a Go or Java autofix example** — extend Autofix demos beyond JS/Python to cover more Copilot Autofix-supported languages (e.g., SSRF, insecure deserialization, command injection)
- [ ] **Add a C# or Ruby autofix example** to round out multi-language Autofix coverage
- [ ] **Add a secret-scanning demo file** containing a revoked/fake token to illustrate GitHub Secret Scanning + Copilot remediation suggestions

---

## 🏗️ CI/CD & Repository Automation

- [ ] **Add a lint workflow** — ESLint for `.js`/`.ts`, `ruff`/`flake8` for Python, running on every push and PR
- [ ] **Add a test workflow** — run `pytest` and `jest` on every push and PR
- [ ] **Enable Dependabot** via `.github/dependabot.yml` to keep Actions dependencies (e.g., `actions/checkout`, `actions/setup-node`) up to date automatically
- [ ] **Add a PR template** (`.github/pull_request_template.md`) to guide contributors and showcase the Copilot PR summary feature
- [ ] **Configure branch protection on `main`** — require Copilot review + at least one human reviewer before merge

---

## 📚 Documentation & Learning Content

- [ ] **Add a section on Copilot Agent Mode and MCP integrations** to `docs/copilot_tips.md`
- [ ] **Add `docs/extensions_guide.md`** — step-by-step walkthrough for setting up and using the `@datadog`, `@sentry`, and `@docker` Copilot extensions
- [ ] **Add `docs/workspace_walkthrough.md`** — guided tour of Copilot Workspace from issue → plan → code → PR
- [ ] **Add `docs/autofix_walkthrough.md`** — step-by-step Autofix guide for the security alerts in `examples/autofix_example.js`
- [ ] **Add `CONTRIBUTING.md`** with Copilot-assisted contribution tips and a guide for adding new example files or documentation
- [ ] **Add `CODE_OF_CONDUCT.md`** — standard community health file

---

## 🌐 New Language & Feature Examples

- [ ] **Add a Go example** — an HTTP handler with a subtle race condition or nil-pointer bug for Copilot to find via chat/review
- [ ] **Add a Java example** — SQL injection or insecure deserialization vulnerability for Copilot Autofix
- [ ] **Add an IaC/DevOps example** — Terraform or Bicep file with a misconfiguration (e.g., public S3 bucket, unrestricted security group) for Copilot to flag
- [ ] **Add a Copilot Extensions worked example** — a documented conversation with `@datadog` or `@sentry` in Copilot Chat, with screenshots or animated GIFs

---

## 🎨 Repository Experience & Discoverability

- [ ] **Add a `CODEOWNERS` file** — assign ownership of `examples/` and `docs/` to appropriate maintainers
- [ ] **Add GitHub Topics** — tag the repo with `copilot`, `github-copilot`, `demo`, `security`, `code-review` to improve discoverability
- [ ] **Add issue templates** under `.github/ISSUE_TEMPLATE/` — bug report and feature request forms to make contribution easier
- [ ] **Update `Readme.md`** — add a Quick Start GIF/screenshot walkthrough and CI/CodeQL status badges
- [ ] **Add a `LICENSE` file** — the repo currently has no license; add MIT or Apache 2.0
