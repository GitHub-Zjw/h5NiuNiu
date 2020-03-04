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
var BallCom = (function (_super) {
    __extends(BallCom, _super);
    /**
     * 小球
     * @param sourceIndex 小球索引
     */
    function BallCom(sourceIndex) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/mainYDD/component/BallComSkin.exml";
        _this._sourceIndex = sourceIndex;
        return _this;
    }
    BallCom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BallCom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    BallCom.prototype.removeEvent = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.playJoinAmi, this);
    };
    /**
     * 显示投注动画
     * @param x 目标点x
     * @param y 目标点y
     */
    BallCom.prototype.showJoinAmi = function (x, y) {
        this._endX = x;
        this._endY = y;
        if (this.icon_img) {
            this.playJoinAmi();
        }
        else {
            this.addEventListener(eui.UIEvent.COMPLETE, this.playJoinAmi, this);
        }
    };
    BallCom.prototype.playJoinAmi = function () {
        this.visible = true;
        this.icon_img.source = AllData.instance.ballSource[this._sourceIndex];
        var twX = egret.Tween.get(this);
        twX.to({ x: this._endX }, 300, egret.Ease.quintOut);
        var twY = egret.Tween.get(this);
        twY.to({ y: this._endY }, 300);
    };
    /**
     * 回收小球
     */
    BallCom.prototype.hideBall = function () {
        this.visible = false;
        egret.Tween.removeTweens(this);
    };
    BallCom.NAME = "BallCom";
    return BallCom;
}(eui.Component));
__reflect(BallCom.prototype, "BallCom", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BallCom.js.map