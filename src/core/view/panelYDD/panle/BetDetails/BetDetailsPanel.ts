module betDetails
{
	export class BetDetailsPanel extends ZjwComponent
	{
		public details_list: eui.List;
		public details_scl: eui.Scroller;
		public close_btn: eui.Button;

		private _isDetail: boolean;
		public constructor(isDetail: boolean = true)
		{
			super();
			this._isDetail = isDetail;
			this.skinName = "resource/ui/panelYDD/BetDetails/BetDetailsPanelSkin.exml";
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
		}

		public initView(): void
		{
			super.initView();
			if (this._isDetail)
			{
				this.currentState = "betDetail";
				this.details_list.itemRenderer = BetDetailsItem;
			}
			else
			{
				this.currentState = "betRecord";
				this.details_list.itemRenderer = BetRecordsItem;
			}
			this.details_list.dataProvider = this.listData();
		}

		private listData(): eui.ArrayCollection
		{
			if (this._isDetail)
			{
				let returnValue = new eui.ArrayCollection(AllData.instance.BetDetailsTypeDatas);
				return returnValue;
			}
			else
			{
				let returnValue = new eui.ArrayCollection(AllData.instance.BetRecordsTypeDatas);
				return returnValue;
			}
		}

		public onBtnClick(e: egret.TouchEvent): void
		{
			let btn = e.target;
			switch (btn)
			{
				case this.close_btn:
					game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_BET_DETAIL);
					break;
			}
		}

		/**
		 * 刷新界面
		 */
		public refreshView(): void
		{
			this.details_list.dataProvider = this.listData();
		}
	}
}