class MenuScreen {
    get btnHome() { return $('~Home'); }
    get btnForms() { return $('~Forms'); }
    get btnSwipe() { return $('~Swipe'); }
    get btnDrag() { return $('~Drag'); }

    async irParaForms() {
        await this.btnForms.waitForDisplayed({ timeout: 10000 });
        await this.btnForms.click();
    }

    async voltarHome() {
        await this.btnHome.waitForDisplayed({ timeout: 10000 });
        await this.btnHome.click();
    }
}
module.exports = new MenuScreen();
