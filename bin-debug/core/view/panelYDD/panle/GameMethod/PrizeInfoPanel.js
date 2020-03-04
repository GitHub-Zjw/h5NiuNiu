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
    var PrizeInfoPanel = (function (_super) {
        __extends(PrizeInfoPanel, _super);
        function PrizeInfoPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/panelYDD/GameMethod/PrizeInfoPanelSkin.exml";
            return _this;
        }
        PrizeInfoPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        PrizeInfoPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.scr.verticalScrollBar.visible = false;
            this.scr.verticalScrollBar.autoVisibility = false;
            this.descrotion_lab.text = this.desc;
        };
        PrizeInfoPanel.prototype.onBtnClick = function (e) {
            _super.prototype.onBtnClick.call(this, e);
            var btn = e.target;
            switch (btn) {
                case this.close_btn:
                    game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_GAME_METHOD);
                    break;
            }
        };
        Object.defineProperty(PrizeInfoPanel.prototype, "desc", {
            get: function () {
                return "游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。\n\n游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。\n\n游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。\n\n游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。";
            },
            enumerable: true,
            configurable: true
        });
        return PrizeInfoPanel;
    }(ZjwComponent));
    gameMethod.PrizeInfoPanel = PrizeInfoPanel;
    __reflect(PrizeInfoPanel.prototype, "gameMethod.PrizeInfoPanel");
})(gameMethod || (gameMethod = {}));
//# sourceMappingURL=PrizeInfoPanel.js.map