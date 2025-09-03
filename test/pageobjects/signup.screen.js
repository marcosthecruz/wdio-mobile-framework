const Base = require('./base.screen');

class SignUpScreen extends Base {
    get btnSignUp() { return $('~button-sign-up-container'); }
    get inputEmail() { return $('~input-email'); }
    get inputPassword() { return $('~input-password'); }
    get inputConfPassword() { return $('~input-repeat-password'); }
    get btnSubmit() { return $('~button-SIGN UP'); }
    get msgSuccess() {
        return driver.isAndroid
            ? $('id:android:id/alertTitle')
            : $('~You successfully signed up!');
    }

    async cadastrar(email, pass) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.inputConfPassword.setValue(pass);
        await this.btnSubmit.click();
    }

    async validarMenssageSucesso() {
        await this.msgSuccess.waitForDisplayed({ timeout: 15000 });
    }
}

module.exports = new SignUpScreen();
