/**
 * 枚举类型定义
 */
var EnumerationType;
(function (EnumerationType) {
    /**
     * 卡片花色
     */
    var Color;
    (function (Color) {
        Color[Color["null"] = 0] = "null";
        Color[Color["fangKuai"] = 1] = "fangKuai";
        Color[Color["meiHua"] = 2] = "meiHua";
        Color[Color["hongTao"] = 3] = "hongTao";
        Color[Color["heiTao"] = 4] = "heiTao";
        Color[Color["boss"] = 5] = "boss";
    })(Color = EnumerationType.Color || (EnumerationType.Color = {}));
    /**
     * 牌形
     */
    var CardType;
    (function (CardType) {
        /**散牌 */
        CardType[CardType["sanPai"] = 0] = "sanPai";
        /**顺子 */
        CardType[CardType["sunZi"] = 1] = "sunZi";
        /**顺金 */
        CardType[CardType["sunJin"] = 2] = "sunJin";
        /**对子 */
        CardType[CardType["duiZi"] = 3] = "duiZi";
        /**豹子 */
        CardType[CardType["baoZi"] = 4] = "baoZi";
        /**金花 */
        CardType[CardType["jinHua"] = 5] = "jinHua";
    })(CardType = EnumerationType.CardType || (EnumerationType.CardType = {}));
    /**
     * 胜利区域
     */
    var RegionWinner;
    (function (RegionWinner) {
        /**
         * 红方赢
         */
        RegionWinner[RegionWinner["red"] = 0] = "red";
        /**
         * 黑方赢
         */
        RegionWinner[RegionWinner["black"] = 1] = "black";
        /**
         * 红方赢 + 特殊牌型
         */
        RegionWinner[RegionWinner["redS"] = 2] = "redS";
        /**
         * 红方赢 + 特殊牌型
         */
        RegionWinner[RegionWinner["blackS"] = 3] = "blackS";
    })(RegionWinner = EnumerationType.RegionWinner || (EnumerationType.RegionWinner = {}));
})(EnumerationType || (EnumerationType = {}));
//# sourceMappingURL=EnumerationType.js.map