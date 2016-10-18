/**
 * Created by Administrator on 2016/9/26.
 */

Window.prototype.addEventer =
	Element.prototype.addEventer =
		function( type, func )
		{
			// IE8以下，还是chrome
			var attach = this.addEventListener
				? this.addEventListener : this.attachEvent;

			var pre = this.addEventListener ? "" : "on";

			//attach( type, func );
			//attach.call( this, type, func );
			attach.apply( this, [ pre + type, func ] );
		};

Window.prototype.removeEventer =
	Element.prototype.removeEventer =
		function( type, func )
		{
			// IE8以下，还是chrome
			var detech = this.removeEventListener
				? this.removeEventListener : this.detachEvent;

			var pre = this.addEventListener ? "" : "on";

			//attach( type, func );
			//attach.call( this, type, func );
			detech.apply( this, [ pre + type, func ] );
		};

