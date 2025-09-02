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



    // console.log('DEBUG users.invalid:', users.invalid);
    // users.invalid.forEach((u, idx) => {
    //     it(`erro login caso ${idx + 1}`, async () => {
    //         await Login.login(u.email, u.password);
    //         const err = await Login.msgError;
    //         await err.waitForDisplayed();
    //         expect((await err.getText()).toLowerCase()).to.include(u.message.split(' ')[0].toLowerCase());
    //     });
    // });
});
