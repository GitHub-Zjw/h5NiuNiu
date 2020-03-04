module ErgodicUtils
{
	/**
	 * 获取一个组件上的所有按钮
	 * 不会遍历子组件，只会便利到eui.group
	 */
	export function getAllButton(com: eui.Component): eui.Button[]
	{
		let returnValue: eui.Button[] = [];
		let childNum: number = com.numChildren;
		for (let i = 0; i < childNum; i++)
		{
			let obj = com.getChildAt(i);
			if (obj instanceof eui.Button)
			{
				returnValue.push(obj);
			}
			else if (obj instanceof eui.Group)
			{
				returnValue.push.apply(returnValue, this.getAllButtonByGroup(obj));
			}
		}
		return returnValue;
	}

	/**
	 * 获取一个组上的所有按钮
	 * 不会遍历子组件，只会便利到eui.group
	 */
	export function getAllButtonByGroup(group: eui.Group): eui.Button[]
	{
		let returnValue: eui.Button[] = [];
		let childNum: number = group.numChildren;
		for (let i = 0; i < childNum; i++)
		{
			let obj = group.getChildAt(i);
			if (obj instanceof eui.Button)
			{
				returnValue.push(obj);
			}
			else if (obj instanceof eui.Group)
			{
				returnValue.push.apply(returnValue, this.getAllButtonByGroup(obj));
			}
		}
		return returnValue;
	}
}