var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var MainUIYDD = (function (_super) {
        __extends(MainUIYDD, _super);
        function MainUIYDD() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/mainYDD/MainUIYDDSkin.exml";
            _this._cards = [_this.card1, _this.card2, _this.card3, _this.card4, _this.card5, _this.card6];
            _this._cardStarXs = [];
            _this._cardStarXs[0] = _this.card1.x;
            _this._cardStarXs[1] = _this.card2.x;
            _this._cardStarXs[2] = _this.card3.x;
            _this._cardStarXs[3] = _this.card4.x;
            _this._cardStarXs[4] = _this.card5.x;
            _this._cardStarXs[5] = _this.card6.x;
            _this._vsManBlackX = _this.vsManBlack_img.x;
            _this._vsManRedX = _this.vsManRed_img.x;
            _this._selectIndex = -1;
            return _this;
        }
        MainUIYDD.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        MainUIYDD.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this._card1StarX = this.card1.x;
            this.regitEvent();
        };
        MainUIYDD.prototype.regitEvent = function () {
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
        };
        MainUIYDD.prototype.removeEvent = function () {
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
        };
        /**
         * 游戏开始
         */
        MainUIYDD.prototype.onBegigGame = function () {
            this.mengBan_btn.visible = false;
            this.blackResult_img.alpha = 0;
            this.redResult_img.alpha = 0;
            this._selectIndex = -1;
            this._selectedBall.hideSelectedAmi();
            this.regionRed.removeAllBall();
            this.regionBlack.removeAllBall();
            this.regionOther.removeAllBall();
            this.showBeginAmi();
        };
        /**
         * 停止下注
         */
        MainUIYDD.prototype.onStopBet = function () {
            this.mengBan_btn.visible = true;
            var self = this;
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_STOP_BET);
            var temp = setTimeout(function () {
                game.AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_STOP_BET);
                clearTimeout(temp);
            }, 1500);
        };
        /**
         * 刷新下注金额
         */
        MainUIYDD.prototype.refreshMoneyLab = function () {
            this.moneyNumB_lab.text = AllData.instance.BleckMoneyNum.toString();
            this.moneyNumR_lab.text = AllData.instance.RedMoneyNum.toString();
            this.moneyNumO_lab.text = AllData.instance.OtherMoneyNum.toString();
        };
        /**
         * 播放开始动画
         */
        MainUIYDD.prototype.showBeginAmi = function () {
            var self = this;
            var vsLeft = this.vsManBlack_img;
            var vsRight = this.vsManRed_img;
            vsLeft.visible = true;
            vsRight.visible = true;
            this.moveTw(vsLeft, -vsLeft.width, this._vsManBlackX, this.playAllLine);
            this.moveTw(vsRight, this.width, this._vsManRedX, this.playAllLine);
        };
        MainUIYDD.prototype.playAllLine = function () {
            this.regionBlack.playLineAmi();
            this.regionRed.playLineAmi();
            this.regionOther.playLineAmi();
            this.clock.starTiming(5); //fix
        };
        MainUIYDD.prototype.moveTw = function (uiCom, starX, endX, call) {
            var self = this;
            this.touchEnabled = false;
            uiCom.x = starX;
            var tw = egret.Tween.get(uiCom);
            tw.to({ x: endX }, 200)
                .wait(500)
                .to({ x: starX }, 150)
                .call(function () {
                self.touchEnabled = true;
                call.apply(self);
            }, self);
        };
        /**
         * 哈希选牌
         */
        MainUIYDD.prototype.SelectCard = function () {
            this.selectCardCom.showSelectAmi();
        };
        MainUIYDD.prototype.SendCard = function () {
            this.setCardData();
            this.playGetCardAmi();
        };
        /**
         * 设置卡牌数据
         */
        MainUIYDD.prototype.setCardData = function () {
            for (var i = 0; i < 6; i++) {
                this._cards[i].setCard(i);
            }
            this.blackResult_img.source = EnumerationType.CardType[AllData.instance.CardTypeB] + "_png";
            this.redResult_img.source = EnumerationType.CardType[AllData.instance.CardTypeR] + "_png";
        };
        /**
         * 播放发牌动画
         */
        MainUIYDD.prototype.playGetCardAmi = function () {
            this._timeNum = 0;
            this.startTimer(100);
        };
        MainUIYDD.prototype.showWinner = function () {
            var winner = AllData.instance.Winner;
            switch (winner) {
                case EnumerationType.RegionWinner.black:
                    this.regionBlack.showWinAmi();
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
        };
        MainUIYDD.prototype.startTimer = function (time) {
            if (this._timer == null) {
                this._timer = new egret.Timer(time);
                this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            }
            this._timer.start();
            this.onTimer(null);
        };
        MainUIYDD.prototype.removeTimer = function () {
            if (this._timer) {
                this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this._timer.stop();
                this._timer = null;
            }
        };
        //发牌具体时间控制
        MainUIYDD.prototype.onTimer = function (e) {
            var starR = 8; //开始播放右边发牌动画的时间
            this._timeNum++;
            if (this._timeNum < 4) {
                this.playLeftGetCardAmi(this._timeNum - 1);
            }
            else if (this._timeNum <= starR) {
            }
            else if (this._timeNum < starR + 4) {
                var index = this._timeNum - (starR - 2);
                this.playRightGetCardAmi(index);
            }
            switch (this._timeNum) {
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
                    this._cards[4].showOpenCardAmi(false);
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
            if (this._timeNum > 57) {
                this._timeNum = 0;
                this.removeTimer();
            }
        };
        MainUIYDD.prototype.playLeftGetCardAmi = function (index, speed) {
            if (speed === void 0) { speed = 300; }
            var card = this._cards[index];
            var endX = this._cardStarXs[index];
            var starX = this.width / 2 - card.width / 2;
            var centerX = this._card1StarX;
            var endTime = (endX - centerX) / speed * 1000;
            card.x = starX;
            card.visible = true;
            egret.Tween.removeTweens(card);
            this._GetCardAmiL = egret.Tween.get(card);
            this._GetCardAmiL.to({ x: centerX }, 300)
                .to({ x: endX }, endTime);
        };
        MainUIYDD.prototype.playRightGetCardAmi = function (index, speed) {
            if (speed === void 0) { speed = 300; }
            var card = this._cards[index];
            var endX = this._cardStarXs[index];
            var starX = this.width / 2 + card.width / 2;
            card.x = starX;
            card.visible = true;
            var endTime = (endX - starX) / speed * 1000;
            this._getCardAmiR = egret.Tween.get(card);
            this._getCardAmiR.to({ x: endX }, endTime);
        };
        MainUIYDD.prototype.onBetDetailsBtnClick = function (ent) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BET_DETAIL, true);
        };
        MainUIYDD.prototype.onBetRecordsBtnClick = function (ent) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BET_DETAIL, false);
        };
        MainUIYDD.prototype.onGameMethodBtnClick = function (ent) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_GAME_METHOD, true);
        };
        MainUIYDD.prototype.onPrizeInfoBtnClick = function (ent) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_GAME_METHOD, false);
        };
        MainUIYDD.prototype.onRedRegionClick = function (ent) {
            if (this._selectIndex >= 0) {
                var indexs = [this._selectIndex];
                this.regionRed.addBall(indexs, true);
            }
        };
        MainUIYDD.prototype.onBlackRegionClick = function (ent) {
            if (this._selectIndex >= 0) {
                var indexs = [this._selectIndex];
                this.regionBlack.addBall(indexs, true);
            }
        };
        MainUIYDD.prototype.onOtherRegionClick = function (ent) {
            if (this._selectIndex >= 0) {
                var indexs = [this._selectIndex];
                this.regionOther.addBall(indexs, true);
            }
        };
        MainUIYDD.prototype.onBallBtnClick = function (ent) {
            if (this._selectedBall) {
                this._selectedBall.hideSelectedAmi();
            }
            var btn = ent.target;
            this._selectedBall = btn;
            btn.showSelectedAmi();
            switch (btn) {
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
        };
        MainUIYDD.prototype.onBeginBtnClick = function () {
            // this.showBeginAmi();
            AllData.instance.dispatchEventWith(GameNotify.GAME_STAR);
        };
        MainUIYDD.prototype.onSetCardBtnClick = function () {
            AllData.instance.testSetData();
            this.setCardData();
        };
        MainUIYDD.prototype.onCardAmiBtnClick = function () {
            this.playGetCardAmi();
        };
        MainUIYDD.prototype.onBallAmiBtnClick = function () {
            var ballNum = AllData.instance.getRandomInt(1, 10);
            var ballIndexs = [];
            this.regionRed.removeAllBall();
            this.regionBlack.removeAllBall();
            this.regionOther.removeAllBall();
            for (var i = 0; i < ballNum; i++) {
                var ballIndex = AllData.instance.getRandomInt(0, 5);
                ballIndexs.push(ballIndex);
            }
            this.regionRed.addBall(ballIndexs);
            this.regionBlack.addBall(ballIndexs);
            this.regionOther.addBall(ballIndexs);
            this.refreshMoneyLab();
        };
        return MainUIYDD;
    }(eui.Component));
    game.MainUIYDD = MainUIYDD;
    __reflect(MainUIYDD.prototype, "game.MainUIYDD");
})(game || (game = {}));
//# sourceMappingURL=MainUIYDD.js.map