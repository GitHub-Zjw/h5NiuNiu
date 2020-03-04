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
var RegionBlack = (function (_super) {
    __extends(RegionBlack, _super);
    function RegionBlack() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/mainYDD/component/RegionBlackSkin.exml";
        return _this;
    }
    RegionBlack.prototype.onBegigGame = function () {
        if (this.win_img) {
            this.win_img.alpha = 0;
        }
    };
    RegionBlack.prototype.showWinAmi = function () {
        _super.prototype.showWinAmi.call(this);
        if (this.win_img) {
            var num = this.numChildren - 1;
            this.setChildIndex(this.win_img, num);
            this.win_img.alpha = 1;
        }
    };
    /**
     * 获取小球最终停止点
     */
    RegionBlack.prototype.getEndPoint = function () {
        var pEnd = new egret.Point();
        pEnd.x = AllData.instance.getRandomF(this.width * 0.2, this.width * 0.9);
        pEnd.y = AllData.instance.getRandomF(this.height * 0.3, this.height * 0.53);
        var rightDownP = new egret.Point(this.width, this.height);
        if (AllData.instance.getDistance(pEnd, rightDownP) < this.height * 0.8) {
            return this.getEndPoint();
        }
        return pEnd;
    };
    Object.defineProperty(RegionBlack.prototype, "StarPointX", {
        get: function () {
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionBlack.prototype, "SelfStarPointX", {
        get: function () {
            return this.width * 1.1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionBlack.prototype, "SelfStarPointY", {
        get: function () {
            return this.height * 0.8;
        },
        enumerable: true,
        configurable: true
    });
    return RegionBlack;
}(BaseRegion));
__reflect(RegionBlack.prototype, "RegionBlack");
//# sourceMappingURL=RegionBlack.js.map