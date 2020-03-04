/**
 * 枚举类型定义
 */
module EnumerationType
{
	/**
	 * 卡片花色
	 */
	export enum Color
	{
		"null" = 0,
		"fangKuai" = 1,
		"meiHua" = 2,
		"hongTao" = 3,
		"heiTao" = 4,
		"boss" = 5
	}
	/**
	 * 牌形
	 */
	export enum CardType
	{
		/**散牌 */
		"sanPai",
		/**顺子 */
		"sunZi",
		/**顺金 */
		"sunJin",
		/**对子 */
		"duiZi",
		/**豹子 */
		"baoZi",
		/**金花 */
		"jinHua"
	}
	/**
	 * 胜利区域
	 */
	export enum RegionWinner
	{
		/**
		 * 红方赢
		 */
		"red",
		/**
		 * 黑方赢
		 */
		"black",
		/**
		 * 红方赢 + 特殊牌型
		 */
		"redS",
		/**
		 * 红方赢 + 特殊牌型
		 */
		"blackS"
	}
}