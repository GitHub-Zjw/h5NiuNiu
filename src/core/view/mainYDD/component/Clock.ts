class Clock extends eui.Component implements eui.UIComponent
{
	public surplusTime_lab: eui.Label;

	private _timer: egret.Timer;
	private _surplusTime: number = 25;
	public constructor()
	{
		super();
		this.skinName = "resource/ui/mainYDD/component/ClockSkin.exml";
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated()
	}

	public dispose(): void
	{
		this.removeTimer();
	}

	/**
	 * 开始计时
	 */
	public starTiming(timeNum: number = 25): void
	{
		this.visible = true;
		this._surplusTime = timeNum;
		this.surplusTime_lab.text = this._surplusTime.toString();
		this.startTimer(1000);
	}

	private startTimer(time: number): void
	{
		if (this._timer == null)
		{
			this._timer = new egret.Timer(time);
			this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
		}
		this._timer.start();
		this.onTimer(null);
	}

	private removeTimer(): void
	{
		if (this._timer)
		{
			this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			this._timer.stop();
			this._timer = null;
		}
	}

	private onTimer(e: egret.TimerEvent): void
	{
		this._surplusTime--;
		if (this._surplusTime < 0)
		{
			this.visible = false;
			AllData.instance.dispatchEventWith(GameNotify.STOP_BETS);
			this.removeTimer();
		}
		else
		{
			this.surplusTime_lab.text = this._surplusTime.toString();
		}
	}
}