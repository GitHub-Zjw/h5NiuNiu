class BallCom extends eui.Component implements eui.UIComponent
{
	public static NAME: string = "BallCom";

	public icon_img: eui.Image;

	private _sourceIndex: number;
	private _endX: number;
	private _endY: number;
	/**
	 * 小球
	 * @param sourceIndex 小球索引
	 */
	public constructor(sourceIndex: number)
	{
		super();
		this.skinName = "resource/ui/mainYDD/component/BallComSkin.exml";
		this._sourceIndex = sourceIndex;
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated();
	}

	public removeEvent(): void
	{
		this.removeEventListener(eui.UIEvent.COMPLETE, this.playJoinAmi, this);
	}

	/**
	 * 显示投注动画
	 * @param x 目标点x
	 * @param y 目标点y
	 */
	public showJoinAmi(x: number, y: number): void
	{
		this._endX = x;
		this._endY = y;
		if (this.icon_img)
		{
			this.playJoinAmi();
		}
		else
		{
			this.addEventListener(eui.UIEvent.COMPLETE, this.playJoinAmi, this);
		}
	}
	private playJoinAmi(): void
	{
		this.visible = true;
		this.icon_img.source = AllData.instance.ballSource[this._sourceIndex];
		let twX: egret.Tween = egret.Tween.get(this);
		twX.to({ x: this._endX }, 300, egret.Ease.quintOut);
		let twY = egret.Tween.get(this);
		twY.to({ y: this._endY }, 300);
	}
	/**
	 * 回收小球
	 */
	public hideBall(): void
	{
		this.visible = false;
		egret.Tween.removeTweens(this);
	}

}