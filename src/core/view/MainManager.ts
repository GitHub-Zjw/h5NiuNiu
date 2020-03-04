/**
  * 主界面管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
module game {

    export class MainManager extends puremvc.SimpleCommand implements puremvc.ICommand {
        public static mainUI: game.MainUIYDD;

        public constructor() {
            super();
        }

        public static NAME: string = "MainManager";

        /**
         * 注册消息
         */
        public register(): void {
            this.facade.registerCommand(MainNotify.OPEN_MAIN, MainManager);
            this.facade.registerCommand(MainNotify.CLOSE_MAIN, MainManager);
            this.facade.registerCommand(PanelNotify.CLOSE_STOP_BET, MainManager);
            
        }

        public execute(notification: puremvc.INotification): void {
            var data: any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            var mainUI = game.MainManager.mainUI;
            switch (notification.getName()) {
                case MainNotify.OPEN_MAIN:
                    if (mainUI == null) {
                        mainUI = new game.MainUIYDD();
                        panelCon.addChild(mainUI);
                        game.MainManager.mainUI = mainUI;
                    }
                    break;
                case MainNotify.CLOSE_MAIN:
                    if (mainUI != null) {
                        panelCon.removeChild(mainUI);
                        mainUI = null;
                        game.MainManager.mainUI = null;
                    }
                    break;
                case PanelNotify.CLOSE_STOP_BET:
                    if (mainUI != null)
                    {
                        mainUI.SelectCard();
                    }
                    break;
            }
        }
    }
}
