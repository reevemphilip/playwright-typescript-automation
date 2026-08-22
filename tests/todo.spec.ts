import {test, expect} from '@playwright/test';

test('user can add a todo item', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const newTodo = page.getByPlaceholder("What needs to be done?");

    await newTodo.fill('Learn Playwright');

    await newTodo.press('Enter');

    await expect(page.getByTestId('todo-item')).toContainText('Learn Playwright')

});

test('user can complete a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const newTodo = page.getByPlaceholder('What needs to be done?');

  await newTodo.fill('Learn Playwright');
  await newTodo.press('Enter');

  const todoItem = page.getByTestId('todo-item');

  await todoItem.getByRole('checkbox').check();

  await expect(todoItem).toHaveClass(/completed/);
});