import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/todo.page';

test.describe('Todo List', () => {
test('user can add a todo item', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Learn Playwright');

  await expect(todoPage.getTodoItem('Learn Playwright')).toContainText('Learn Playwright');
});

test('user can complete a todo item', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Learn Playwright');
  await todoPage.completeTodo('Learn Playwright');

  await expect(todoPage.getTodoItem('Learn Playwright')).toHaveClass(/completed/);
});

test('user can view completed todo items', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Learn Playwright');
  await todoPage.completeTodo('Learn Playwright');
  await todoPage.showCompletedTodos();

  await expect(todoPage.getTodoItem('Learn Playwright')).toBeVisible();
});
})