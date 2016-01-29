window.onload=function(){
	var $=function(aa){
		return document.getElementById(aa);
	};
	var $s=function(aa){
		return document.getElementsByClassName(aa);
	};
	var blocks=$s('block');
	var circles=$s('circle');
	var currentBlock=blocks[0];
	var currentCircle=circles[0];
	var fn=(function(){
		var i=1;
		return function(){
			currentBlock.setAttribute('class','block');
			blocks[i].setAttribute('class','block show');
			currentBlock=blocks[i];
			currentCircle.setAttribute('class','circle');
			circles[i].setAttribute('class','circle active');
			currentCircle=circles[i];
			i++;
			if(i==5){
				i=0;
			}
		};
	})();
	var timerId=setInterval(fn,1000);

	var chang=$('chang');
	chang.onmouseover=function(){
		clearInterval(timerId);
	};
	var kaiguan=true;
	chang.onmouseout=function(){
		if(kaiguan){
			timerId=setInterval(fn,1000);
		}
	};
	for(var i=0;i<circles.length;i++){
		circles[i].onclick=function(){
			clearInterval(timerId);
			kaiguan=false;
			currentCircle.setAttribute('class','circle');
			this.setAttribute('class','circle active');
			currentCircle=this;

			var index=this.getAttribute('index');
			currentBlock.setAttribute('class','block');
			blocks[index].setAttribute('class','block show');
			currentBlock=blocks[index];
		};
	}
	var pre=$('main-pre');
	var next=$('main-next');
	pre.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		currentCircle.setAttribute('class','circle');
		var nextl=(currentCircle.previousElementSibling)?currentCircle.previousElementSibling:circles[4];
		nextl.setAttribute('class','circle active');
		currentCircle=nextl;

		currentBlock.setAttribute('class','block');
		var nextl=(currentBlock.previousElementSibling)?currentBlock.previousElementSibling:blocks[4];
		nextl.setAttribute('class','block show');
		currentBlock=nextl;
	};
	next.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		currentCircle.setAttribute('class','circle');
		var nextl=(currentCircle.nextElementSibling)?currentCircle.nextElementSibling:circles[0];
		nextl.setAttribute('class','circle active');
		currentCircle=nextl;

		currentBlock.setAttribute('class','block');
		var nextl=(currentBlock.nextElementSibling)?currentBlock.nextElementSibling:blocks[0];
		nextl.setAttribute('class','block show');
		currentBlock=nextl;
	};
	next.onmousedown=function(e){
		e.preventDefault();
	};
	pre.onmousedown=function(e){
		e.preventDefault();
	};

// -------------------------------------------------------------------------
	// //闭包:函数在定义的时候可以看到定义的变量,调用时调用离他最近的
// ===================================
// 代码处理成一块一块的,避免变量冲突
	// (function(){
	// 	// ----------------
	// 	// ----------------
	// 	// ----------------
	// 	// ----------------
	// })();

	// (function(){
	// 	// ----------------
	// 	// ----------------
	// 	// ----------------
	// 	// ----------------
	// })();

	// (function(){
	// 	// ----------------
	// 	// ----------------
	// 	// ----------------
	// 	// ----------------
	// })();





};