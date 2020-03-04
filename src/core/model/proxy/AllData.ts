class AllData extends egret.EventDispatcher
{
	private static _info: AllData;
	public static get instance(): AllData
	{
		if (AllData._info == null)
		{
			AllData._info = new AllData();
		}
		return AllData._info;
	}

	/**小球资源名 */
	public ballSource: string[];

	private _cardColor: EnumerationType.Color[];
	private _cardNums: number[];
	private _bleckMoneyNum: number;
	private _redMoneyNum: number;
	private _otherMoneyNum: number;
	private _winner: EnumerationType.RegionWinner;
	private _redCardType: EnumerationType.CardType;
	private _blackCardType: EnumerationType.CardType;
	private _allWinners: EnumerationType.RegionWinner[];
	private _betDetailsTypeDatas: betDetails.BetDetailsTypeData[];
	private _betRecordsTypeDatas: betDetails.BetRecordsTypeData[];
	private _gmaeMethItemTypeDatas: string[][];
	public constructor()
	{
		super();
		this._cardColor = [];
		this._cardNums = [];
		this.ballSource = ["0.1_png", "1_png", "5_png", "10_png", "50_png", "100_png"];
		this._bleckMoneyNum = 0;
		this._redMoneyNum = 0;
		this._redMoneyNum = 0;
		this._otherMoneyNum = 0;
		this._winner = EnumerationType.RegionWinner.redS;
		this._redCardType = EnumerationType.CardType.sanPai;
		this._blackCardType = EnumerationType.CardType.sanPai;
		this._allWinners = [];
		this._betDetailsTypeDatas = [];
		this._betRecordsTypeDatas = [];
		this._gmaeMethItemTypeDatas = [];
	}

	/**
	 * 当前卡牌花色
	 */
	public get cardColor(): number[]
	{
		return this._cardColor;
	}

	/**投注详情数据 */
	public get BetDetailsTypeDatas(): betDetails.BetDetailsTypeData[]
	{
		return this._betDetailsTypeDatas;
	}
	/**投注详情数据 */
	public get BetRecordsTypeDatas(): betDetails.BetRecordsTypeData[]
	{
		return this._betRecordsTypeDatas;
	}
	/**大奖数据 */
	public get GmaeMethItemTypeDatas(): string[][]
	{
		return this._gmaeMethItemTypeDatas;
	}

	/**
	 * 获取胜利区域
	 */
	public get Winner(): EnumerationType.RegionWinner
	{
		return this._winner;
	}

	/**
	 * 根据胜利区域获取红黑点资源名
	 */
	public getPointImgByReion(region: EnumerationType.RegionWinner): string
	{
		let imgS: string = "";
		switch (region)
		{
			case EnumerationType.RegionWinner.black:
				imgS = "heiSheng";
				break;
			case EnumerationType.RegionWinner.blackS:
				imgS = "heiJia";
				break;
			case EnumerationType.RegionWinner.red:
				imgS = "hongSheng";
				break;
			case EnumerationType.RegionWinner.redS:
				imgS = "hongJia";
				break;
			default:
				break;
		}
		imgS += "_png"
		return imgS;
	}

	/**
	 * 获取历史胜利
	 */
	public get AllWinners(): EnumerationType.RegionWinner[]
	{
		return this._allWinners;
	}

	/**
	 * 获取胜率
	 */
	public getWP(): { black: number, red: number, other: number }
	{
		let black: number = 0;
		let red: number = 0;
		let other: number = 0;
		let allNum = this.AllWinners.length;
		for (let i = 0; i < allNum; i++)
		{
			let winner = this.AllWinners[i];
			switch (winner)
			{
				case EnumerationType.RegionWinner.black:
					black++;
					break;
				case EnumerationType.RegionWinner.blackS:
					black++;
					other++;
					break;
				case EnumerationType.RegionWinner.red:
					red++;
					break;
				case EnumerationType.RegionWinner.redS:
					red++;
					other++;
					break;
				default:
					break;
			}
		}
		black = Math.floor(black / allNum * 10000) / 100;
		red = 100 - black;
		other = Math.floor(other / allNum * 10000) / 100;

		return { black: black, red: red, other: other };
	}

	/**
	 * 获取黑色押注
	 */
	public get BleckMoneyNum(): number
	{
		return this._bleckMoneyNum;
	}

	/**
	 * 黑牌牌型
	 */
	public get CardTypeB(): EnumerationType.CardType
	{
		return this._blackCardType;
	}

	/**
	 * 红牌牌型
	 */
	public get CardTypeR(): EnumerationType.CardType
	{
		return this._redCardType;
	}

	/**
	 * 获取红色押注
	 */
	public get RedMoneyNum(): number
	{
		return this._redMoneyNum;
	}

	/**
	 * 获取特殊押注
	 */
	public get OtherMoneyNum(): number
	{
		return this._otherMoneyNum;
	}

	/**
	 * 当前卡牌数字
	 */
	public get cardNums(): number[]
	{
		return this._cardNums;
	}

	/**
	 * 获取随机整数
	 */
	public getRandomInt(min, max): number
	{
		return Math.floor(Math.random() * (max - min)) + min;
	}

	/**
	 * 获取随机浮点数
	 */
	public getRandomF(min, max): number
	{
		return Math.random() * (max - min) + min;
	}
	/**
	 * 获取两点间的距离
	 */
	public getDistance(p1: egret.Point, p2: egret.Point): number
	{
		let dx = Math.abs(p1.x - p2.x);
		let dy = Math.abs(p1.y - p2.y);

		return Math.sqrt(dx * dx + dy * dy);
	}

	public testSetData(): void
	{

		for (let i = 0; i < 15; i++)
		{
			let cardNum = this.getRandomInt(1, 13);
			this._cardNums[i] = cardNum;
			let color = this.getRandomInt(1, 4);
			this._cardColor[i] = color;
			let betData: betDetails.BetDetailsTypeData = { playerName: i.toString(), money: this.getRandomF(0, 1000), region: this.getRandomInt(0, 3) };
			this._betDetailsTypeDatas.push(betData);
			let recordData: betDetails.BetRecordsTypeData = {money: this.getRandomInt(100,1000),isWin: this.getRandomInt(0,2) == 1, region: this.getRandomInt(0, 3)};
			this._betRecordsTypeDatas.push(recordData);
			let strs: string[] = [i.toString(),EnumerationType.CardType[this.getRandomInt(0,6)], this.getRandomInt(0,7) * 100 + " HDAG"];
			this._gmaeMethItemTypeDatas.push(strs);
		}
		this._winner = EnumerationType.RegionWinner.blackS;
		this._bleckMoneyNum = this.getRandomInt(1, 1000);
		this._redMoneyNum = this.getRandomInt(1, 1000);
		this._otherMoneyNum = this.getRandomInt(1, 1000);
		console.log("动画数据设置完毕");
	}
}