var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var gameMethod;
(function (gameMethod) {
    var GameMethodPanel = (function (_super) {
        __extends(GameMethodPanel, _super);
        function GameMethodPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/panelYDD/GameMethod/GameMethodPanelSkin.exml";
            return _this;
        }
        GameMethodPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        GameMethodPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.details_scl.verticalScrollBar.visible = false;
            this.details_scl.verticalScrollBar.autoVisibility = false;
            this.details_list.itemRenderer = gameMethod.GameMethodItem;
            this.details_list.dataProvider = this.listData();
        };
        GameMethodPanel.prototype.listData = function () {
            var returnValue = new eui.ArrayCollection(AllData.instance.GmaeMethItemTypeDatas);
            return returnValue;
        };
        GameMethodPanel.prototype.onBtnClick = function (e) {
            _super.prototype.onBtnClick.call(this, e);
            var btn = e.target;
            switch (btn) {
                case this.close_btn:
                    game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_GAME_METHOD);
                    break;
            }
        };
        return GameMethodPanel;
    }(ZjwComponent));
    gameMethod.GameMethodPanel = GameMethodPanel;
    __reflect(GameMethodPanel.prototype, "gameMethod.GameMethodPanel");
})(gameMethod || (gameMethod = {}));
//# sourceMappingURL=GameMethodPanel.js.map