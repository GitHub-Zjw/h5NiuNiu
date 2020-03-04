class BaseRegion extends eui.Component implements eui.UIComponent
{
	public line_img: eui.Image;
	public showLine: egret.tween.TweenGroup;
	public _balls: BallCom[];
	public win_img: eui.Image;

	public constructor()
	{
		super();
		this._balls = [];
		this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
	}

	private onUIComplete(): void
	{
		this.regitEvent();
	}

	private regitEvent(): void
	{
		AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
	}

	private removeEvent(): void
	{
		AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
	}

	protected onBegigGame(): void
	{ }

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated();
	}

	/**
	 * 播放亮光
	 */
	public playLineAmi(): void
	{
		this.showLine.play(0);
	}

	/**
	 * 显示胜利动画
	 */
	public showWinAmi(): void
	{
		this.playLineAmi();
	}

	/**
	 * 增加小球
	 * @param indexs 小球类型数组
	 */
	public addBall(indexs: number[], isSelf: boolean = false): void
	{
		let len = indexs.length;
		for (let i = 0; i < len; i++)
		{
			let ball: BallCom = ObjectPool.instance.pop(BallCom.NAME, indexs[i]);
			this.addChild(ball);
			if (isSelf)
			{
				ball.x = this.SelfStarPointX;
				ball.y = this.SelfStarPointY;
			}
			else
			{
				ball.x = this.StarPointX;
				ball.y = this.StarPointY;
			}
			let pEnd = this.getEndPoint();
			ball.showJoinAmi(pEnd.x, pEnd.y);
			this._balls.push(ball);
		}
	}

	/**
	 * 移除小球
	 */
	public removeAllBall(): void
	{
		let len = this._balls.length;
		for (let i = 0; i < len; i++)
		{
			ObjectPool.instance.push(this._balls[i], "hideBall");
		}
		this._balls = [];
	}

	/**
	 * 获取小球最终停止点
	 */
	protected getEndPoint(): egret.Point
	{
		let pEnd = new egret.Point();
		pEnd.x = AllData.instance.getRandomF(0, this.width * 0.7);
		pEnd.y = AllData.instance.getRandomF(this.height * 0.35, this.height * 0.7);

		let leftDownP = new egret.Point(0, this.height);
		if (AllData.instance.getDistance(pEnd, leftDownP) < this.height * 0.7)
		{
			return this.getEndPoint();
		}
		return pEnd;
	}

	protected get StarPointX(): number
	{
		return 0;
	}
	protected get StarPointY(): number
	{
		return this.height;
	}

	protected get SelfStarPointX(): number
	{
		return 100;
	}

	protected get SelfStarPointY(): number
	{
		return this.height;
	}
}