class Scoreboard extends eui.Component implements eui.UIComponent
{
	public wpRed_lab: eui.Label;
	public wpBlack_lab: eui.Label;
	public wpOther_lab: eui.Label;
	public board_group: eui.Group;

	public _pointImages: eui.Image[];
	public constructor()
	{
		super();
		this.skinName = "resource/ui/mainYDD/component/ScoreboardSkin.exml";
		this._pointImages = [];
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
	 * 记录本局胜利区域
	 */
	public addWinner(): void
	{
		let winner = AllData.instance.Winner;
		let imgS: string = AllData.instance.getPointImgByReion(winner);
		let winPoint: eui.Image = ObjectPool.instance.pop("eui.Image",imgS);
		this.board_group.addChild(winPoint);
		this._pointImages.push(winPoint);

		let wp = AllData.instance.getWP();
		this.wpBlack_lab.text = wp.black + "%";
		this.wpRed_lab.text = wp.red + "%";
		this.wpOther_lab.text = wp.other + "%";
	}

}