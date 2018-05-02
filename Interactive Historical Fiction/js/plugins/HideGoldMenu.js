//=============================================================================
// HideGoldMenu.js
//=============================================================================

/*:
 * @plugindesc This will hide the gold in the pause menu
 * @author William Garnes
 *
 * @help There are no plugin commands for this plugin
 */

(function () {
    Scene_Menu.prototype.createGoldWindow = function () {
        this._goldWindow = new Window_Gold(0, 0);
        this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
        this.addWindow(this._goldWindow);
        this._goldWindow.hide();
    };
})();