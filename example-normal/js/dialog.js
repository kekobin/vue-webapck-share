/***
** Dialog Module
**
** params: {elClass, closeClass, template}
**
***/

;(function(global) {

	var Util = global.Util;

	var defaultOpts = {
		closeClass: '.close',
		template: '<p class="v-center">Hello Dialog</p><button class="close">Close</button>'
	};

	var Dialog = function(options) {

		this.opts = Util.extend(defaultOpts, options);
		
		this.$el = document.querySelector(options.elClass);
		this.$elClose = document.querySelector(options.closeClass);
		this.$mask = document.querySelector('.mask');

		this.init();
	};

	Dialog.version = '0.0.1';

	Dialog.prototype.init = function() {
		
		var $dialogBd = this.$el.querySelector('.dialog-bd');
		$dialogBd.innerHTML = this.opts.template;

		this.$el.classList.add('show');
		this.$mask.classList.add('show');

		this.bindEvents($dialogBd);
	};

	Dialog.prototype.bindEvents = function($bdEl) {

		var $close = $bdEl.querySelector('.close');

		$close.addEventListener('click', function(e) {
			e.preventDefault();
			this.$el.classList.remove('show');
			this.$mask.classList.remove('show');
		}.bind(this));

	};

	if (typeof module !== 'undefined' && module.exports) {
        module.exports = Dialog;
    } else if (typeof define === 'function' && define.cmd) {
        define(function(){return Dialog;});
    } else {
        global.Dialog = Dialog;
    }

})(window);