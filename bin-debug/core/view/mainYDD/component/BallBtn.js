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
var BallBtn = (function (_super) {
    __extends(BallBtn, _super);
    function BallBtn() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/mainYDD/component/BallBtnSkin.exml";
        return _this;
    }
    BallBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BallBtn.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.registEven();
    };
    BallBtn.prototype.registEven = function () {
        this.line.addEventListener('complete', this.onTweenGroupComplete, this);
        AllData.instance.addEventListener(GameNotify.STOP_BETS, this.onStopBets, this);
        AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onGameStar, this);
    };
    BallBtn.prototype.removeEven = function () {
        this.line.removeEventListener('complete', this.onTweenGroupComplete, this);
        AllData.instance.removeEventListener(GameNotify.STOP_BETS, this.onStopBets, this);
        AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onGameStar, this);
    };
    /**
     * 显示选中动画
     */
    BallBtn.prototype.showSelectedAmi = function () {
        this.line_img.visible = true;
        this.line.play(0);
    };
    /**
     * 隐藏选中动画
     */
    BallBtn.prototype.hideSelectedAmi = function () {
        this.line_img.visible = false;
        this.line.stop();
    };
    BallBtn.prototype.onTweenGroupComplete = function () {
        this.line.play(0);
    };
    BallBtn.prototype.onGameStar = function () {
        this.enabled = true;
    };
    BallBtn.prototype.onStopBets = function () {
        this.enabled = false;
        this.hideSelectedAmi();
    };
    return BallBtn;
}(eui.Button));
__reflect(BallBtn.prototype, "BallBtn", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BallBtn.js.map