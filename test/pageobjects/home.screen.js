class HomeScreen {
    get btnLogin() { return $('~Login'); }

    async openLogin() {
        await this.btnLogin.click();
    }
}

module.exports = new HomeScreen();
