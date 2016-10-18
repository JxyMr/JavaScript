/**
 * 通过 radio 的 name 组名获取当前选定项目的 value
 * @param {string} name 是单选框的组名（name属性值）
 * @return {string} 返回已选定项目的 value 值。
 * 若未选择任何一项，则返回 "" 空字符串
 */
function getRadioVal( name )
{
	var radio = document.getElementsByName( name );
	var result = "";

	for( var i = 0; i < radio.length; i++ )
	{
		var r = radio[ i ];

		if( r.checked )
		{
			result = r.value;
			break;
		}
	}

	return result;
}

/**
 * 获取指定容器内已经选定的复选框的值
 * @param {string} parentid 容器的 ID
 * @returns {Array} 已选定值的集合
 */
function getCheckbox( parentid )
{
	var result = [];

	// 第一步：取出这个指定ID的容器元素
	var c = document.getElementById( parentid );

	// 第二步：取出容器内所有复选框元素
	//var boxs = [];//代替 NodeList
	var inputs = c.getElementsByTagName( "input" );

	for( var i = 0; i < inputs.length; i++ )
	{
		var ipt = inputs[ i ];

		if( ipt.getAttribute( "type" ) == "checkbox" && ipt.checked )
		{
			result.push( ipt.value );
		}
	}

	// 第三步：循环检测checked属性为真时，将值存入 result
	//for( i = 0; i < boxs.length; i++ )
	//{
	//	var b = boxs[ i ];
	//
	//	if( b.checked )
	//	{
	//		result.push( b.value );
	//	}
	//}

	return result;
}