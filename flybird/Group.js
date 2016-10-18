/**
 * 游戏容器
 * Created by Administrator on 2016/10/9.
 */

function Group()
{
	var _sprites = [];

	this.addChild = function( group )
	{
		if( _sprites.indexOf( group ) == -1 )
		{
			_sprites.push( group );
		}
	};

	this.removeChild = function( name )
	{
		for( var i = 0; i < _sprites.length; i++ )
		{
			if( _sprites[ i ].name == name )
			{
				_sprites.splice( i, 1 );
				break;
			}
		}
	};

	// 持续更新Child
	this.update = function()
	{
		// 遍历所有Child.update()
		for( var i = 0; i < _sprites.length; i++ )
		{
			_sprites[ i ].update();
		}
	};

	// 提供给State接口：dirty
	this.dirty = function()
	{
		// 遍历所有Child，查看是否有true的dirty需求
		for( var i = 0; i < _sprites.length; i++ )
		{
			if( _sprites[ i ].dirty )
				return true;
		}
		return false;
	};
}