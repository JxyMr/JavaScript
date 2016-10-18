/**
 * 限定输入类型的高级输入框功能支持
 * Created by Administrator on 2016/9/29.
 */

// 使用方式：在 input.text 上直接添加 data-type="number|function"

// 开启方式：在页面进入时，就找出 data-type="number" 完成初始化
// 第一步：添加ondrop、oninput、onpropertychange、onbeforepaste
var PROPERTY = "data-type";

addEvent( document, "readystatechange", readystateHandler );

function readystateHandler( event )
{
	event = event || window.event;
	console.log( event.type, document.readyState );

	if( document.readyState != "interactive" ) return;

	//console.log( event.type, document.readyState );

	// 入口
	// 1：找出页面中所有包含 data-type 属性的文本输入框
	var inputs = [];
	inputs = document.querySelectorAll( "input[type='text'][" + PROPERTY + "]" );
	console.log( inputs );

	// 2：为此类输入框逐个加上高级功能支持
}

// 第二步：完成替换函数逻辑

function addEvent( element, type, func )
{
	// IE8以下，还是chrome
	var attach = element.addEventListener
		? element.addEventListener : element.attachEvent;

	var pre = element.addEventListener ? "" : "on";

	//attach( type, func );
	//attach.call( this, type, func );
	attach.apply( element, [ pre + type, func ] );
}

function removeEvent( element, type, func )
{
	// IE8以下，还是chrome
	var detech = element.removeEventListener
		? element.removeEventListener : element.detachEvent;

	var pre = element.addEventListener ? "" : "on";

	//attach( type, func );
	//attach.call( this, type, func );
	detech.apply( element, [ pre + type, func ] );
}