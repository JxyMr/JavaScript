/**
 * 游戏主入口
 * Created by Administrator on 2016/10/9.
 */

var canvas = null;
var context = null;
var game = null;
var ctrl = null;

window.onload = function()
{
	game = new Game( 60, 1000, 740 );
	game.init();

	ctrl = new UserController();
};

function Game( frameRate, width, height )
{
	var _self = this;
	var _frameRate = typeof(frameRate) == "number" ? frameRate : 60;
	var _step = 1000 / _frameRate;
	var _timer;

	var _width = width;
	var _height = height;
	var _res = new ResManager();

	this.init = function()
	{
		canvas = document.getElementById( "stage" );
		context = canvas.getContext( "2d" );

		// 加载游戏资源
		_res.loadbatch( config, function()
		{
			// 开始游戏
			_self.start();
		} );
	};

	var sp;
	var _curState;

	this.start = function()
	{
		//--------------------------------------
		var box = ResManager.getRes( "box" );
		sp = new Sprite();
		sp.source = box;

		_curState = new Group();
		_curState.addChild( sp );

		//--------------------------------------

		// 开始游戏循环
		_timer = setInterval( _enterFrame, _step );

		// 开始用户按钮模块
		ctrl.start();
	};

	function _enterFrame()
	{
		console.log( "enter..." );

		if( ctrl.key[ "d" ] )
		{
			sp.x += 5;
		}
		if( ctrl.key[ "s" ] )
		{
			sp.y += 5;
		}
		if( ctrl.key[ "a" ] )
		{
			sp.x -= 5;
		}
		if( ctrl.key[ "w" ] )
		{
			sp.y -= 5;
		}

		if( _curState.dirty() )
		{
			context.clearRect( 0, 0, _width, _height );
			context.fillRect( 0, 0, _width, _height );
		}

		_curState.update();
	}
}
