/**
 * Created by Administrator on 2016/9/20.
 */


	// 去重：如何去除数组中重复的元素
Array.prototype.removeDuplicate = function()
{
	var tmp = [];
	//-----------------------------------------------
	//for( var i = 0; i < this.length; i++ )
	//{
	//	if( tmp.indexOf( this[ i ] ) == -1 )
	//		tmp.push( this[ i ] );
	//}
	//
	//-----------------------------------------------
	var agent = {};

	for( var i = 0; i < this.length; i++ )
	{
		if( !agent.hasOwnProperty( this[ i ] ) )
			agent[ this[ i ] ] = { val: this[ i ], index: i };
	}

	console.log( agent );

	for( var ns in agent )
	{
		//tmp.push( agent[ ns ] );

		var d = agent[ ns ];
		tmp[ d.index ] = d.val;
	}

	for( i = tmp.length - 1; i > 0; i-- )
	{
		if( is_empty( tmp[ i ] ) ) tmp.splice( i, 1 );
	}
	//-----------------------------------------------
	return tmp;
};

/**
 * 查找数组中是否包含指定的元素
 * @param value
 * @returns {number} 返回匹配元素的下标索引。找不到则返回 -1。
 */
Array.prototype.indexOf = function( value )
{
	for( var i = 0; i < this.length; i++ )
	{
		if( this[ i ] === value ) return i;
	}

	return -1;
};