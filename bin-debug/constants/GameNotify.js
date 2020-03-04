var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameNotify = (function () {
    function GameNotify() {
    }
    /**
     * 游戏结束
     */
    GameNotify.GAME_OVER = "GameNotify_GAME_OVER";
    /**
     * 游戏开始
     */
    GameNotify.GAME_STAR = "GameNotify_GAME_STAR";
    /**
     * 下注时间到
     */
    GameNotify.STOP_BETS = "GameNotify_STOP_BETS";
    /**
     * 发牌
     */
    GameNotify.SEND_CARD = "GameNotify_SEND_CARD";
    return GameNotify;
}());
__reflect(GameNotify.prototype, "GameNotify");
//# sourceMappingURL=GameNotify.js.map