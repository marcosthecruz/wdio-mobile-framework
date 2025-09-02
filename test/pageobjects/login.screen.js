const Base = require('./base.screen');
class LoginScreen extends Base {
  get inputEmail() { return $('~input-email'); }
  get inputPassword() { return $('~input-password'); }
  get btnLogin() { return $('~button-LOGIN'); }
  get msgError() { return $('~login-error'); }
  // get msgSuccess() { return $('id:android:id/alertTitle'); }
  get msgSuccess() {
    return driver.isAndroid
      ? $('id:android:id/alertTitle')
      : $('-ios predicate string:name == "Success"');
  }
  get btnOK() {
    return driver.isAndroid
      ? $('id:android:id/button1')
      : $('~OK');
  }

  async login(email, pass) {
    await this.inputEmail.waitForDisplayed({ timeout: 10000 });
    // preenchimento de user e password;
    await this.inputEmail.click();
    await this.inputEmail.setValue(email);

    await this.inputPassword.click();
    await this.inputPassword.setValue(pass);
    await this.hideKeyboard();

    await this.btnLogin.waitForDisplayed({ timeout: 10000 });
    await this.btnLogin.click();
  }

  async validarSucess() {
    await this.msgSuccess.waitForDisplayed({ timeout: 10000 });
    await this.msgSuccess.waitForDisplayed();
    console.log("AQUI");
  }

  async clickOKButton() {
    await this.btnOK.waitForDisplayed({ timeout: 10000 });
    await this.btnOK.click();
  }
}
module.exports = new LoginScreen();
