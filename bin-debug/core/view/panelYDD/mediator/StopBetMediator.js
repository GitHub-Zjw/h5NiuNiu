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
var StopBetMediator = (function (_super) {
    __extends(StopBetMediator, _super);
    function StopBetMediator(viewComponent) {
        if (viewComponent === void 0) { viewComponent = null; }
        return _super.call(this, StopBetMediator.NAME, viewComponent) || this;
    }
    StopBetMediator.prototype.listNotificationInterests = function () {
        return [
            PanelNotify.OPEN_STOP_BET,
            PanelNotify.CLOSE_STOP_BET
        ];
    };
    StopBetMediator.prototype.handleNotification = function (notification) {
        var data = notification.getBody();
        switch (notification.getName()) {
            case PanelNotify.OPEN_STOP_BET:
                //显示角色面板
                if (this._stopBetPanel == null) {
                    this._stopBetPanel = new StopBetPanel();
                }
                this.showUI(this._stopBetPanel, false, 0, 0, 2);
                break;
            case PanelNotify.CLOSE_STOP_BET:
                this.closePanel(0);
                break;
        }
    };
    /**
     * 面板关闭后需要销毁的对象
     */
    StopBetMediator.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    StopBetMediator.prototype.onTimer = function (e) {
        game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_STOP_BET);
    };
    StopBetMediator.NAME = "StopBetMediator";
    return StopBetMediator;
}(BasePanelMediator));
__reflect(StopBetMediator.prototype, "StopBetMediator");
//# sourceMappingURL=StopBetMediator.js.map