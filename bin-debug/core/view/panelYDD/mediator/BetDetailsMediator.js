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
var betDetails;
(function (betDetails) {
    var BetDetailsMediator = (function (_super) {
        __extends(BetDetailsMediator, _super);
        function BetDetailsMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            return _super.call(this, BetDetailsMediator.NAME, viewComponent) || this;
        }
        BetDetailsMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BET_DETAIL,
                PanelNotify.CLOSE_BET_DETAIL
            ];
        };
        BetDetailsMediator.prototype.handleNotification = function (notification) {
            this._badyData = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_BET_DETAIL:
                    var group = "betDetails"; //要确保
                    if (RES.getRes("tzxq_png")) {
                        this.showMainUI();
                    }
                    else {
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
                        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
                        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
                    }
                    // RES.createGroup(group, this.stImages);
                    RES.loadGroup(group);
                    //显示角色面板
                    break;
                case PanelNotify.CLOSE_BET_DETAIL:
                    this.closePanel(1);
                    break;
            }
        };
        BetDetailsMediator.prototype.showMainUI = function () {
            if (this._betDetailsPanel == null) {
                this._betDetailsPanel = new betDetails.BetDetailsPanel(this._badyData);
            }
            this.showUIInCenter(this._betDetailsPanel, true, 1);
        };
        BetDetailsMediator.prototype.stLoadProcess = function () { };
        BetDetailsMediator.prototype.error = function () {
            console.warn("资源加载失败：betDetails");
        };
        /**
         * 面板关闭后需要销毁的对象
         */
        BetDetailsMediator.prototype.destroy = function () {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
            this._betDetailsPanel = null;
            _super.prototype.destroy.call(this);
        };
        BetDetailsMediator.NAME = "BetDetailsMediator";
        return BetDetailsMediator;
    }(BasePanelMediator));
    betDetails.BetDetailsMediator = BetDetailsMediator;
    __reflect(BetDetailsMediator.prototype, "betDetails.BetDetailsMediator");
})(betDetails || (betDetails = {}));
//# sourceMappingURL=BetDetailsMediator.js.map