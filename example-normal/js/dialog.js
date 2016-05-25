/***
** Dialog Module
**
** params: {elClass, closeClass}
**
***/

;(function(window) {

	var Dialog = function(options) {
		this.opts = options || {};

		this.$el = document.querySelector(options.elClass);
		this.$elClose = document.querySelector(options.closeClass);
		this.$mask = document.querySelector('.mask');

		this.init();
	};

	Dialog.version = '0.0.1';

	Dialog.prototype.init = function() {
		
		this.$el.classList.add('show');
		this.$mask.classList.add('show');

		this.bindEvents();
	};

	Dialog.prototype.bindEvents = function() {

		this.$elClose.addEventListener('click', function(e) {
			e.preventDefault();
			this.$el.classList.remove('show');
			this.$mask.classList.remove('show');
		}.bind(this));

	};

	window.Dialog = Dialog;

})(this);