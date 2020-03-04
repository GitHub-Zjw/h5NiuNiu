module betDetails
{
	export class BetRecordsItem extends eui.ItemRenderer implements eui.UIComponent
	{
		public betNum_lab: eui.Label;
		public TorF_lab: eui.Label;
		public color_img: eui.Image;

		public data: BetRecordsTypeData;
		public constructor()
		{
			super();
			this.skinName = "resource/ui/panelYDD/BetDetails/BetRecordsItemSkin.exml";
		}

		protected dataChanged(): void
		{
			this.betNum_lab.text = this.data.money + " HDAG";
			let isWinStr = this.data.isWin ? "+" : "-";
			this.TorF_lab.text =isWinStr + this.data.money + " HDAG";
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