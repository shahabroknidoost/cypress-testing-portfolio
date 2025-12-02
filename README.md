![Cypress Tests](https://github.com/shahabroknidoost/cypress-testing-portfolio/actions/workflows/tests.yml/badge.svg)

# Cypress Test Automation Portfolio

A hands-on project I built to practice test automation with Cypress. Covers both UI testing and API testing using real-world patterns.

## About This Project

I created this repo to sharpen my QA automation skills. Instead of just following tutorials, I wanted to build something practical that demonstrates how I approach testing.

**What's inside:**
- UI tests using Page Object Model
- API tests covering full CRUD operations
- Custom commands to keep code DRY
- Clean folder structure for scalability

## Tech Stack

- Cypress 13.x
- JavaScript (ES6+)
- Node.js

## Folder Structure
```
cypress/
├── e2e/
│   ├── ui/                 # UI test specs
│   │   └── login.cy.js
│   └── api/                # API test specs
│       ├── posts.cy.js
│       └── users.cy.js
├── support/
│   ├── pages/              # Page Object Models
│   │   └── LoginPage.js
│   ├── commands.js         # Custom commands
│   └── e2e.js
└── fixtures/               # Test data
```

## Test Summary

| Category | File | Tests | Description |
|----------|------|-------|-------------|
| UI | login.cy.js | 3 | Login validation on demoqa.com |
| API | posts.cy.js | 6 | CRUD operations - posts endpoint |
| API | users.cy.js | 4 | CRUD operations - users endpoint |
| | | **13** | **Total** |

## Getting Started
```bash
# Clone the repo
git clone https://github.com/yourusername/cypress-testing-portfolio.git

# Install dependencies
npm install

# Run tests in browser
npx cypress open

# Run tests headless
npx cypress run
```

## Key Concepts Used

### Page Object Model
Keeps selectors and actions separate from tests. If the UI changes, I only update one file.
```javascript
// Instead of repeating selectors everywhere:
cy.get('#userName').type('test');

// I use:
LoginPage.typeUsername('test');
```

### Custom Commands
Created reusable commands for common actions:
```javascript
// Makes API calls cleaner
cy.apiRequest('GET', '/users');
cy.apiRequest('POST', '/posts', { title: 'New Post' });
```

### API Testing
Full CRUD coverage with proper status code validation:
- `200` - Success
- `201` - Created
- `404` - Not Found

## Sample Test Output
```
✓ should display login form (1.2s)
✓ should show error for empty form submission (0.8s)
✓ should show error for invalid credentials (1.5s)
✓ should fetch all posts (0.3s)
✓ should create a new post (0.2s)
✓ should delete a post (0.2s)

6 passing (4.2s)
```

## What I Learned

- Page Object Model really pays off when tests grow
- API testing with Cypress is straightforward using `cy.request()`
- Custom commands reduce duplication significantly
- Proper error handling needs `failOnStatusCode: false`


## Connect

**Shahab Roknidoost**  
Frontend Developer | QA Automation  
📍 Munich, Germany

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/shahabroknidoost/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black)](https://github.com/shahabroknidoost)
