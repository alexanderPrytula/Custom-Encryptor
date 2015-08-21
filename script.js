(function() {

	var form = document.forms.encryptform,
		inputText = form.elements.your_snippet,
		complexity = form.elements.complexity,
		showComplexity = document.querySelector('.show-complexity'),
		go = form.elements.go_button,
		result = form.elements.result;

		go.addEventListener('click', function() {

			if( !inputText.value ) return;
			if( !complexity.value ) return;

				var val = inputText.value.split('');
				var comp = +complexity.value;

			var res = '';

			val.forEach(function(symbol) {
				var d = symbol.charCodeAt(0);
				var s = d.toString( comp )
				res += s;
			});

			result.textContent = res;

			inputText.value = '';
			complexity.value = 16;
			showComplexity.textContent = 16;

		});

		complexity.addEventListener('change', function() {
			showComplexity.textContent = this.value;
		});


})();