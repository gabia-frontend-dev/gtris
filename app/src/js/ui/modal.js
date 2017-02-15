(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.ui) {
		gtris.ui = window.gtris.ui = {};
	}

	var modal = {

		wrapperArr : [],
		options : {},
		escKeyArr : [],
		clonedArr : [],

		open: function(obj) {
			var _obj = obj;
			var _position = _obj.position;
			var _overlayOpacity = _obj.overlayOpacity;
			var _overlayClose = _obj.overlayClose;
			var _overlayColor = _obj.overlayColor;
			var _escKey = _obj.escKey;
			var _selector = _obj.target.charAt(0);

			//set option
			if(_position === undefined) _position = ['center','center'];
			if(_overlayOpacity === undefined) _overlayOpacity = 0.8;
			if(_overlayColor === undefined) _overlayColor = '#000';
			if(_overlayClose === undefined) _overlayClose = false;
			if(_escKey === undefined) {
				this.escKeyArr.push(true);
			}else{
				this.escKeyArr.push(_obj.escKey);	
			}

			this.options = {
				position : _position,
				overlayOpacity : _overlayOpacity,
				overlayColor : _overlayColor,
				overlayClose : _overlayClose
			};

			if ( _selector === '#' ||  _selector === '.' ) {
				//no ajax
				if( $(_obj.target).length ) {
					var $target = $(_obj.target);
					$target.css({display: 'block', opacity: '0'});
					this.clonedArr.push($target);
					this.showModal( _obj, $target );
				}else{
					this.clonedArr.some(function(item, index, array) {
						item.filter(function(index) {
							if( _selector === '#' ) {
								if( $(this).attr('id') === _obj.target.substring(1) ) {
									$(this).css('opacity', '0');
									modal.showModal( _obj, $(this) );
								}
							}else if( _selector === '.' ){
								for(var i=0; i<$(this).attr('class').split(' ').length; i++) {
									if( $(this).attr('class').split(' ')[i] === _obj.target.substring(1) ) {
										$(this).css('opacity', '0');
										modal.showModal( _obj, $(this) );
									}
								}
							}
						});
					});
				}
			}else{
				//ajax
				this.ajaxCall(_obj);
			}
		},

		ajaxCall: function(_obj) {
			$.ajax({
				url: _obj.target,
					error : function(xhr, status, error) {
					//console.log('ajax error');
				},
				beforeSend : function() {
					//console.log('loading...');
				},
				success: function(response) {
					var $target = $(response);
					$target.css('opacity', '0');
					//show modal
					modal.showModal(_obj, $target);
				},
				complete: function() {
					//setPosition();
				}
			}).done(function(data) {
				//console.log('done');
			});
		},

		showModal: function(_obj, $target) {
			//create wrapper
			var gtModalWrapper = $(document.createElement('div'));
			gtModalWrapper.addClass('gt-modal-wrapper');
			gtModalWrapper.appendTo('body');
			this.wrapperArr.push(gtModalWrapper);

			//create overlay
			var $overlay = $(gtris.util.makeDimmed('gt-overlay', 0, this.options.overlayColor));

			//showing overlay
			TweenMax.to($overlay, 0.5, {opacity:this.options.overlayOpacity, ease:Power2.easeOut, onComplete: overlayOpenCompleted});

			//showing modal
			function overlayOpenCompleted() {
				TweenMax.to($target, 0, {opacity:1, onComplete: modalOpenCompleted});
			}

			//completed event return
			function modalOpenCompleted() {
				if(_obj.completed) return _obj.completed();
			}

			//append overlay, modal
			$overlay.appendTo(this.wrapperArr[this.wrapperArr.length - 1]);
			$target.appendTo(this.wrapperArr[this.wrapperArr.length - 1]);

			//set position
			this.setPosition($target);

			//add event
			$target.find('[data-modal="hide"]').on('click', function(event) {
				modal.hideModal(_obj);
			});

			if(this.options.overlayClose) {
				$overlay.on('click', function(event) {
					modal.hideModal(_obj);
				});
			}

			$(document).unbind('keyup').bind('keyup', function(e) {
				var evt = e || window.event;
				if (evt.keyCode == 27) {
					if(modal.wrapperArr.length > 0 && modal.escKeyArr[modal.escKeyArr.length - 1] === true) {
						modal.hideModal(_obj);
						modal.escKeyArr.pop();
					}
				}
			});
		},

		hideModal: function(_obj) {
			var lastModalIdx = modal.wrapperArr.length - 1;
			modal.wrapperArr[lastModalIdx].remove();
			modal.wrapperArr.pop();
			//return closed function
			if(_obj.closed) return _obj.closed();
		},

		setPosition: function($target) {
			var _position = this.options.position;
			var x = _position[0];
			var y = _position[1];
			var tw = -($target.width() / 2);
			var th = -($target.outerHeight() / 2);

			switch(x) {
				case 'left':
					switch(y) {
					case 'top': //[left,top]
					$target.css({ left: '0%', top: '0%' });
					break;

					case 'center': //[left,center]
					$target.css({ left: '0', top: '50%'});
					$target.css('marginTop', th);
					break;

					case 'bottom': //[left,bottom]
					$target.css({ left: '0%', bottom: '0%', top:'auto' });
					break;
				}
				break;

				case 'center':
					switch(y) {
					case 'top': //[center,top]
					$target.css({ left: '50%', top: '0%' });
					$target.css('marginLeft', tw);
					break;

					case 'center': //[center,center]
					$target.css({ left: '50%', top: '50%' });
					$target.css('marginLeft', tw);
					if(gtris.util.browser.name === 'ie') {
						$target.css('marginTop', th);
					}else{
						$target.css('transform', 'translateY(-50%)');
					}
					break;

					case 'bottom': //[center,bottom]
					$target.css({ left: '50%', bottom: '0%', top:'auto' });
					$target.css('marginLeft', tw);
					break;
				}
				break;

				case 'right':
					switch(y) {
					case 'top': //[right,top]
					$target.css({ right: '0', left: 'auto', top: '0' });
					break;

					case 'center': //[right,center]
					$target.css({ right: '0', left: 'auto', top: '50%'});
					$target.css('marginTop', th);
					break;

					case 'bottom': //[right,bottom]
					$target.css({ right: '0', left: 'auto', top:'auto', bottom: '0' });
					break;
				}
				break;
			}
		}
	};
    gtris.ui.modal = modal;
})(window.gtris);
