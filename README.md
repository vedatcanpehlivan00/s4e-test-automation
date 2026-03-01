# S4E Test Automation Project

This project contains end-to-end automation tests for the S4E web application using Microsoft Playwright.

---

## 🚀 Tech Stack

- Node.js
- Playwright Test
- JavaScript
- GitHub Actions (CI)

---

## 📁 Project Structure
s4e-test-automation/
│
├── tests/
│ └── login.spec.js
│
├── playwright.config.js
├── package.json
├── .github/workflows/playwright.yml
└── .gitignore
---

## 🧪 Test Scope

The project includes automation scenarios for:

- Login page accessibility validation  
- Detection of human verification (Cloudflare CAPTCHA presence)  
- Basic smoke test verification  

---

## ▶️ How to Run Tests Locally

Install dependencies:

```bash
---

## ⚠️ Assumptions & Limitations

The login page is protected by Cloudflare human verification (CAPTCHA).  
Due to this protection, full login automation may not always be deterministic.

Tests are designed to:
- Detect whether the login form is accessible
- Detect the presence of human verification
- Validate basic page behavior

---

## 🚀 CI Integration

This project includes a GitHub Actions workflow:

.github/workflows/playwright.yml

On every push to the main branch:
- Dependencies are installed
- Playwright browsers are installed
- Tests are executed automatically

---

## 🎯 Objective

The goal of this project is to demonstrate:
- End-to-end automation setup
- Cloudflare protection detection handling
- CI pipeline integration
- Clean and maintainable test structure

---

## 👤 Author

Vedat Can Pehlivan
