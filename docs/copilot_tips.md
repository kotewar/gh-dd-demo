# GitHub Copilot Tips & Tricks on GitHub.com

Get the most out of GitHub Copilot directly in your browser — no IDE needed!

---

## 💬 Copilot Chat Slash Commands

When chatting with Copilot on GitHub.com, use these slash commands for quick actions:

| Command | What It Does |
|---------|-------------|
| `/explain` | Explains selected code in plain English |
| `/fix` | Suggests a fix for a bug or error |
| `/tests` | Generates unit tests for selected code |
| `/doc` | Adds documentation comments to code |
| `/simplify` | Rewrites code to be simpler and cleaner |

---

## 🎯 Effective Prompting

### Be specific
Instead of: *"Fix this"*
Try: *"Fix the off-by-one error in the paginate() function so it returns exactly `page_size` items"*

### Provide context
Instead of: *"What does this do?"*
Try: *"What does this function do, and what edge cases should I be aware of?"*

### Ask for alternatives
- *"What are three different ways to implement this?"*
- *"Is there a more Pythonic way to write this?"*
- *"Can you rewrite this using modern ES2022 syntax?"*

### Chain questions
- *"Explain this code"* → *"Now write tests for it"* → *"Now add error handling"*

---

## 🔑 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `.` | Open any repository in github.dev (VS Code in browser) |
| `Cmd/Ctrl + I` | Open Copilot inline chat (in github.dev) |
| `Cmd/Ctrl + Shift + I` | Open Copilot Chat panel (in github.dev) |

> **Tip:** Press `.` on any GitHub repository to open it in github.dev, where you get full Copilot code completion in the browser!

---

## 🔍 Copilot in Pull Request Reviews

### Getting the most from Copilot reviews:
1. **Request early** — Ask for a Copilot review before human reviewers to catch quick wins
2. **Apply suggestions** — Use one-click apply for Copilot's suggested fixes
3. **Ask follow-ups** — Chat with Copilot about specific review comments
4. **Iterative review** — After making changes, request another Copilot review

### What Copilot looks for:
- 🐛 Bugs and logic errors
- 🔐 Security vulnerabilities
- ⚡ Performance bottlenecks
- 📖 Missing documentation
- 🧪 Untested code paths
- 🎨 Style inconsistencies

---

## 🛡️ Getting the Most from Copilot Autofix

1. **Enable GitHub Advanced Security** on your repository
2. **Enable CodeQL scanning** in your workflow
3. Go to **Security → Code scanning alerts**
4. Look for alerts with the ✨ **"Generate fix"** button
5. Review Copilot's explanation and suggested fix
6. Apply directly or request changes

### Languages supported by Copilot Autofix:
- JavaScript / TypeScript
- Python
- Java
- C / C++
- C#
- Go
- Ruby

---

## 🏗️ Copilot Workspace Workflow

1. **Browse Issues** → Find a bug or feature request
2. **Click "Open in Workspace"** → Copilot reads the issue and context
3. **Review the plan** → Copilot proposes what files to change and how
4. **Refine in natural language** → *"Also update the tests"*, *"Don't change the API"*
5. **Let Copilot code it** → Generates the implementation
6. **Open a PR** → Submit directly from Workspace

---

## 🧩 Popular Copilot Extensions

| Extension | What It Does |
|-----------|-------------|
| `@datadog` | Ask about incidents, metrics, and traces |
| `@sentry` | Investigate errors and exceptions |
| `@docker` | Get Docker and container help |
| `@jira` | Query and update Jira tickets |
| `@azure` | Manage Azure resources |

Use them in Copilot Chat: *"@datadog what's causing the spike in errors on the payments service?"*

---

## 📊 Copilot for Different Roles

### For Developers
- Code completion and generation
- Bug fixing and refactoring
- Writing tests
- Understanding unfamiliar code

### For Code Reviewers
- Automated PR review
- Security vulnerability detection
- Consistent review quality

### For Tech Leads / Architects
- Analyze code patterns across the repo
- Generate architecture documentation
- Identify technical debt

### For DevOps Engineers
- Generate CI/CD pipeline configurations
- Write infrastructure-as-code
- Debug failing workflows

---

## 🔗 Useful Links

- [Copilot Chat Docs](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat-in-githubcom)
- [Copilot Code Review Docs](https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review)
- [Copilot Autofix Docs](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)
- [Copilot Extensions Docs](https://docs.github.com/en/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat)
- [Copilot Workspace](https://githubnext.com/projects/copilot-workspace)
- [Effective Prompting Guide](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
