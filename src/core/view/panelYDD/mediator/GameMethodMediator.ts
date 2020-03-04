module gameMethod
{
	export class GameMethodMediator extends BasePanelMediator
	{
		public static NAME: string = "GameMethodMediator";

		public constructor(viewComponent: any = null)
		{
			super(GameMethodMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any>
		{
			return [
				PanelNotify.OPEN_GAME_METHOD,
				PanelNotify.CLOSE_GAME_METHOD
			];
		}
		private _betDetailsPanel: GameMethodPanel;
		private _badyData: boolean;
		private _prizeInfoPanel: PrizeInfoPanel;
		public handleNotification(notification: puremvc.INotification): void
		{
			this._badyData = notification.getBody();

			switch (notification.getName())
			{
				case PanelNotify.OPEN_GAME_METHOD:
					if (RES.getRes("jbbg_png"))
					{
						this.showMainUI();
					}
					else
					{
						let group = "gameMethod";//要确保
						RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.showMainUI, this);
						RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.stLoadProcess, this);
						RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
						RES.loadGroup(group);
					}
					// RES.createGroup(group, this.stImages);
					//显示角色面板
					break;
				case PanelNotify.CLOSE_GAME_METHOD:
					this.closePanel(1);
					break;
			}
		}

		public showMainUI(): void
		{
			if (this._badyData)
			{
				if (this._betDetailsPanel == null)
				{
					this._betDetailsPanel = new GameMethodPanel();
				}
				this.showUIInCenter(this._betDetailsPanel, true, 1);
			}
			else
			{
				if (this._prizeInfoPanel == null)
				{
					this._prizeInfoPanel = new PrizeInfoPanel();
				}
				this.showUIInCenter(this._prizeInfoPanel, true, 1);
			}
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
			this._prizeInfoPanel = null;
			super.destroy();
		}
	}
}