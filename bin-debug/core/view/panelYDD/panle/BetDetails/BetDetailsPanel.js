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
    var BetDetailsPanel = (function (_super) {
        __extends(BetDetailsPanel, _super);
        function BetDetailsPanel(isDetail) {
            if (isDetail === void 0) { isDetail = true; }
            var _this = _super.call(this) || this;
            _this._isDetail = isDetail;
            _this.skinName = "resource/ui/panelYDD/BetDetails/BetDetailsPanelSkin.exml";
            return _this;
        }
        BetDetailsPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        BetDetailsPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.details_scl.verticalScrollBar.visible = false;
            this.details_scl.verticalScrollBar.autoVisibility = false;
        };
        BetDetailsPanel.prototype.initView = function () {
            _super.prototype.initView.call(this);
            if (this._isDetail) {
                this.currentState = "betDetail";
                this.details_list.itemRenderer = betDetails.BetDetailsItem;
            }
            else {
                this.currentState = "betRecord";
                this.details_list.itemRenderer = betDetails.BetRecordsItem;
            }
            this.details_list.dataProvider = this.listData();
        };
        BetDetailsPanel.prototype.listData = function () {
            if (this._isDetail) {
                var returnValue = new eui.ArrayCollection(AllData.instance.BetDetailsTypeDatas);
                return returnValue;
            }
            else {
                var returnValue = new eui.ArrayCollection(AllData.instance.BetRecordsTypeDatas);
                return returnValue;
            }
        };
        BetDetailsPanel.prototype.onBtnClick = function (e) {
            var btn = e.target;
            switch (btn) {
                case this.close_btn:
                    game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_BET_DETAIL);
                    break;
            }
        };
        /**
         * 刷新界面
         */
        BetDetailsPanel.prototype.refreshView = function () {
            this.details_list.dataProvider = this.listData();
        };
        return BetDetailsPanel;
    }(ZjwComponent));
    betDetails.BetDetailsPanel = BetDetailsPanel;
    __reflect(BetDetailsPanel.prototype, "betDetails.BetDetailsPanel");
})(betDetails || (betDetails = {}));
//# sourceMappingURL=BetDetailsPanel.js.map