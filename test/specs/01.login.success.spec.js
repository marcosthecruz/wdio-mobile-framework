const Home = require('../pageobjects/home.screen');
const Login = require('../pageobjects/login.screen');
const users = require('../data/users.json');

describe('Login - sucesso', () => {

    it('deve logar com credenciais válidas', async () => {
        await Home.openLogin();
        const { email, password } = users.valid[0];
        await Login.login(email, password);
        await Login.validarSucess();
        await Login.clickOKButton();
    });
});
