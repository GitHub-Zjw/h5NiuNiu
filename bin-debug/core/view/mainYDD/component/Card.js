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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super.call(this) || this;
        _this._color = EnumerationType.Color.null;
        _this._cardNum = 0;
        _this.skinName = "resource/ui/mainYDD/component/CardSkin.exml";
        return _this;
    }
    Card.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Card.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEvent();
    };
    Card.prototype.addEvent = function () {
        AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
    };
    Card.prototype.removeEvent = function () {
        AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
    };
    /**
     * 设置卡牌
     * @param index 卡牌索引
     */
    Card.prototype.setCard = function (index) {
        this._color = AllData.instance.cardColor[index];
        this._cardNum = AllData.instance.cardNums[index];
        this.card_img.source = "card0_0_png";
    };
    Card.prototype.onBegigGame = function () {
        this.visible = false;
    };
    /**
     * 播放翻牌动画
     * @param isBig 是否要变大
     * @param return 播放动画需要的时长，x
     */
    Card.prototype.showOpenCardAmi = function (isBig) {
        var cardSource = "card" + this._color + "_" + this._cardNum + "_png";
        var returnValue = 0;
        var self = this;
        if (isBig) {
            var tw = egret.Tween.get(this.card_img);
            tw.to({ scaleX: 1.2, scaleY: 1.2 }, 150)
                .wait(100)
                .to({ scaleX: 0 }, 100)
                .call(function () {
                self.card_img.source = cardSource;
            })
                .to({ scaleX: 1.2 }, 100)
                .wait(300)
                .to({ scaleX: 1, scaleY: 1 }, 150);
            returnValue = 9;
        }
        else {
            var tw = egret.Tween.get(this.card_img);
            tw.to({ scaleX: 0 }, 150)
                .call(function () {
                self.card_img.source = cardSource;
            })
                .to({ scaleX: 1 }, 150);
            returnValue = 3;
        }
        return returnValue;
    };
    return Card;
}(eui.Component));
__reflect(Card.prototype, "Card");
//# sourceMappingURL=Card.js.map