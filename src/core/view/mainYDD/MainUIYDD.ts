module game
{
	export class MainUIYDD extends eui.Component
	{
		public blackMan_img: eui.Image;
		public redMan_img: eui.Image;
		public vsManBlack_img: eui.Image;
		public vsManRed_img: eui.Image;
		public card1: Card;
		public card2: Card;
		public card3: Card;
		public card4: Card;
		public card5: Card;
		public card6: Card;
		public ball5_btn: BallBtn;
		public ball4_btn: BallBtn;
		public ball3_btn: BallBtn;
		public ball2_btn: BallBtn;
		public ball1_btn: BallBtn;
		public ball0_btn: BallBtn;
		public regionRed: RegionRed;
		public regionBlack: RegionBlack;
		public regionOther: RegionOther;
		public regionRed_btn: eui.Button;
		public regionBlack_btn: eui.Button;
		public regionOther_btn: eui.Button;
		public moneyNumR_lab: eui.Label;
		public moneyNumB_lab: eui.Label;
		public moneyNumO_lab: eui.Label;
		public withdraw_btn: eui.Button;
		public bets_btn: eui.Button;
		public clock: Clock;
		public mengBan_btn: eui.Button;
		public selectCardCom: SelectCarding;
		public blackResult_img: eui.Image;
		public redResult_img: eui.Image;
		public scoreBoard: Scoreboard;
		public betDetails_btn: eui.Button;
		public betRecord_btn: eui.Button;
		public prizeInfo_btn: eui.Button;
		public gameMethod_btn: eui.Button;

		private _selectedBall: BallBtn;
		private _selectIndex: number;
		private _timer: egret.Timer;
		private _cards: Card[];
		private _GetCardAmiL: egret.Tween;
		private _getCardAmiR: egret.Tween;
		private _timeNum: number;
		private _card1StarX: number;
		private _cardStarXs: number[];
		private _vsManBlackX: number;
		private _vsManRedX: number;
		public constructor()
		{
			super();
			this.skinName = "resource/ui/mainYDD/MainUIYDDSkin.exml";
			this._cards = [this.card1, this.card2, this.card3, this.card4, this.card5, this.card6];
			this._cardStarXs = [];
			this._cardStarXs[0] = this.card1.x;
			this._cardStarXs[1] = this.card2.x;
			this._cardStarXs[2] = this.card3.x;
			this._cardStarXs[3] = this.card4.x;
			this._cardStarXs[4] = this.card5.x;
			this._cardStarXs[5] = this.card6.x;
			this._vsManBlackX = this.vsManBlack_img.x;
			this._vsManRedX = this.vsManRed_img.x;
			this._selectIndex = -1;
		}

		protected partAdded(partName: string, instance: any): void
		{
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void
		{
			super.childrenCreated();
			this._card1StarX = this.card1.x;
			this.regitEvent();
		}

		private regitEvent(): void
		{
			this.ball0_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball1_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball2_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball3_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball4_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball5_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.betDetails_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetDetailsBtnClick, this);
			this.betRecord_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetRecordsBtnClick, this);
			this.gameMethod_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameMethodBtnClick, this);
			this.prizeInfo_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrizeInfoBtnClick, this);
			this.regionRed_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRedRegionClick, this);
			this.regionBlack_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBlackRegionClick, this);
			this.regionOther_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOtherRegionClick, this);
			AllData.instance.addEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
			AllData.instance.addEventListener(GameNotify.STOP_BETS, this.onStopBet, this);
			AllData.instance.addEventListener(GameNotify.SEND_CARD, this.SendCard, this);


			this.begin_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBeginBtnClick, this);
			this.setCard_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetCardBtnClick, this);
			this.cardAmi_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCardAmiBtnClick, this);
			this.ballAmi_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallAmiBtnClick, this);
		}

		private removeEvent(): void
		{
			this.ball0_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball1_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball2_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball3_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball4_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.ball5_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallBtnClick, this);
			this.betDetails_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetDetailsBtnClick, this);
			this.betRecord_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetRecordsBtnClick, this);
			this.gameMethod_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameMethodBtnClick, this);
			this.prizeInfo_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrizeInfoBtnClick, this);
			this.regionRed_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRedRegionClick, this);
			this.regionBlack_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBlackRegionClick, this);
			this.regionOther_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOtherRegionClick, this);
			AllData.instance.removeEventListener(GameNotify.GAME_STAR, this.onBegigGame, this);
			AllData.instance.removeEventListener(GameNotify.STOP_BETS, this.onStopBet, this);
			AllData.instance.removeEventListener(GameNotify.SEND_CARD, this.SendCard, this);



			this.begin_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBeginBtnClick, this);
			this.setCard_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetCardBtnClick, this);
			this.cardAmi_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCardAmiBtnClick, this);
			this.ballAmi_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBallAmiBtnClick, this);
		}

		/**
		 * 游戏开始
		 */
		public onBegigGame(): void
		{
			this.mengBan_btn.visible = false;
			this.blackResult_img.alpha = 0;
			this.redResult_img.alpha = 0;
			this._selectIndex = -1;
			this._selectedBall.hideSelectedAmi();
			this.regionRed.removeAllBall();
			this.regionBlack.removeAllBall();
			this.regionOther.removeAllBall();
			this.showBeginAmi();
		}

		/**
		 * 停止下注
		 */
		public onStopBet(): void
		{
			this.mengBan_btn.visible = true;
			let self = this;
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_STOP_BET);
			let temp = setTimeout(function ()
			{
				game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_STOP_BET);
				clearTimeout(temp);
			}, 1500);
		}

		/**
		 * 刷新下注金额
		 */
		public refreshMoneyLab(): void
		{
			this.moneyNumB_lab.text = AllData.instance.BleckMoneyNum.toString();
			this.moneyNumR_lab.text = AllData.instance.RedMoneyNum.toString();
			this.moneyNumO_lab.text = AllData.instance.OtherMoneyNum.toString();
		}

		/**
		 * 播放开始动画
		 */
		public showBeginAmi(): void
		{
			let self = this;
			let vsLeft = this.vsManBlack_img;
			let vsRight = this.vsManRed_img;

			vsLeft.visible = true;
			vsRight.visible = true;

			this.moveTw(vsLeft, -vsLeft.width, this._vsManBlackX, this.playAllLine);
			this.moveTw(vsRight, this.width, this._vsManRedX, this.playAllLine);
		}

		private playAllLine(): void
		{
			this.regionBlack.playLineAmi();
			this.regionRed.playLineAmi();
			this.regionOther.playLineAmi();
			this.clock.starTiming(5);//fix
		}

		private moveTw(uiCom: eui.UIComponent, starX: number, endX: number, call: Function): void
		{
			let self = this;
			this.touchEnabled = false;
			uiCom.x = starX;

			let tw = egret.Tween.get(uiCom);
			tw.to({ x: endX }, 200)
				.wait(500)
				.to({ x: starX }, 150)
				.call(function ()
				{
					self.touchEnabled = true;
					call.apply(self);
				}, self);
		}

		/**
		 * 哈希选牌
		 */
		public SelectCard(): void
		{
			this.selectCardCom.showSelectAmi();
		}

		private SendCard(): void
		{
			this.setCardData();
			this.playGetCardAmi();
		}
		/**
		 * 设置卡牌数据
		 */
		public setCardData(): void
		{
			for (let i = 0; i < 6; i++)
			{
				this._cards[i].setCard(i);
			}
			this.blackResult_img.source = EnumerationType.CardType[AllData.instance.CardTypeB] + "_png";
			this.redResult_img.source = EnumerationType.CardType[AllData.instance.CardTypeR] + "_png";
		}

		/**
		 * 播放发牌动画
		 */
		public playGetCardAmi(): void
		{
			this._timeNum = 0;
			this.startTimer(100);
		}

		public showWinner(): void
		{
			let winner: EnumerationType.RegionWinner = AllData.instance.Winner;
			switch (winner)
			{
				case EnumerationType.RegionWinner.black:
					this.regionBlack.showWinAmi()
					break;
				case EnumerationType.RegionWinner.blackS:
					this.regionBlack.showWinAmi();
					this.regionOther.showWinAmi();
					break;
				case EnumerationType.RegionWinner.red:
					this.regionRed.showWinAmi();
					break;
				case EnumerationType.RegionWinner.redS:
					this.regionRed.showWinAmi();
					this.regionOther.showWinAmi();
					break;
				default:
					break;
			}
		}

		private startTimer(time: number): void
		{
			if (this._timer == null)
			{
				this._timer = new egret.Timer(time);
				this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			}
			this._timer.start();
			this.onTimer(null);
		}

		private removeTimer(): void
		{
			if (this._timer)
			{
				this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
				this._timer.stop();
				this._timer = null;
			}
		}

		//发牌具体时间控制
		private onTimer(e: egret.TimerEvent): void
		{
			let starR: number = 8;			//开始播放右边发牌动画的时间
			this._timeNum++;
			if (this._timeNum < 4)
			{//发黑牌
				this.playLeftGetCardAmi(this._timeNum - 1);
			}
			else if (this._timeNum <= starR)
			{
			}
			else if (this._timeNum < starR + 4)
			{//发红牌
				let index = this._timeNum - (starR - 2);
				this.playRightGetCardAmi(index);
			}
			switch (this._timeNum)
			{
				case 14:
					this._cards[0].showOpenCardAmi(false);
					break;
				case 16:
					this._cards[1].showOpenCardAmi(false);
					break;
				case 18:
					this._cards[3].showOpenCardAmi(false);
					break;
				case 20:
					this._cards[4].showOpenCardAmi(false)
					break;
				case 23:
					this._cards[2].showOpenCardAmi(true);
					break;
				case 30://显示牌形
					egret.Tween.get(this.blackResult_img).to({ alpha: 1 }, 200);
					break;
				case 36:
					this._cards[5].showOpenCardAmi(true);
					break;
				case 43://显示牌形
					egret.Tween.get(this.redResult_img).to({ alpha: 1 }, 100);
					break;
				case 50://显示胜利区域
					this.showWinner();
					break;
				case 57:
					this.scoreBoard.addWinner();
					break;
			}
			if (this._timeNum > 57)
			{
				this._timeNum = 0;
				this.removeTimer();
			}
		}

		private playLeftGetCardAmi(index: number, speed: number = 300): void
		{
			let card: Card = this._cards[index];
			let endX = this._cardStarXs[index];
			let starX = this.width / 2 - card.width / 2;
			let centerX = this._card1StarX;
			let endTime = (endX - centerX) / speed * 1000;
			card.x = starX;
			card.visible = true;

			egret.Tween.removeTweens(card);
			this._GetCardAmiL = egret.Tween.get(card);
			this._GetCardAmiL.to({ x: centerX }, 300)
				.to({ x: endX }, endTime);
		}

		private playRightGetCardAmi(index: number, speed: number = 300): void
		{
			let card: Card = this._cards[index];
			let endX = this._cardStarXs[index];
			let starX = this.width / 2 + card.width / 2;
			card.x = starX;
			card.visible = true;
			let endTime = (endX - starX) / speed * 1000;
			this._getCardAmiR = egret.Tween.get(card);
			this._getCardAmiR.to({ x: endX }, endTime);
		}

		private onBetDetailsBtnClick(ent: egret.TouchEvent): void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BET_DETAIL, true);
		}

		private onBetRecordsBtnClick(ent: egret.TouchEvent): void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BET_DETAIL, false);
		}

		private onGameMethodBtnClick(ent: egret.TouchEvent): void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_GAME_METHOD, true);
		}

		private onPrizeInfoBtnClick(ent: egret.TouchEvent): void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_GAME_METHOD, false);
		}

		private onRedRegionClick(ent: egret.TouchEvent): void
		{ 
			if (this._selectIndex >= 0)
			{
				let indexs: number[] = [this._selectIndex];
				this.regionRed.addBall(indexs, true);
			}
		}

		private onBlackRegionClick(ent: egret.TouchEvent): void
		{ 
			if (this._selectIndex >= 0)
			{
				let indexs: number[] = [this._selectIndex];
				this.regionBlack.addBall(indexs, true);
			}
		}

		private onOtherRegionClick(ent: egret.TouchEvent): void
		{ 
			if (this._selectIndex >= 0)
			{
				let indexs: number[] = [this._selectIndex];
				this.regionOther.addBall(indexs, true);
			}
		}

		private onBallBtnClick(ent: egret.TouchEvent): void
		{
			if (this._selectedBall)
			{
				this._selectedBall.hideSelectedAmi();
			}
			let btn: BallBtn = ent.target;
			this._selectedBall = btn;
			btn.showSelectedAmi();

			switch (btn)
			{//todo
				case this.ball0_btn:
					this._selectIndex = 0;
					console.log("倍数为=========0");
					break;
				case this.ball1_btn:
					this._selectIndex = 1;
					console.log("倍数为=========1");
					break;
				case this.ball2_btn:
					this._selectIndex = 2;
					console.log("倍数为=========2");
					break;
				case this.ball3_btn:
					this._selectIndex = 3;
					console.log("倍数为=========3");
					break;
				case this.ball4_btn:
					this._selectIndex = 4;
					console.log("倍数为=========4");
					break;
				case this.ball5_btn:
					this._selectIndex = 5;
					console.log("倍数为=========5");
					break;
			}
		}

		public begin_btn: eui.Button;
		public setCard_btn: eui.Button;
		public cardAmi_btn: eui.Button;
		public ballAmi_btn: eui.Button;

		private onBeginBtnClick(): void
		{
			// this.showBeginAmi();
			AllData.instance.dispatchEventWith(GameNotify.GAME_STAR);
		}
		private onSetCardBtnClick(): void
		{
			AllData.instance.testSetData();
			this.setCardData();
		}
		private onCardAmiBtnClick(): void
		{
			this.playGetCardAmi();
		}
		private onBallAmiBtnClick(): void
		{
			let ballNum = AllData.instance.getRandomInt(1, 10);
			let ballIndexs: number[] = [];
			this.regionRed.removeAllBall();
			this.regionBlack.removeAllBall();
			this.regionOther.removeAllBall();
			for (let i = 0; i < ballNum; i++)
			{
				let ballIndex: number = AllData.instance.getRandomInt(0, 5);
				ballIndexs.push(ballIndex);
			}
			this.regionRed.addBall(ballIndexs);
			this.regionBlack.addBall(ballIndexs);
			this.regionOther.addBall(ballIndexs);
			this.refreshMoneyLab();
		}
	}
}