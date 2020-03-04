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
    var BetRecordsItem = (function (_super) {
        __extends(BetRecordsItem, _super);
        function BetRecordsItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/panelYDD/BetDetails/BetRecordsItemSkin.exml";
            return _this;
        }
        BetRecordsItem.prototype.dataChanged = function () {
            this.betNum_lab.text = this.data.money + " HDAG";
            var isWinStr = this.data.isWin ? "+" : "-";
            this.TorF_lab.text = isWinStr + this.data.money + " HDAG";
            var imgS = "";
            switch (this.data.region) {
                case EnumerationType.RegionWinner.black:
                    imgS = "heiSheng";
                    break;
                case EnumerationType.RegionWinner.red:
                    imgS = "hongSheng";
                    break;
                case EnumerationType.RegionWinner.blackS:
                case EnumerationType.RegionWinner.redS:
                    imgS = "otherPoint";
                    break;
                default:
                    break;
            }
            imgS += "_png";
            this.color_img.source = imgS;
        };
        return BetRecordsItem;
    }(eui.ItemRenderer));
    betDetails.BetRecordsItem = BetRecordsItem;
    __reflect(BetRecordsItem.prototype, "betDetails.BetRecordsItem", ["eui.UIComponent", "egret.DisplayObject"]);
})(betDetails || (betDetails = {}));
//# sourceMappingURL=BetRecordsItem.js.map