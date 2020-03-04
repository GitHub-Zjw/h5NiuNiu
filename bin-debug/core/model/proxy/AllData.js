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
var AllData = (function (_super) {
    __extends(AllData, _super);
    function AllData() {
        var _this = _super.call(this) || this;
        _this._cardColor = [];
        _this._cardNums = [];
        _this.ballSource = ["0.1_png", "1_png", "5_png", "10_png", "50_png", "100_png"];
        _this._bleckMoneyNum = 0;
        _this._redMoneyNum = 0;
        _this._redMoneyNum = 0;
        _this._otherMoneyNum = 0;
        _this._winner = EnumerationType.RegionWinner.redS;
        _this._redCardType = EnumerationType.CardType.sanPai;
        _this._blackCardType = EnumerationType.CardType.sanPai;
        _this._allWinners = [];
        _this._betDetailsTypeDatas = [];
        _this._betRecordsTypeDatas = [];
        _this._gmaeMethItemTypeDatas = [];
        return _this;
    }
    Object.defineProperty(AllData, "instance", {
        get: function () {
            if (AllData._info == null) {
                AllData._info = new AllData();
            }
            return AllData._info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "cardColor", {
        /**
         * 当前卡牌花色
         */
        get: function () {
            return this._cardColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "BetDetailsTypeDatas", {
        /**投注详情数据 */
        get: function () {
            return this._betDetailsTypeDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "BetRecordsTypeDatas", {
        /**投注详情数据 */
        get: function () {
            return this._betRecordsTypeDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "GmaeMethItemTypeDatas", {
        /**大奖数据 */
        get: function () {
            return this._gmaeMethItemTypeDatas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "Winner", {
        /**
         * 获取胜利区域
         */
        get: function () {
            return this._winner;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 根据胜利区域获取红黑点资源名
     */
    AllData.prototype.getPointImgByReion = function (region) {
        var imgS = "";
        switch (region) {
            case EnumerationType.RegionWinner.black:
                imgS = "heiSheng";
                break;
            case EnumerationType.RegionWinner.blackS:
                imgS = "heiJia";
                break;
            case EnumerationType.RegionWinner.red:
                imgS = "hongSheng";
                break;
            case EnumerationType.RegionWinner.redS:
                imgS = "hongJia";
                break;
            default:
                break;
        }
        imgS += "_png";
        return imgS;
    };
    Object.defineProperty(AllData.prototype, "AllWinners", {
        /**
         * 获取历史胜利
         */
        get: function () {
            return this._allWinners;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取胜率
     */
    AllData.prototype.getWP = function () {
        var black = 0;
        var red = 0;
        var other = 0;
        var allNum = this.AllWinners.length;
        for (var i = 0; i < allNum; i++) {
            var winner = this.AllWinners[i];
            switch (winner) {
                case EnumerationType.RegionWinner.black:
                    black++;
                    break;
                case EnumerationType.RegionWinner.blackS:
                    black++;
                    other++;
                    break;
                case EnumerationType.RegionWinner.red:
                    red++;
                    break;
                case EnumerationType.RegionWinner.redS:
                    red++;
                    other++;
                    break;
                default:
                    break;
            }
        }
        black = Math.floor(black / allNum * 10000) / 100;
        red = 100 - black;
        other = Math.floor(other / allNum * 10000) / 100;
        return { black: black, red: red, other: other };
    };
    Object.defineProperty(AllData.prototype, "BleckMoneyNum", {
        /**
         * 获取黑色押注
         */
        get: function () {
            return this._bleckMoneyNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "CardTypeB", {
        /**
         * 黑牌牌型
         */
        get: function () {
            return this._blackCardType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "CardTypeR", {
        /**
         * 红牌牌型
         */
        get: function () {
            return this._redCardType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "RedMoneyNum", {
        /**
         * 获取红色押注
         */
        get: function () {
            return this._redMoneyNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "OtherMoneyNum", {
        /**
         * 获取特殊押注
         */
        get: function () {
            return this._otherMoneyNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AllData.prototype, "cardNums", {
        /**
         * 当前卡牌数字
         */
        get: function () {
            return this._cardNums;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取随机整数
     */
    AllData.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    /**
     * 获取随机浮点数
     */
    AllData.prototype.getRandomF = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     * 获取两点间的距离
     */
    AllData.prototype.getDistance = function (p1, p2) {
        var dx = Math.abs(p1.x - p2.x);
        var dy = Math.abs(p1.y - p2.y);
        return Math.sqrt(dx * dx + dy * dy);
    };
    AllData.prototype.testSetData = function () {
        for (var i = 0; i < 15; i++) {
            var cardNum = this.getRandomInt(1, 13);
            this._cardNums[i] = cardNum;
            var color = this.getRandomInt(1, 4);
            this._cardColor[i] = color;
            var betData = { playerName: i.toString(), money: this.getRandomF(0, 1000), region: this.getRandomInt(0, 3) };
            this._betDetailsTypeDatas.push(betData);
            var recordData = { money: this.getRandomInt(100, 1000), isWin: this.getRandomInt(0, 2) == 1, region: this.getRandomInt(0, 3) };
            this._betRecordsTypeDatas.push(recordData);
            var strs = [i.toString(), EnumerationType.CardType[this.getRandomInt(0, 6)], this.getRandomInt(0, 7) * 100 + " HDAG"];
            this._gmaeMethItemTypeDatas.push(strs);
        }
        this._winner = EnumerationType.RegionWinner.blackS;
        this._bleckMoneyNum = this.getRandomInt(1, 1000);
        this._redMoneyNum = this.getRandomInt(1, 1000);
        this._otherMoneyNum = this.getRandomInt(1, 1000);
        console.log("动画数据设置完毕");
    };
    return AllData;
}(egret.EventDispatcher));
__reflect(AllData.prototype, "AllData");
//# sourceMappingURL=AllData.js.map