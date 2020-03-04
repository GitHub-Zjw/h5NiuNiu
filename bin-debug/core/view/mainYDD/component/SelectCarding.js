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
var SelectCarding = (function (_super) {
    __extends(SelectCarding, _super);
    function SelectCarding() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/mainYDD/component/SelectCardingSkin.exml";
        return _this;
    }
    SelectCarding.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SelectCarding.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**
     * 播放选牌动画
     */
    SelectCarding.prototype.showSelectAmi = function () {
        this.visible = true;
        this.startTimer(100);
    };
    SelectCarding.prototype.startTimer = function (time) {
        if (this._timer == null) {
            this._timer = new egret.Timer(time);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        }
        this._timeNum = 0;
        this._timer.start();
        this.onTimer(null);
    };
    SelectCarding.prototype.removeTimer = function () {
        if (this._timer) {
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this._timer.stop();
            this._timer = null;
        }
    };
    //发牌具体时间控制
    SelectCarding.prototype.onTimer = function (e) {
        if (this._timeNum < this.zi_Group.numChildren) {
            var img = this.zi_Group.getChildAt(this._timeNum);
            EffectUtils.jumpEffect(img);
        }
        else {
            if (AllData.instance.cardNums.length > 0) {
                AllData.instance.dispatchEventWith(GameNotify.SEND_CARD);
                this.removeTimer();
                this.visible = false;
            }
            else {
                this._timeNum = -1;
            }
        }
        this._timeNum++;
    };
    return SelectCarding;
}(eui.Component));
__reflect(SelectCarding.prototype, "SelectCarding", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=SelectCarding.js.map