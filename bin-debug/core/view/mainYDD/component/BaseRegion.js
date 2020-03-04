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
var BaseRegion = (function (_super) {
    __extends(BaseRegion, _super);
    function BaseRegion() {
        var _this = _super.call(this) || this;
        _this._balls = [];
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onUIComplete, _this);
        return _this;
    }
    BaseRegion.prototype.onUIComplete = function () {
        this.regitEvent();
    };
    BaseRegion.prototype.regitEvent = function () {
        AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
    };
    BaseRegion.prototype.removeEvent = function () {
        AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
    };
    BaseRegion.prototype.onBegigGame = function () { };
    BaseRegion.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BaseRegion.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**
     * 播放亮光
     */
    BaseRegion.prototype.playLineAmi = function () {
        this.showLine.play(0);
    };
    /**
     * 显示胜利动画
     */
    BaseRegion.prototype.showWinAmi = function () {
        this.playLineAmi();
    };
    /**
     * 增加小球
     * @param indexs 小球类型数组
     */
    BaseRegion.prototype.addBall = function (indexs, isSelf) {
        if (isSelf === void 0) { isSelf = false; }
        var len = indexs.length;
        for (var i = 0; i < len; i++) {
            var ball = ObjectPool.instance.pop(BallCom.NAME, indexs[i]);
            this.addChild(ball);
            if (isSelf) {
                ball.x = this.SelfStarPointX;
                ball.y = this.SelfStarPointY;
            }
            else {
                ball.x = this.StarPointX;
                ball.y = this.StarPointY;
            }
            var pEnd = this.getEndPoint();
            ball.showJoinAmi(pEnd.x, pEnd.y);
            this._balls.push(ball);
        }
    };
    /**
     * 移除小球
     */
    BaseRegion.prototype.removeAllBall = function () {
        var len = this._balls.length;
        for (var i = 0; i < len; i++) {
            ObjectPool.instance.push(this._balls[i], "hideBall");
        }
        this._balls = [];
    };
    /**
     * 获取小球最终停止点
     */
    BaseRegion.prototype.getEndPoint = function () {
        var pEnd = new egret.Point();
        pEnd.x = AllData.instance.getRandomF(0, this.width * 0.7);
        pEnd.y = AllData.instance.getRandomF(this.height * 0.35, this.height * 0.7);
        var leftDownP = new egret.Point(0, this.height);
        if (AllData.instance.getDistance(pEnd, leftDownP) < this.height * 0.7) {
            return this.getEndPoint();
        }
        return pEnd;
    };
    Object.defineProperty(BaseRegion.prototype, "StarPointX", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRegion.prototype, "StarPointY", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRegion.prototype, "SelfStarPointX", {
        get: function () {
            return 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRegion.prototype, "SelfStarPointY", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRegion;
}(eui.Component));
__reflect(BaseRegion.prototype, "BaseRegion", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BaseRegion.js.map