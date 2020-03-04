module betDetails
{
	export class BetDetailsItem extends eui.ItemRenderer implements eui.UIComponent
	{
		public playerName_lab: eui.Label;
		public playerbet_lab: eui.Label;
		public color_img: eui.Image;

		public data: BetDetailsTypeData;
		public constructor()
		{
			super();
			this.skinName = "resource/ui/panelYDD/BetDetails/BetDetailsItem.exml"
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
			this.playerbet_lab.text = this.data.money + " HDAG";
			this.playerName_lab.text = this.data.playerName;
			let imgS: string = "";
			switch (this.data.region)
			{
				case EnumerationType.RegionWinner.black:
					imgS = "heiSheng";
					break;
				case EnumerationType.RegionWinner.red:
					imgS = "hongSheng";
					break;
				case EnumerationType.RegionWinner.blackS:
				case EnumerationType.RegionWinner.redS:
					imgS = "otherPoint";
					break;
				default:
					break;
			}
			imgS += "_png"
			this.color_img.source = imgS;

		}
	}
}