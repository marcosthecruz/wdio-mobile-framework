const Menu = require('../pageobjects/menu.screen');
const Form = require('../pageobjects/forms.screen');

describe('Navegação entre telas', () => {
    it('deve navegar até Forms e voltar para Home', async () => {
        await Menu.irParaForms();
        const title = await $('~Forms-screen');
        await title.waitForDisplayed({ timeout: 15000 });
        await Menu.voltarHome();
        const home = await $('~Home-screen');
        await home.waitForDisplayed({ timeout: 15000 });
    });
});
