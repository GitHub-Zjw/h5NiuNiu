module betDetails
{
	export class BetDetailsMediator extends BasePanelMediator
	{
		public static NAME: string = "BetDetailsMediator";

		public constructor(viewComponent: any = null)
		{
			super(BetDetailsMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_BET_DETAIL,
				PanelNotify.CLOSE_BET_DETAIL
			];
		}
		private _betDetailsPanel: BetDetailsPanel;
		private _badyData: boolean;
		public handleNotification(notification: puremvc.INotification): void
		{
			this._badyData = notification.getBody();

			switch (notification.getName())
			{
				case PanelNotify.OPEN_BET_DETAIL:
					let group = "betDetails";//要确保
					if (RES.getRes("tzxq_png"))
					{
						this.showMainUI();
					}
					else
					{
						RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
						RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
						RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
					}
					// RES.createGroup(group, this.stImages);
					RES.loadGroup(group);
					//显示角色面板
					break;
				case PanelNotify.CLOSE_BET_DETAIL:
					this.closePanel(1);
					break;
			}
		}

		public showMainUI(): void
		{
			if (this._betDetailsPanel == null)
			{
				this._betDetailsPanel = new BetDetailsPanel(this._badyData);
			}
			this.showUIInCenter(this._betDetailsPanel, true, 1);
		}

		private stLoadProcess(): void
		{ }

		private error(): void
		{
			console.warn("资源加载失败：betDetails");
		}

		/**
		 * 面板关闭后需要销毁的对象
		 */
		public destroy(): void
		{
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
			this._betDetailsPanel = null;
			super.destroy();
		}
	}
}