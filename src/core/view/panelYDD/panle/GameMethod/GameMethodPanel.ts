module gameMethod
{
	export class GameMethodPanel extends ZjwComponent
	{

		public details_list: eui.List;
		public details_scl: eui.Scroller;
		public close_btn: eui.Button;

		public constructor()
		{
			super();
			this.skinName = "resource/ui/panelYDD/GameMethod/GameMethodPanelSkin.exml"
		}

		protected partAdded(partName: string, instance: any): void
		{
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void
		{
			super.childrenCreated();
			this.details_scl.verticalScrollBar.visible = false;
			this.details_scl.verticalScrollBar.autoVisibility = false;
			this.details_list.itemRenderer = GameMethodItem;

			this.details_list.dataProvider = this.listData();
		}

		private listData(): eui.ArrayCollection
		{
			let returnValue = new eui.ArrayCollection(AllData.instance.GmaeMethItemTypeDatas);
			return returnValue;
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
	}
}