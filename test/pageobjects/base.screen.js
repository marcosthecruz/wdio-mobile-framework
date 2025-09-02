class BaseScreen {
    async click(selector) { const el = await $(selector); await el.waitForDisplayed({ timeout: 15000 }); await el.click(); }
    async type(selector, value) { const el = await $(selector); await el.waitForDisplayed({ timeout: 15000 }); await el.setValue(value); }
    async getText(selector) { const el = await $(selector); await el.waitForDisplayed({ timeout: 15000 }); return el.getText(); }
    async isDisplayed(selector) {
        const el = await $(selector);
        return el.isDisplayed();
    }

    async hideKeyboard() {
        try {
            await driver.hideKeyboard();
        } catch (err) {
            console.log('Teclado não estava visível, seguindo...');
        }
    }

    get btnOK() {
        return driver.isAndroid
            ? $('id:android:id/button1')
            : $('~OK');
    }
}
module.exports = BaseScreen;
