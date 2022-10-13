var budgetController = (function () {

})();
var UIController = (function () {

})();
var controller = (function (budgetCntl, UICntl) {
    var ctrlAddItem = function () {
        console.log(`it works.`)
    }
    document.querySelector(`.btn`).addEventListener(`click`, ctrlAddItem);
    document.addEventListener(`keypress`, function (event) {
        if (event === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);