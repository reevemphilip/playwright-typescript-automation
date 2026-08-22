import { type Locator, type Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(todoText: string) {
    await this.newTodo.fill(todoText);
    await this.newTodo.press('Enter');
  }

  getTodoItem(todoText: string) {
    return this.todoItems.filter({ hasText: todoText });
  }

  async completeTodo(todoText: string) {
    await this.getTodoItem(todoText).getByRole('checkbox').check();
  }

  async showCompletedTodos() {
    await this.page.getByRole('link', { name: 'Completed' }).click();
  }
}