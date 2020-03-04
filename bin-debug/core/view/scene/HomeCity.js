/**
 * 主城
 */
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
var game;
(function (game) {
    var HomeCity = (function (_super) {
        __extends(HomeCity, _super);
        function HomeCity() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/scene/HomeCitySkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        HomeCity.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            GameLayerManager.gameLayer().sceneLayer.addChild(this);
        };
        HomeCity.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return HomeCity;
    }(eui.Component));
    game.HomeCity = HomeCity;
    __reflect(HomeCity.prototype, "game.HomeCity");
})(game || (game = {}));
//# sourceMappingURL=HomeCity.js.map