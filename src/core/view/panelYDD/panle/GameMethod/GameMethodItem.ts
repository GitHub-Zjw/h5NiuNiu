module gameMethod
{
	export class GameMethodItem extends eui.ItemRenderer implements eui.UIComponent
	{
		public winner_lab: eui.Label;
		public regionType_lab: eui.Label;
		public moneyNum_lab: eui.Label;

		public data: string[];
		public constructor()
		{
			super();
			this.skinName = "resource/ui/panelYDD/GameMethod/GameMethodItemSkin.exml"
		}

		protected partAdded(partName: string, instance: any): void
		{
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void
		{
			super.childrenCreated();
		}

		protected dataChanged(): void
		{
			this.winner_lab.text = this.data[0];
			this.regionType_lab.text = this.data[2];
			this.moneyNum_lab.text = this.data[1];
		}
	}
}