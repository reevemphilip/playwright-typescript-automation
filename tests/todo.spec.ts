import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/todo.page';

test.describe('Todo List', () => {
  test('@smoke user can add a todo item', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');

    await expect(todoPage.getTodoItem('Learn Playwright')).toContainText(
      'Learn Playwright',
    );
  });

  test('@smoke user can complete a todo item', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');
    await todoPage.completeTodo('Learn Playwright');

    await expect(todoPage.getTodoItem('Learn Playwright')).toHaveClass(
      /completed/,
    );
  });

  test('user can view active todo items', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');
    await todoPage.addTodo('Practice selectors');
    await todoPage.completeTodo('Learn Playwright');
    await todoPage.showActiveTodos();

    await expect(todoPage.getTodoItem('Practice selectors')).toBeVisible();
    await expect(todoPage.getTodoItem('Learn Playwright')).not.toBeVisible();
  });

  test('user can view completed todo items', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');
    await todoPage.completeTodo('Learn Playwright');
    await todoPage.showCompletedTodos();

    await expect(todoPage.getTodoItem('Learn Playwright')).toBeVisible();
  });

  test('@smoke user can clear completed todo items', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');
    await todoPage.completeTodo('Learn Playwright');
    await todoPage.clearCompletedTodos();

    await expect(todoPage.getTodoItem('Learn Playwright')).toHaveCount(0);
  });

  test('user sees the number of active todo items', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');
    await todoPage.addTodo('Practice selectors');

    await expect(todoPage.page.getByText('2 items left')).toBeVisible();

    await todoPage.completeTodo('Learn Playwright');

    await expect(todoPage.page.getByText('1 item left')).toBeVisible();
  });

  test('user can edit a todo item', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Learn Playwright');
    await todoPage.editTodo('Learn Playwright', 'Practice Playwright');

    await expect(todoPage.getTodoItem('Practice Playwright')).toBeVisible();
  });
});
