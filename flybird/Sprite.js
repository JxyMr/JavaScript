/**
 * 基础精灵类（绘制静态的可视元素）
 * Created by Administrator on 2016/10/9.
 */

function Sprite()
{
	//----------------------------------------
	//  像素来源
	//----------------------------------------

	var _source = null;
	var _sourceChanged = false;

	this.__defineSetter__( "source", function( value )
	{
		// 设置新的像素来源
		_source = value;
		_sourceChanged = true;
	} );

	this.__defineGetter__( "source", function()
	{
		// 读取现有的像素来源
		return _source;
	} );

	//----------------------------------------
	//  X 坐标
	//----------------------------------------
	var _x = 0;
	var _xChanged = false;

	this.__defineSetter__( "x", function( value )
	{
		// 设置新的X坐标
		_x = value;
		_xChanged = true;
	} );

	this.__defineGetter__( "x", function()
	{
		// 读取现有的X坐标
		return _x;
	} );

	//----------------------------------------
	//  y 坐标
	//----------------------------------------

	var _y = 0;
	var _yChanged = false;

	this.__defineSetter__( "y", function( value )
	{
		// 设置新的Y坐标
		_y = value;
		_yChanged = true;
	} );

	this.__defineGetter__( "y", function()
	{
		// 读取现有的Y坐标
		return _y;
	} );

	//----------------------------------------
	//  width
	//----------------------------------------
	var _width = 0;
	var _widthChanged = false;

	this.__defineSetter__( "width", function( value )
	{
		// 设置新的Y坐标
		_width = value;
		_widthChanged = true;
	} );

	this.__defineGetter__( "width", function()
	{
		// 读取现有的Y坐标
		return _width;
	} );

	//----------------------------------------
	//  height
	//----------------------------------------
	var _height = 0;
	var _heightChanged = false;

	this.__defineSetter__( "height", function( value )
	{
		// 设置新的Y坐标
		_height = value;
		_heightChanged = true;
	} );

	this.__defineGetter__( "height", function()
	{
		// 读取现有的Y坐标
		return _height;
	} );

	//----------------------------------------
	//  是否需要更新
	//----------------------------------------

	this.__defineGetter__( "dirty", function()
	{
		return _xChanged || _yChanged || _sourceChanged;
	} );

	//--------------------------------------------------------------------------
	//
	//	Class methods
	//
	//--------------------------------------------------------------------------

	/**
	 * 精灵更新
	 * <p>由游戏帧驱动统一调度，不需要自身调用</p>
	 */
	this.update = function()
	{
		if( this.dirty )
		{
			_xChanged = _yChanged = _sourceChanged = false;
			context.drawImage( _source, _x, _y );
		}
	};
}