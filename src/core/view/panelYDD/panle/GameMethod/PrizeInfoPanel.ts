module gameMethod
{
	export class PrizeInfoPanel extends ZjwComponent
	{

		public scr: eui.Scroller;
		public close_btn: eui.Button;
		public descrotion_lab: eui.Label;

		public constructor()
		{
			super();
			this.skinName = "resource/ui/panelYDD/GameMethod/PrizeInfoPanelSkin.exml"
		}

		protected partAdded(partName: string, instance: any): void
		{
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void
		{
			super.childrenCreated();
			this.scr.verticalScrollBar.visible = false;
			this.scr.verticalScrollBar.autoVisibility = false;
			this.descrotion_lab.text = this.desc;
		}


		protected onBtnClick(e: egret.TouchEvent): void
		{
			super.onBtnClick(e);

			let btn = e.target;
			switch (btn)
			{
				case this.close_btn:
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_GAME_METHOD);
					break;
			}
		}

		private get desc(): string
		{
			return "游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。\n\n游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。\n\n游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。\n\n游戏使用一副除去大小王的扑克牌，共4个花色52张牌。 诈金花 诈金花 \n1、豹子（AAA最大，222最小）。 \n2、同花顺（AKQ最大，A23最小）。 \n3、同花（AKJ最大，352最小）。 \n4、顺子（AKQ最大，234最小）。 \n5、对子（AAK最大，223最小）。 \n6、单张（AKJ最大，352最小）。\n玩“诈金花”可能牌小诈走牌大，是实力、勇气和智谋的较量，是冒险家的游戏。\n 豹子：三张点相同的牌，AAA、222。"
		}
	}
}