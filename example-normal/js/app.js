window.onload = function() {
	var $triggerBtn = document.querySelector('#triggerBtn');

	$triggerBtn.addEventListener('click', function(e) {
		e.preventDefault();

		new Dialog({
			elClass: '.dialog',
			closeClass: '.close',
			// tempalte:xxx
		});
	});
}; 