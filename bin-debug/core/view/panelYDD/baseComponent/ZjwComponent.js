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
var ZjwComponent = (function (_super) {
    __extends(ZjwComponent, _super);
    function ZjwComponent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.initView, _this);
        return _this;
    }
    /**
     * 初始化界面显示
     */
    ZjwComponent.prototype.initView = function () {
        this._allBtn = ErgodicUtils.getAllButton(this);
        this.addEvent();
    };
    /**
     * 添加事件
     */
    ZjwComponent.prototype.addEvent = function () {
        var len = this._allBtn.length;
        for (var i = 0; i < len; i++) {
            this._allBtn[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
        }
    };
    /**
     * 移除事件
     */
    ZjwComponent.prototype.removeEvent = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.initView, this);
        var len = this._allBtn.length;
        for (var i = 0; i < len; i++) {
            this._allBtn[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
        }
        this._allBtn = [];
    };
    /**
     * 移除面板方法
     */
    ZjwComponent.prototype.destroy = function () {
        this.removeEvent();
    };
    /**
     * 界面按钮点击事件
     */
    ZjwComponent.prototype.onBtnClick = function (e) { };
    return ZjwComponent;
}(eui.Component));
__reflect(ZjwComponent.prototype, "ZjwComponent", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ZjwComponent.js.map