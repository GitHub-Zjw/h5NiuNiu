class ZjwComponent extends eui.Component implements eui.UIComponent
{
	private _allBtn: eui.Button[];
	public constructor()
	{
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.initView, this);
	}

	/**
	 * 初始化界面显示
	 */
	public initView(): void
	{
		this._allBtn = ErgodicUtils.getAllButton(this);
		this.addEvent();
	}

	/**
	 * 添加事件
	 */
	public addEvent(): void
	{
		let len = this._allBtn.length;
		for (let i = 0; i < len; i++)
		{
			this._allBtn[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
		}
	}

	/**
	 * 移除事件
	 */
	public removeEvent(): void
	{
		this.removeEventListener(eui.UIEvent.COMPLETE, this.initView, this);
		let len = this._allBtn.length;
		for (let i = 0; i < len; i++)
		{
			this._allBtn[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
		}
		this._allBtn = [];
	}

	/**
	 * 移除面板方法
	 */
	public destroy(): void
	{
		this.removeEvent();
	}

	/**
	 * 界面按钮点击事件
	 */
	protected onBtnClick(e: egret.TouchEvent): void
	{ }
}