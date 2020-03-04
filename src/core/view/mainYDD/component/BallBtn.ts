class BallBtn extends eui.Button implements  eui.UIComponent {
	
	public line: egret.tween.TweenGroup;

	public line_img: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/ui/mainYDD/component/BallBtnSkin.exml"
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.registEven();
	}

	private registEven(): void
	{
		this.line.addEventListener('complete', this.onTweenGroupComplete, this);
		AllData.instance.addEventListener(GameNotify.STOP_BETS, this.onStopBets, this);
		AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onGameStar, this);
	}

	private removeEven(): void
	{
		this.line.removeEventListener('complete', this.onTweenGroupComplete, this);
		AllData.instance.removeEventListener(GameNotify.STOP_BETS, this.onStopBets, this);
		AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onGameStar, this);
	}
	
	/**
	 * 显示选中动画
	 */
	public showSelectedAmi(): void
	{
		this.line_img.visible = true;
		this.line.play(0);
	}

	/**
	 * 隐藏选中动画
	 */
	public hideSelectedAmi(): void
	{
		this.line_img.visible = false;
		this.line.stop();
	}

	private onTweenGroupComplete(): void
	{
		this.line.play(0);
	}

	private onGameStar(): void
	{
		this.enabled = true;
	}

	private onStopBets(): void
	{
		this.enabled = false;
		this.hideSelectedAmi();
	}
}