//=============================================================================
// NewGameButtonOnly.js
//=============================================================================

/*:
 * @plugindesc This plugin shows only the new game button on the title screen
 * @author William Garnes
 *
 * @help There are no plugin commands for this plugin
 */

(function () {
    Window_TitleCommand.prototype.makeCommandList = function () {
        this.addCommand(TextManager.newGame, 'newGame')
        //this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled())
    }

    Window_MenuCommand.prototype.addOptionsCommand = function () { }
})();