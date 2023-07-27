var tabBtn = document.querySelectorAll('.gunchung-tab-top-box-btn');
		var tabCon = document.querySelectorAll('.gunchung-tab-con');
		tabBtn[0].className = 'gunchung-tab-top-box-btn active';
		tabCon[0].className = 'gunchung-tab-con show';
		for( var i=0;i<tabBtn.length;i++ ){
				document.querySelectorAll('.gunchung-tab-top-box-btn')[i].setAttribute('index', i)
				tabBtn[i].onclick = function() {
					for (let i of tabBtn) {
						i.className = 'gunchung-tab-top-box-btn'
					}
					this.className = 'gunchung-tab-top-box-btn active';
					for (let i of tabCon) {
						i.className = 'gunchung-tab-con'
					}
					tabCon[this.getAttribute('index')].className = 'gunchung-tab-con show';
				}
		}