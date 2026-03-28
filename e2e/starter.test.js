describe('Index Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

 

  it('should show the welcome text with Cristiano', async () => {
    await expect(element(by.id('welcome-text'))).toBeVisible();
    await expect(element(by.id('welcome-text'))).toHaveText('Hi! my name is Cristiano 😊');
  });

  it('should change name to Ronaldo when button is pressed', async () => {
    await element(by.id('change-name-button')).tap();
    await expect(element(by.id('welcome-text'))).toHaveText('Hi! my name is Ronaldo 😊');
  });
});