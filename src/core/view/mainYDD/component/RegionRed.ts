class RegionRed extends BaseRegion
{
	public win_img: eui.Image;

	public constructor()
	{
		super();
		this.skinName = "resource/ui/mainYDD/component/RegionRedSkin.exml";
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

	protected get StarPointX(): number
	{
		return 0;
	}
	protected get StarPointY(): number
	{
		return this.height + 10;
	}

	protected get SelfStarPointX(): number
	{
		return this.width * 0.45;
	}

	protected get SelfStarPointY(): number
	{
		return this.height ;
	}
}
