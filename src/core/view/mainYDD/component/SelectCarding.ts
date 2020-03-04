class SelectCarding extends eui.Component implements eui.UIComponent
{
	public zi_Group: eui.Group;

	private _timer: egret.Timer;

	private _timeNum: number;
	public constructor()
	{
		super();
		this.skinName = "resource/ui/mainYDD/component/SelectCardingSkin.exml";
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated();
	}

	/**
	 * 播放选牌动画
	 */
	public showSelectAmi(): void
	{
		this.visible = true;
		this.startTimer(100);
	}

	private startTimer(time: number): void
	{
		if (this._timer == null)
		{
			this._timer = new egret.Timer(time);
			this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
		}
		this._timeNum = 0;
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

	//发牌具体时间控制
	private onTimer(e: egret.TimerEvent): void
	{
		if (this._timeNum < this.zi_Group.numChildren)
		{
			let img = this.zi_Group.getChildAt(this._timeNum);
			EffectUtils.jumpEffect(img);
		}
		else
		{
			if (AllData.instance.cardNums.length > 0)//服务器有牌了
			{
				AllData.instance.dispatchEventWith(GameNotify.SEND_CARD);
				this.removeTimer();
				this.visible = false;
			}
			else//没牌则再播放一遍
			{
				this._timeNum = -1;
			}
		}
		this._timeNum++;
	}
}