var Monitor = {};
Monitor = {
	// 页面加载完成后
	readyEvent : function(fn) {
		if (fn==null) {
			fn=document;
		}
		var oldonload = window.onload;
		//没有设置onload的情况下，值为null
		if (typeof window.onload != 'function') {
			window.onload = fn;
		} else {
			window.onload = function() {
				oldonload();
				fn();
			};
		}
	},
	// 参数： 操作的元素,事件名称 ,事件处理程序
	addEvent : function(element, type, handler, capture) {
		//依次判断element支持的事件类型
		if (element.addEventListener) {
			//事件类型、需要执行的函数、是否捕捉
			element.addEventListener(type, handler, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	// 移除事件
	removeEvent : function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.datachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	// 阻止事件冒泡
	stopPropagation : function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	// 取消事件的默认行为
	preventDefault : function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	// 获取事件目标
	getTarget : function(event) {
		return event.target || event.srcElement;
	}
};