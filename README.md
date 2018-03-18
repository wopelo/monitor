# 项目说明
一个通用事件监听器

# 如何使用

## demo
./index.html

## 引入monitor.js
``` HTML
<script type="text/javascript" src="./monitor.js"></script>
```

## 添加事件
``` javascript
Monitor.addEvent(element,type,function)
/*
	element:获取的元素
	type:事件类型，没有"on"，即类似于click/mousemove
*/
```

## 移除事件
``` javascript
Monitor.removeEvent(element,type,function)
//参数与addEvent一样
```

## 阻止事件冒泡
``` javascript
Monitor.stopPropagation(event)
```

## 阻止默认事件
``` javascript
Monitor.preventDefault(event)
```

## 获取事件目标
``` javascript
Monitor.getTarget(event)
```