class Card extends eui.Component
{
	public card_img: eui.Image;

	private _color: EnumerationType.Color;
	private _cardNum: number;
	public constructor()
	{
		super();
		this._color = EnumerationType.Color.null;
		this._cardNum = 0;
		this.skinName = "resource/ui/mainYDD/component/CardSkin.exml";
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated();
		this.addEvent();
	}

	private addEvent(): void
	{
		AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
	}
	private removeEvent(): void
	{
		AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
	}

	/**
	 * 设置卡牌
	 * @param index 卡牌索引
	 */
	public setCard(index: number): void
	{
		this._color = AllData.instance.cardColor[index];
		this._cardNum = AllData.instance.cardNums[index];
		this.card_img.source = "card0_0_png";
	}

	public onBegigGame(): void
	{
		this.visible = false;
	}

	/**
	 * 播放翻牌动画
	 * @param isBig 是否要变大
	 * @param return 播放动画需要的时长，x
	 */
	public showOpenCardAmi(isBig: boolean): number
	{
		let cardSource = "card" + this._color + "_" + this._cardNum + "_png";
		let returnValue: number = 0;
		let self = this;
		if (isBig)
		{
			let tw = egret.Tween.get(this.card_img);
			tw.to({ scaleX: 1.2, scaleY: 1.2 }, 150)
				.wait(100)
				.to({ scaleX: 0 }, 100)
				.call(function ()
				{
					self.card_img.source = cardSource;
				})
				// .to({ source: cardSource })
				.to({ scaleX: 1.2 }, 100)
				.wait(300)
				.to({ scaleX: 1, scaleY: 1 }, 150)
			returnValue = 9;
		}
		else
		{
			let tw = egret.Tween.get(this.card_img);
			tw.to({ scaleX: 0 }, 150)
				.call(function ()
				{
					self.card_img.source = cardSource;
				})
				// .to({ source: cardSource })
				.to({ scaleX: 1 }, 150);
			returnValue = 3;
		}
		return returnValue;
	}
}
