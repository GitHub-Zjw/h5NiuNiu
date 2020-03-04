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
/**
  * 面板mediator基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * todo:面板特效，全屏+非全屏蒙层
  */
var BasePanelMediator = (function (_super) {
    __extends(BasePanelMediator, _super);
    function BasePanelMediator(mediatorName, viewComponent) {
        if (mediatorName === void 0) { mediatorName = ""; }
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.isInitialized = false; //是否初始化
        _this.isPopUp = false; //是否已经显示
        _this.ui = null; //UI容器
        _this.w = 0;
        _this.h = 0;
        _this.w = GameConfig.curWidth();
        _this.h = GameConfig.curHeight();
        return _this;
    }
    /**
    * 添加面板方法
    * @param panel       		面板
    * @param dark        		背景是否变黑
    * @param popUpWidth      	指定弹窗宽度，定位使用
    * @param popUpHeight      	指定弹窗高度，定位使用
    * @param effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BasePanelMediator.prototype.showUI = function (ui, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        this.ui = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
    };
    /**
    * 居中显示面板
    * @param panel       		面板
    * @param dark        		背景是否变黑
    * @param effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BasePanelMediator.prototype.showUIInCenter = function (ui, dark, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        this.showUI(ui, dark, ui.width, ui.height, effectType, isAlert);
    };
    /**
     * 面板弹出之前处理
     */
    BasePanelMediator.prototype.beforShow = function () {
    };
    /**
     * 初始化面板ui
     */
    BasePanelMediator.prototype.initUI = function () {
    };
    /**
     * 初始化面板数据
     */
    BasePanelMediator.prototype.initData = function () {
    };
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BasePanelMediator.prototype.closePanel = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        PopUpManager.removePopUp(this.ui, effectType);
        this.destroy();
    };
    /**
     * 面板关闭后需要销毁的对象
     */
    BasePanelMediator.prototype.destroy = function () {
        this.ui.destroy();
        this.ui = null;
    };
    /**
     * 面板是否弹出状态
     */
    BasePanelMediator.prototype.getIsPopUp = function () {
        return this.isPopUp;
    };
    /**
     * 面板是否初始化完毕
     */
    BasePanelMediator.prototype.getIsInit = function () {
        return this.isInitialized;
    };
    // 获取面板宽度
    BasePanelMediator.prototype.getWidth = function () {
        return this.ui.width;
    };
    // 获取面板高度
    BasePanelMediator.prototype.getHeight = function () {
        return this.ui.height;
    };
    return BasePanelMediator;
}(puremvc.Mediator));
__reflect(BasePanelMediator.prototype, "BasePanelMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=BasePanelMediator.js.map