class StopBetMediator extends BasePanelMediator
{
	public static NAME: string = "StopBetMediator";

	private _timer: egret.Timer;

	public constructor(viewComponent: any = null)
	{
		super(StopBetMediator.NAME, viewComponent);
	}

	public listNotificationInterests(): Array<any>
	{
		return [
			PanelNotify.OPEN_STOP_BET,
			PanelNotify.CLOSE_STOP_BET
		];
	}
	private _stopBetPanel: StopBetPanel;
	public handleNotification(notification: puremvc.INotification): void
	{
		var data: any = notification.getBody();
		switch (notification.getName())
		{
			case PanelNotify.OPEN_STOP_BET:
				//显示角色面板
				if (this._stopBetPanel == null)
				{
					this._stopBetPanel = new StopBetPanel();
				}
				this.showUI(this._stopBetPanel, false, 0, 0, 2);
				break;
			case PanelNotify.CLOSE_STOP_BET:
				this.closePanel(0);
				break;
		}
	}

	/**
	 * 面板关闭后需要销毁的对象
	 */
	public destroy(): void
	{
		super.destroy();
	}

	private onTimer(e: egret.TimerEvent): void
	{
		game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_STOP_BET);
	}
}