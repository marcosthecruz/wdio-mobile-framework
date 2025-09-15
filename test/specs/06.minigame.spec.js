const Drag = require('../pageobjects/minigame.screen');

describe('Mini Game', () => {
    it('deve arrastar a peça e completar o quebra-cabeça', async () => {
        await Drag.open();
        await Drag.dragItem.waitForDisplayed({ timeout: 10000 });

        // Arrastar item para o destino
        await driver.execute('mobile: dragGesture', {
            elementId: await Drag.dragItem.elementId,
            endX: 300,
            endY: 500
        });



        await Drag.successMsg.waitForDisplayed({ timeout: 3000 });
        console.log("Quebra-cabeça resolvido com sucesso");
    });
});
