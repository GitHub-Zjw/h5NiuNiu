class RegionOther extends RegionRed
{
	public constructor()
	{
		super();
		this.skinName="resource/ui/mainYDD/component/RegionOtherSkin.exml";
	}

	/**
	 * 获取小球最终停止点
	 */
	protected getEndPoint(): egret.Point
	{
		let pEnd = new egret.Point();
		pEnd.x = AllData.instance.getRandomF(0, this.width);
		pEnd.y = AllData.instance.getRandomF(0, this.height*0.65);

		let downP = new egret.Point(this.width / 2, this.height);
		if (AllData.instance.getDistance(pEnd, downP) > this.height * 0.8)
		{
			return this.getEndPoint();
		}
		
		return pEnd;
	}

	protected get StarPointX(): number
	{
		return this.width / 2;
	}


	protected get StarPointY(): number
	{
		return this.height * 1.5;
	}

	protected get SelfStarPointX(): number
	{
		return this.width * 0.9;
	}

	protected get SelfStarPointY(): number
	{
		return this.height * 1.3;
	}
}