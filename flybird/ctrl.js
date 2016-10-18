/**
 * 用户控制模块
 * Created by Administrator on 2016/10/9.
 */

function UserController()
{
	var _self = this;

	// 当键按下时，相应的键名值为 true
	this.key = {};

	this.start = function()
	{
		window.onkeydown = _keyHandler;
		window.onkeyup = _keyHandler;
	};

	function _keyHandler( e )
	{
		var char = String.fromCharCode( e.which ).toLowerCase();
		console.log( e.which, char );
		_self.key[ char ] = e.type == "keydown";
	}
}
