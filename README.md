# Playwright Typescript QA Automation Portfolio
[![Playwright Tests](https://github.com/reevemphilip/playwright-typescript-automation/actions/workflows/playwright.yml/badge.svg?branch=master)](https://github.com/reevemphilip/playwright-typescript-automation/actions/workflows/playwright.yml)

A beginner QA automation portfolio project built with Playwright and TypeScript.

## What this project tests

- A user can add a to-do item.
- A user can mark a to-do item as complete.
- A user can view completed to-do items using the Completed filter.
- A user can view active to-do items using the Active filter.

## Technology

- Playwright
- Typescript
- Node.js
- Github Actions

## Test design

This project uses the Page Object Model (POM). Reusable website actions and locators live in `pages/todo.page.ts`, keeping each test focused on user behavior and expected results.

## Run the tests

```bash
npx playwright test
```

## QA documentation
- [TodoMVC test plan](docs/test-plan.md)