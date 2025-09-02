const Base = require('./base.screen');

class FormScreen extends Base {


    async validarMensagemSucesso() {
        // waitForDisplayed ainda funciona, mas retorna boolean
        const formScreen = await $('~Forms-screen'); // id da tela de forms
        const isDisplayed = await this.formScreen.waitForDisplayed({
            timeout: 15000
        });

        // Então você pode fazer a asserção
        await expect(isDisplayed).toBe(true);
    }
}
module.exports = new FormScreen();
