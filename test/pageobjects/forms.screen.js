class FormsScreen {
    get inputField() { return $('~text-input'); }
    get switchButton() { return $('~switch'); }
    get dropdown() { return $('~Dropdown'); }
    get btnActive() { return $('~button-Active'); }
    get msgResult() { return $('~message'); }

    async preencherFormulario(texto) {
        await this.inputField.setValue(texto);
        await this.switchButton.click();
        await this.dropdown.click();
        // await $('//android.widget.CheckedTextView[@text="This app is awesome"]').click();
        // await this.swipeUpIOS();
        await this.selectAwesomeApp();
        await this.btnActive.click();
    }

    // async selectAwesomeApp() {
    //     if (driver.isAndroid) {
    //         await $('//android.widget.CheckedTextView[@text="This app is awesome"]').click();
    //     } else {
    //         // Para iOS - usando accessibility id ou outro seletor
    //         // await $('~This app is awesome').click();
    //         await $('-ios predicate string:value == "This app is awesome" AND type == "XCUIElementTypePickerWheel"').click();
    //         // ou usando XPath para iOS
    //         // await $('//XCUIElementTypeStaticText[@name="This app is awesome"]').click();
    //     }
    // }


    async selectAwesomeApp() {
        if (driver.isAndroid) {
            await $('//android.widget.CheckedTextView[@text="webdriver.io is awesome"]').click();
        } else {
            // Para iOS - usando accessibility id ou outro seletor
            // await $('~This app is awesome').click();
            // await $('-ios predicate string:value == "webdriver.io is awesome" AND type == "XCUIElementTypePickerWheel"').click();
            // ou usando XPath para iOS
            // await $('//XCUIElementTypeStaticText[@name="This app is awesome"]').click();
        }
    }

    async validarMensagemSucesso() {
        // waitForDisplayed ainda funciona, mas retorna boolean
        const formScreen = await $('~Forms-screen'); // id da tela de forms
        const isDisplayed = await this.formScreen.waitForDisplayed({
            timeout: 15000
        });

        // Então você pode fazer a asserção
        await expect(isDisplayed).toBe(true);
    }

    async swipeUpIOS() {
        await driver.execute('mobile: swipe', {
            direction: 'up',
            element: await $('//XCUIElementTypeOther[@name="Home Webview Login Forms Swipe Drag"][2]').elementId
        });
    }

}
module.exports = new FormsScreen();



// const Base = require('./base.screen');

// class FormScreen extends Base {


//     async validarMensagemSucesso() {
//         // waitForDisplayed ainda funciona, mas retorna boolean
//         const formScreen = await $('~Forms-screen'); // id da tela de forms
//         const isDisplayed = await this.formScreen.waitForDisplayed({
//             timeout: 15000
//         });

//         // Então você pode fazer a asserção
//         await expect(isDisplayed).toBe(true);
//     }
// }
// module.exports = new FormScreen();
