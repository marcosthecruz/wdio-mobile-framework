// test/pageobjects/drag.screen.js
class DragScreen {
    get menu() { return $('~Drag'); }
    get dragItem() { return $('~drag-l1'); } // exemplo de peça do puzzle
    // get successMsg() { return $('~success'); }
    get successMsg() { return $('//android.widget.TextView[@text="Congratulations"]'); }

    async open() {
        await this.menu.click();
    }
}
module.exports = new DragScreen();
