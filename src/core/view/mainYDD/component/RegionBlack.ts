class RegionBlack extends BaseRegion
{
	public win_img: eui.Image;
	public constructor()
	{
		super();

		this.skinName = "resource/ui/mainYDD/component/RegionBlackSkin.exml";
	}

	protected onBegigGame(): void
	{
		if (this.win_img)
		{
			this.win_img.alpha = 0;
		}
	}

	public showWinAmi(): void
	{
		super.showWinAmi();
		if (this.win_img)
		{
			let num = this.numChildren - 1;
			this.setChildIndex(this.win_img, num);
			this.win_img.alpha = 1;
		}
	}

	/**
	 * 获取小球最终停止点
	 */
	protected getEndPoint(): egret.Point
	{
		let pEnd = new egret.Point();
		pEnd.x = AllData.instance.getRandomF(this.width * 0.2, this.width * 0.9);
		pEnd.y = AllData.instance.getRandomF(this.height * 0.3, this.height * 0.53);

		let rightDownP = new egret.Point(this.width, this.height);
		if (AllData.instance.getDistance(pEnd, rightDownP) < this.height * 0.8)
		{
			return this.getEndPoint();
		}
		return pEnd;
	}

	protected get StarPointX(): number
	{
		return this.width;
	}

	protected get SelfStarPointX(): number
	{
		return this.width * 1.1;
	}

	protected get SelfStarPointY(): number
	{
		return this.height * 0.8;
	}
}