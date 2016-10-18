/**
 * 游戏状态
 * Created by Administrator on 2016/10/9.
 */

function State()
{
	var _groups = [];

	// 添加容器Group
	this.addGroup = function( group )
	{
		if( _groups.indexOf( group ) == -1 )
		{
			_groups.push( group );
		}
	};

	this.removeGroup = function( name )
	{
		for( var i = 0; i < _groups.length; i++ )
		{
			if( _groups[ i ].name == name )
			{
				_groups.splice( i, 1 );
				break;
			}
		}
	};

	// 持续更新容器Group
	this.update = function()
	{
		// 遍历所有Group.update()
		for( var i = 0; i < _groups.length; i++ )
		{
			_groups[ i ].update();
		}
	};

	// 提供给Game接口：dirty
	this.dirty = function()
	{
		// 遍历所有Group，查看是否有true的dirty需求
		for( var i = 0; i < _groups.length; i++ )
		{
			if( _groups[ i ].dirty )
				return true;
		}
	};
}