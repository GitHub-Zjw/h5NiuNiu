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
    var GameMethodItem = (function (_super) {
        __extends(GameMethodItem, _super);
        function GameMethodItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/panelYDD/GameMethod/GameMethodItemSkin.exml";
            return _this;
        }
        GameMethodItem.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        GameMethodItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        GameMethodItem.prototype.dataChanged = function () {
            this.winner_lab.text = this.data[0];
            this.regionType_lab.text = this.data[2];
            this.moneyNum_lab.text = this.data[1];
        };
        return GameMethodItem;
    }(eui.ItemRenderer));
    gameMethod.GameMethodItem = GameMethodItem;
    __reflect(GameMethodItem.prototype, "gameMethod.GameMethodItem", ["eui.UIComponent", "egret.DisplayObject"]);
})(gameMethod || (gameMethod = {}));
//# sourceMappingURL=GameMethodItem.js.map