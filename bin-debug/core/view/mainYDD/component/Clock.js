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
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        var _this = _super.call(this) || this;
        _this._surplusTime = 25;
        _this.skinName = "resource/ui/mainYDD/component/ClockSkin.exml";
        return _this;
    }
    Clock.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Clock.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Clock.prototype.dispose = function () {
        this.removeTimer();
    };
    /**
     * 开始计时
     */
    Clock.prototype.starTiming = function (timeNum) {
        if (timeNum === void 0) { timeNum = 25; }
        this.visible = true;
        this._surplusTime = timeNum;
        this.surplusTime_lab.text = this._surplusTime.toString();
        this.startTimer(1000);
    };
    Clock.prototype.startTimer = function (time) {
        if (this._timer == null) {
            this._timer = new egret.Timer(time);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        }
        this._timer.start();
        this.onTimer(null);
    };
    Clock.prototype.removeTimer = function () {
        if (this._timer) {
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            this._timer.stop();
            this._timer = null;
        }
    };
    Clock.prototype.onTimer = function (e) {
        this._surplusTime--;
        if (this._surplusTime < 0) {
            this.visible = false;
            AllData.instance.dispatchEventWith(GameNotify.STOP_BETS);
            this.removeTimer();
        }
        else {
            this.surplusTime_lab.text = this._surplusTime.toString();
        }
    };
    return Clock;
}(eui.Component));
__reflect(Clock.prototype, "Clock", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Clock.js.map