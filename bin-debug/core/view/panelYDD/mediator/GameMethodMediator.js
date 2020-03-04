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
var gameMethod;
(function (gameMethod) {
    var GameMethodMediator = (function (_super) {
        __extends(GameMethodMediator, _super);
        function GameMethodMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            return _super.call(this, GameMethodMediator.NAME, viewComponent) || this;
        }
        GameMethodMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_GAME_METHOD,
                PanelNotify.CLOSE_GAME_METHOD
            ];
        };
        GameMethodMediator.prototype.handleNotification = function (notification) {
            this._badyData = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_GAME_METHOD:
                    if (RES.getRes("jbbg_png")) {
                        this.showMainUI();
                    }
                    else {
                        var group = "gameMethod"; //要确保
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
                        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
                        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
                        RES.loadGroup(group);
                    }
                    // RES.createGroup(group, this.stImages);
                    //显示角色面板
                    break;
                case PanelNotify.CLOSE_GAME_METHOD:
                    this.closePanel(1);
                    break;
            }
        };
        GameMethodMediator.prototype.showMainUI = function () {
            if (this._badyData) {
                if (this._betDetailsPanel == null) {
                    this._betDetailsPanel = new gameMethod.GameMethodPanel();
                }
                this.showUIInCenter(this._betDetailsPanel, true, 1);
            }
            else {
                if (this._prizeInfoPanel == null) {
                    this._prizeInfoPanel = new gameMethod.PrizeInfoPanel();
                }
                this.showUIInCenter(this._prizeInfoPanel, true, 1);
            }
        };
        GameMethodMediator.prototype.stLoadProcess = function () { };
        GameMethodMediator.prototype.error = function () {
            console.warn("资源加载失败：betDetails");
        };
        /**
         * 面板关闭后需要销毁的对象
         */
        GameMethodMediator.prototype.destroy = function () {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
            this._betDetailsPanel = null;
            this._prizeInfoPanel = null;
            _super.prototype.destroy.call(this);
        };
        GameMethodMediator.NAME = "GameMethodMediator";
        return GameMethodMediator;
    }(BasePanelMediator));
    gameMethod.GameMethodMediator = GameMethodMediator;
    __reflect(GameMethodMediator.prototype, "gameMethod.GameMethodMediator");
})(gameMethod || (gameMethod = {}));
//# sourceMappingURL=GameMethodMediator.js.map