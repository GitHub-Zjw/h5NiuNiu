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
    var BetDetailsItem = (function (_super) {
        __extends(BetDetailsItem, _super);
        function BetDetailsItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/panelYDD/BetDetails/BetDetailsItem.exml";
            return _this;
        }
        BetDetailsItem.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        BetDetailsItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        BetDetailsItem.prototype.dataChanged = function () {
            this.playerbet_lab.text = this.data.money + " HDAG";
            this.playerName_lab.text = this.data.playerName;
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
        return BetDetailsItem;
    }(eui.ItemRenderer));
    betDetails.BetDetailsItem = BetDetailsItem;
    __reflect(BetDetailsItem.prototype, "betDetails.BetDetailsItem", ["eui.UIComponent", "egret.DisplayObject"]);
})(betDetails || (betDetails = {}));
//# sourceMappingURL=BetDetailsItem.js.map