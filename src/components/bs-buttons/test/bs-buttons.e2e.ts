import { newE2EPage } from '@stencil/core/testing';

describe('bs-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bs-buttons></bs-buttons>');

    const element = await page.find('bs-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
