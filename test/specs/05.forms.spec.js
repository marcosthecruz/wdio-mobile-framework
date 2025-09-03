const Menu = require('../pageobjects/menu.screen');
const Forms = require('../pageobjects/forms.screen');

describe('Preenchimento de formulários', () => {
    it('deve preencher e enviar formulário', async () => {
        await Menu.irParaForms();
        await Forms.preencherFormulario('Teste automação');
        await Forms.msgResult.isDisplayed();
    });
});
