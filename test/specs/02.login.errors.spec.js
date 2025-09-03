const Home = require('../pageobjects/home.screen');
const Login = require('../pageobjects/login.screen');
const users = require('../data/users.json');

describe('Login - mensagens de erro', () => {
    users.invalid.forEach((u, idx) => {
        it(`deve exibir erro ${idx + 1}`, async () => {
            await Home.openLogin();
            await Login.login(u.email, u.password);
            await Login.passError.waitForDisplayed({ timeout: 10000 });
        });
    });
});
