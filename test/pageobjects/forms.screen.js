class FormsScreen {
    get inputField() { return $('~text-input'); }
    get switchButton() { return $('~switch'); }
    get dropdown() { return $('~Dropdown'); }
    get btnActive() { return $('~button-Active'); }
    get msgResult() { return $('~message'); }
    get iosDoneBtn() { return $('~Done'); }
    get iosPickerWheel() { return $('-ios class chain:**/XCUIElementTypePickerWheel'); }
    get androidAwesomeItem() {
        return $('//android.widget.CheckedTextView[@text="webdriver.io is awesome"]');
    }


    async preencherFormulario(texto) {
        await this.inputField.setValue(texto);
        await this.switchButton.click();
        await this.dropdown.click();
        await this.selectAwesomeApp();
        await this.btnActive.click();
    }

    async selectAwesomeApp() {
        const target = 'webdriver.io is awesome';

        if (driver.isAndroid) {
            await this.androidAwesomeItem.waitForDisplayed({ timeout: 10000 });
            await this.androidAwesomeItem.click();
            return;
        }

        // ----- iOS -----
        const wheel = await this.iosPickerWheel;
        await wheel.waitForDisplayed({ timeout: 10000 });

        try {
            await wheel.setValue(target);
        } catch (_) {
            // Fallback: gira a roda até achar o valor usando mobile:selectPickerWheelValue
            // Tenta 10 passos pra frente; se não achar, 10 pra trás.
            const trySelect = async (order, steps = 10) => {
                for (let i = 0; i < steps; i++) {
                    const val = (await wheel.getAttribute('value')) || '';
                    if (val.toLowerCase().includes('awesome')) return true;
                    await driver.execute('mobile: selectPickerWheelValue', {
                        element: wheel.elementId,
                        order,         // 'next' | 'previous'
                        offset: 0.15   // quão “forte” gira a roda
                    });
                }
                return (await wheel.getAttribute('value') || '').toLowerCase().includes('awesome');
            };

            if (!(await trySelect('next'))) {
                await trySelect('previous');
            }
        }

        let done = this.iosDoneBtn;
        if (!(await done.isDisplayed().catch(() => false))) {
            done = await $('-ios predicate string:name == "Done" OR label == "Done" OR name CONTAINS "Done"');
        }
        if (await done.isDisplayed().catch(() => false)) {
            await done.click();
        }
    }

    async validarMensagemSucesso() {
        const formScreen = await $('~Forms-screen');
        const isDisplayed = await this.formScreen.waitForDisplayed({
            timeout: 15000
        });
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
