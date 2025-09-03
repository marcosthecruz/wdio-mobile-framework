const Home = require('../pageobjects/home.screen');
const SignUp = require('../pageobjects/signup.screen');

describe('Cadastro - sucesso', () => {
    it('deve cadastrar novo usuario', async () => {
        await Home.openLogin();
        await SignUp.btnSignUp.click();
        await SignUp.cadastrar('newuser@test.com', '87654321');
        await SignUp.validarMenssageSucesso();
        await SignUp.btnOK.click();
    });
});