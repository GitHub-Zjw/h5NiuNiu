var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* 弹窗消息
* by dily
* (c) copyright 2014 - 2035
* All Rights Reserved.
*/
var PanelNotify = (function () {
    function PanelNotify() {
    }
    //打开角色
    PanelNotify.OPEN_ROLE = "PANELNOTIFY_OPEN_ROLE";
    //关闭角色
    PanelNotify.CLOSE_ROLE = "PANELNOTIFY_CLOSE_ROLE";
    //打开背包
    PanelNotify.OPEN_BACKPACK = "PANELNOTIFY_OPEN_BACKPACK";
    //关闭背包
    PanelNotify.CLOSE_BACKPACK = "PANELNOTIFY_CLOSE_BACKPACK";
    //打开强化
    PanelNotify.OPEN_QIANGHUA = "PANELNOTIFY_OPEN_QIANGHUA";
    //关闭强化
    PanelNotify.CLOSE_QIANGHUA = "PANELNOTIFY_QIANGHUA";
    //打开招贤
    PanelNotify.OPEN_ZHAOXIAN = "PANELNOTIFY_OPEN_ZHAOXIAN";
    //关闭招贤
    PanelNotify.CLOSE_ZHAOXIAN = "PPANELNOTIFY_ZHAOXIAN";
    //打开装备
    PanelNotify.OPEN_EQUIPMENT = "PANELNOTIFY_OPEN_EQUIPMENT";
    //关闭装备
    PanelNotify.CLOSE_EQUIPMENT = "PANELNOTIFY_CLOSE_EQUIPMENT";
    //打开闯荡
    PanelNotify.OPEN_CHUANGDANG = "PANELNOTIFY_OPEN_CHUANGDANG";
    //关闭闯荡
    PanelNotify.CLOSE_CHUANGDANG = "PANELNOTIFY_CHUANGDANG";
    //打开商店
    PanelNotify.OPEN_SHOP = "PANELNOTIFY_OPEN_SHOP";
    //关闭商店
    PanelNotify.CLOSE_SHOP = "PANELNOTIFY_CLOSE_SHOP";
    //打开地图
    PanelNotify.OPEN_MAP = "PANELNOTIFY_OPEN_MAP";
    //关闭地图
    PanelNotify.CLOSE_MAP = "PANELNOTIFY_CLOSE_MAP";
    /**
     * 打开 停止下注
     */
    PanelNotify.OPEN_STOP_BET = "PANELNOTIFY_OPEN_STOP_BET";
    /**
     * 关闭 停止下注
     */
    PanelNotify.CLOSE_STOP_BET = "PANELNOTIFY_CLOSE_STOP_BET";
    /**
     * 打开
     * true: 投注详情
     * false: 投注记录
     */
    PanelNotify.OPEN_BET_DETAIL = "PANELNOTIFY_OPEN_BET_DETAIL";
    /**关闭投注详情 */
    PanelNotify.CLOSE_BET_DETAIL = "PANELNOTIFY_CLOSE_BET_DETAIL";
    /**
     * 打开
     * true: 大奖界面
     * false: 玩法界面
     */
    PanelNotify.OPEN_GAME_METHOD = "PANELNOTIFY_OPEN_GAME_METHOD";
    /**关闭大奖玩法界面 */
    PanelNotify.CLOSE_GAME_METHOD = "PANELNOTIFY_CLOSE_GAME_METHOD";
    return PanelNotify;
}());
__reflect(PanelNotify.prototype, "PanelNotify");
//# sourceMappingURL=PanelNotify.js.map