/**
 * 游戏资源管理器
 * Created by Administrator on 2016/10/9.
 */

function ResManager()
{
	var _self = this;

	this.load = function()
	{
	};

	/**
	 * 批量加载资源
	 * @param {Array} config 需要加载的资源配置数组（元素如：{name:"",path:""}）
	 * @param {Function} func 资源加载完成时的回调函数
	 */
	this.loadbatch = function( config, func )
	{
		for( var i = 0; i < config.length; i++ )
		{
			var img = new Image();
			img.src = config[ i ].path;
			img.name = config[ i ].name;

			ResManager.RES.push( img );

			img.onload = function()
			{
				this.setAttribute( "data-completed", "true" );
				console.log( this.name, "load completed!" );

				// 循环检测所有 ResManager.RES 所有 img 是否都具有这个完成
				// 标记，是的话就代表资源全部加载完成，否则继续等下一次
				if( _self.isCompleted() ) func();
			};
		}
	};

	/**
	 * 是否全部加载完成
	 */
	this.isCompleted = function()
	{
		var size = ResManager.RES.length;
		for( var i = 0; i < size; i++ )
		{
			var img = ResManager.RES[ i ];
			if( img.getAttribute( "data-completed" ) != "true" )
				return false;
		}
		return true;
	};
}

ResManager.RES = [];
ResManager.getRes = function( name )
{
	var size = ResManager.RES.length;
	for( var i = 0; i < size; i++ )
	{
		var img = ResManager.RES[ i ];
		if( img.name == name )
			return img;
	}
	return null;
};

