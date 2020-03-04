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
var RegionOther = (function (_super) {
    __extends(RegionOther, _super);
    function RegionOther() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui/mainYDD/component/RegionOtherSkin.exml";
        return _this;
    }
    /**
     * 获取小球最终停止点
     */
    RegionOther.prototype.getEndPoint = function () {
        var pEnd = new egret.Point();
        pEnd.x = AllData.instance.getRandomF(0, this.width);
        pEnd.y = AllData.instance.getRandomF(0, this.height * 0.65);
        var downP = new egret.Point(this.width / 2, this.height);
        if (AllData.instance.getDistance(pEnd, downP) > this.height * 0.8) {
            return this.getEndPoint();
        }
        return pEnd;
    };
    Object.defineProperty(RegionOther.prototype, "StarPointX", {
        get: function () {
            return this.width / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionOther.prototype, "StarPointY", {
        get: function () {
            return this.height * 1.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionOther.prototype, "SelfStarPointX", {
        get: function () {
            return this.width * 0.9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionOther.prototype, "SelfStarPointY", {
        get: function () {
            return this.height * 1.3;
        },
        enumerable: true,
        configurable: true
    });
    return RegionOther;
}(RegionRed));
__reflect(RegionOther.prototype, "RegionOther");
//# sourceMappingURL=RegionOther.js.map