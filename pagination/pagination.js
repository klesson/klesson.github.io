(function() {
	window.onload = function() {			
		var buttons = document.getElementsByClassName('button');
		var curSelected = buttons.item(3);
		var btnCollection = [];
		function selItem(target) {
				console.log('click', event, event.target);
				curSelected.classList.remove('selected');
				target.classList.add('selected');
				curSelected = target;
		}
		buttons.item(0).addEventListener('click', function(event) {
			var curIndex = btnCollection.indexOf(curSelected);
			if (curIndex) {
			curIndex--;
			selItem(btnCollection[curIndex]);
		}
		});
		for(var i = 1; i < buttons.length-2; i++) {
			var btn = buttons.item(i);
			btn.addEventListener('click', function(event) {
				selItem(event.target);
			});
			btnCollection.push(btn);
		}

		buttons.item(buttons.length-2).addEventListener('click', function(event) {
			var curIndex = btnCollection.indexOf(curSelected);
			if ((curIndex > -1) && (curIndex<btnCollection.length - 1)) {
			curIndex++;
			selItem(btnCollection[curIndex]);
		}
		});

		buttons.item(buttons.length-1).addEventListener('click', function(event) {
			var curIndex = btnCollection.length - 1;
			selItem(btnCollection[curIndex]);
		});
	}
})();