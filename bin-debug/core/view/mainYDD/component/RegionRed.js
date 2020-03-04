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
var RegionRed = (function (_super) {
    __extends(RegionRed, _super);
    function RegionRed() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/mainYDD/component/RegionRedSkin.exml";
        return _this;
    }
    RegionRed.prototype.onBegigGame = function () {
        if (this.win_img) {
            this.win_img.alpha = 0;
        }
    };
    RegionRed.prototype.showWinAmi = function () {
        _super.prototype.showWinAmi.call(this);
        if (this.win_img) {
            var num = this.numChildren - 1;
            this.setChildIndex(this.win_img, num);
            this.win_img.alpha = 1;
        }
    };
    Object.defineProperty(RegionRed.prototype, "StarPointX", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionRed.prototype, "StarPointY", {
        get: function () {
            return this.height + 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionRed.prototype, "SelfStarPointX", {
        get: function () {
            return this.width * 0.45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionRed.prototype, "SelfStarPointY", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    return RegionRed;
}(BaseRegion));
__reflect(RegionRed.prototype, "RegionRed");
//# sourceMappingURL=RegionRed.js.map