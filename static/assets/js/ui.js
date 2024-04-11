/**
 * 최초 생성 : 이성훈 Sung Hoon, Lee
 * email : enaksunamoon@naver.com
 * date : 2022.07.25
 * 수정 : 이정민 Jung Min, Lee
 * 
 * last update : 2024.02.27
 */


var ui = {
	init:function(){
		console.log('== load ui');
		//this.isUA.init();
		this.viewport.init();
		this.nav.init();
		// this.fixedHeader.init();
		//this.fixedFooter.init();
		this.popLayer.init();
		this.checkbox.init();
		this.attach.init();
		this.datePicker.init();
		this.searchExpander.init();
		this.accordion.init();
		this.emailForm.init();
		this.addressForm.init();
		this.bankForm.init();
		this.mobileScroll.init();
		this.pagination.init();
		this.etc.init();
		this.loadingBar.init();
		this.tab.init();
	},
	isUA:{ // 추후 하이브리드를 위해 남겨둔다.
		init:function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				alert('mobile is');
				$('html').removeClass('desktop').addClass('mobile');
				$('#css').attr('href', '../../assets/css/mobile.css');
			} else {
				alert('pc is');
				$('html').removeClass('mobile').addClass('desktop');
				$('#css').attr('href', '../../assets/css/pc.css');
			}

			//console.log('=> init isUA');
		}
	},
	viewport:{
		init:function() {
			//$('body').append('<div id="#size-test" style="position:fixed;top:0;left:0;z-index:1000000 !important;color:red;font-size:12px;">w <span class="ww">px</span> / h <span class="wh"></span>px</div');
			this.device();
			$(window).on('load resize', this.device);

			//console.log('=> init viewport');
		},
		device:function() {
			ww = $(window).width();
			wh =$(window).height();
			$('span.ww').text(ww);
			$('span.wh').text(wh);

			var winWidth =  $(window).width();

			(winWidth > 1024) ? $('html').removeClass('mobile').addClass('desktop') : $('html').removeClass('desktop').addClass('mobile');


		},
	},
	loading: {
		show: function () {
			//var els = '<div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.17 47.95" width="61.16999816894531" height="47.95000076293945"><defs><style>.cls-1{fill:#ce132d;stroke:#ce132d;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#ed7013;stroke:#ed7013;}</style></defs><path class="cls-1 svg-elem-1" d="M291.13,431.16c-1.67-.78-3-1.41-3-2.69,0-1,.78-1.68,2.32-1.68a7.77,7.77,0,0,1,1.51.16,5.05,5.05,0,0,0,.74.08c1.34,0,2.1-.81,2.61-2.33l.21-.62A14.11,14.11,0,0,0,290.2,423c-4.57,0-7,2.92-7,6a5.15,5.15,0,0,0,1.23,3.52,11,11,0,0,0,3.63,2.49c1.88.92,3.58,1.6,3.58,3,0,1.21-1.26,1.9-2.93,1.9a9.14,9.14,0,0,1-4.56-1.47l-1.88,3.53a13,13,0,0,0,6.75,1.73c4.26,0,7.48-2.44,7.48-6.2S293.55,432.33,291.13,431.16Z" transform="translate(-281.63 -396.21)"></path><path class="cls-1 svg-elem-2" d="M307.77,432.9l7.73-9.46H310l-6.15,8.17h-.1v-8.17h-4.53v20.05h.27c2,0,4.29-.91,4.29-4.18v-4.6h.1l6.27,8.53h5.77Z" transform="translate(-281.63 -396.21)"></path><path class="cls-1 svg-elem-3" d="M315.75,402c-1.59.3-4,1.75-3.95,4.31,0,2.33,1.91,3.74,1.91,6.79a5.37,5.37,0,0,1-2.62,4.69c.55-.05,1.16-.08,1.82-.08a15.34,15.34,0,0,1,2.29.14l7.16-8.79A29.52,29.52,0,0,0,315.75,402Z" transform="translate(-281.63 -396.21)"></path><path class="cls-1 svg-elem-4" d="M321.77,425.69c.9-1.4,1-3.64,1.09-5.92.09-2.12.53-3.72,3.37-3.73.63,0,1.23.08,2.32.08a16.79,16.79,0,0,0,8.57-2.39A29.62,29.62,0,0,0,322.36,409c-.4,1.15-3.57,10-3.81,10.68a11.71,11.71,0,0,1,1.28,1.88A21.51,21.51,0,0,1,321.77,425.69Z" transform="translate(-281.63 -396.21)"></path><path class="cls-2 svg-elem-5" d="M306.64,418.49c-.36,0-.54-.24-.59-.66s-1.84-16.8-2.1-19.28c0-.36-.13-1-.13-1.26a.53.53,0,0,1,.54-.58c.85,0,5.47,1.08,10.38,4.52a5.22,5.22,0,0,0-4,4.91c0,2.7,1.94,4.18,2,6.88C312.74,417.42,307.69,418.49,306.64,418.49Z" transform="translate(-281.63 -396.21)"></path><path class="cls-2 svg-elem-6" d="M322.18,426.86a4.27,4.27,0,0,0,.22.5.48.48,0,0,0,.44.27,1,1,0,0,0,.41-.11l17.59-8.17c.33-.16,1-.44,1.15-.56a.54.54,0,0,0,.31-.47.58.58,0,0,0-.09-.3,18.52,18.52,0,0,0-4.15-3.67,18.46,18.46,0,0,1-9.38,2.72c-1.09,0-1.34-.08-2.08-.07-2.18,0-2.73.94-2.81,2.85,0,.36,0,.84,0,1.37C323.69,422.93,323.48,425.28,322.18,426.86Z" transform="translate(-281.63 -396.21)"></path></svg></div>';
			var els = '<div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.17 47.95" width="61.16999816894531" height="47.95000076293945"><defs><style>.cls-1{fill:#B3CF0A;stroke:#B3CF0A;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#B3CF0A;stroke:#fff;}</style></defs><path class="cls-1 svg-elem-1" d="M291.13,431.16c-1.67-.78-3-1.41-3-2.69,0-1,.78-1.68,2.32-1.68a7.77,7.77,0,0,1,1.51.16,5.05,5.05,0,0,0,.74.08c1.34,0,2.1-.81,2.61-2.33l.21-.62A14.11,14.11,0,0,0,290.2,423c-4.57,0-7,2.92-7,6a5.15,5.15,0,0,0,1.23,3.52,11,11,0,0,0,3.63,2.49c1.88.92,3.58,1.6,3.58,3,0,1.21-1.26,1.9-2.93,1.9a9.14,9.14,0,0,1-4.56-1.47l-1.88,3.53a13,13,0,0,0,6.75,1.73c4.26,0,7.48-2.44,7.48-6.2S293.55,432.33,291.13,431.16Z" transform="translate(-281.63 -396.21)"></path><path class="cls-1 svg-elem-2" d="M307.77,432.9l7.73-9.46H310l-6.15,8.17h-.1v-8.17h-4.53v20.05h.27c2,0,4.29-.91,4.29-4.18v-4.6h.1l6.27,8.53h5.77Z" transform="translate(-281.63 -396.21)"></path><path class="cls-1 svg-elem-3" d="M315.75,402c-1.59.3-4,1.75-3.95,4.31,0,2.33,1.91,3.74,1.91,6.79a5.37,5.37,0,0,1-2.62,4.69c.55-.05,1.16-.08,1.82-.08a15.34,15.34,0,0,1,2.29.14l7.16-8.79A29.52,29.52,0,0,0,315.75,402Z" transform="translate(-281.63 -396.21)"></path><path class="cls-1 svg-elem-4" d="M321.77,425.69c.9-1.4,1-3.64,1.09-5.92.09-2.12.53-3.72,3.37-3.73.63,0,1.23.08,2.32.08a16.79,16.79,0,0,0,8.57-2.39A29.62,29.62,0,0,0,322.36,409c-.4,1.15-3.57,10-3.81,10.68a11.71,11.71,0,0,1,1.28,1.88A21.51,21.51,0,0,1,321.77,425.69Z" transform="translate(-281.63 -396.21)"></path><path class="cls-2 svg-elem-5" d="M306.64,418.49c-.36,0-.54-.24-.59-.66s-1.84-16.8-2.1-19.28c0-.36-.13-1-.13-1.26a.53.53,0,0,1,.54-.58c.85,0,5.47,1.08,10.38,4.52a5.22,5.22,0,0,0-4,4.91c0,2.7,1.94,4.18,2,6.88C312.74,417.42,307.69,418.49,306.64,418.49Z" transform="translate(-281.63 -396.21)"></path><path class="cls-2 svg-elem-6" d="M322.18,426.86a4.27,4.27,0,0,0,.22.5.48.48,0,0,0,.44.27,1,1,0,0,0,.41-.11l17.59-8.17c.33-.16,1-.44,1.15-.56a.54.54,0,0,0,.31-.47.58.58,0,0,0-.09-.3,18.52,18.52,0,0,0-4.15-3.67,18.46,18.46,0,0,1-9.38,2.72c-1.09,0-1.34-.08-2.08-.07-2.18,0-2.73.94-2.81,2.85,0,.36,0,.84,0,1.37C323.69,422.93,323.48,425.28,322.18,426.86Z" transform="translate(-281.63 -396.21)"></path></svg></div>';
			$('body').prepend(els);

			var wrapper = $('.loading svg');
			function draw() {
				wrapper.addClass('active');
			}
			setTimeout(draw, 100);
			setInterval(function(){wrapper.toggleClass('active')}, 1800);
		},
		hide: function () {
			$('.loading').remove();
		}
	},
	nav:{ //추후 개인화를 위해 class 'full-nav' 로 기능 분리함
		init:function() {
			this.gnb();
			$(window).on('load resize', this.gnb);

			$('#gnb > ul > li').on({
				mouseenter : function() {
					if($(this).parent().parent().hasClass('full-nav')){
						//full nav function
						$(this).parent().parent().addClass('active');
						$(this).find('a').attr('aria-expanded',true);
						$('.nav-sub__list').css({display:'block'});
					}else{
						//not full nav function
						$('.nav-sub__list').hide();
						$(this).find('a').attr('aria-expanded',true);
						$(this).find('ul').css({display:'block'});
					}					
				},
				mouseleave : function() {
					if($(this).parent().parent().hasClass('full-nav')){
						//full nav function
						$(this).parent().parent().removeClass('active');
						$('.nav-sub__list').hide();
						$('.nav__link').attr('aria-expanded',false);
					}else{
						//not full nav function
						$('.nav-sub__list').hide();
						$(this).find('a').attr('aria-expanded',false);
					}	
				}
			});
			$('#gnb > ul > li').focusin(function() {
				if($(this).parent().parent().hasClass('full-nav')){
					//full nav function
					$(this).parent().parent().addClass('active');
					$('.nav-sub__list').css({display:'block','z-index':1100});
				}else{
					//not full nav function
					$('.nav-sub__list').hide();
					$(this).find('ul').css({display:'block','z-index':1100});
				}
			});
			$('.nav-sub__list li:last-child a').focusout(function(){
				if( $(this).parent().parent().hasClass('full-nav') ){
					//full nav function
					$(this).parent().parent().removeClass('active');
					$('.nav-sub__list').hide();
				}else{
					//not full nav function
					$(this).closest('ul').hide();
					$('.nav__link--active').siblings('.nav-sub__list').css({display:'block'});
				}
			});

			$('.nav__hamburger').off('click').on('click', function(){
				var target = "#" + $(this).attr('aria-owns');
				if ($(this).attr('aria-expanded') == 'false') {
					$(this).attr('aria-expanded', true);
					// $(target).show().focus();
					$(target).fadeIn();
					if ($('html').hasClass('mobile') == true) {
						$('html').addClass('scrolllock');
					}
					$('.navMb__link').each(function(){
						if ($(this).hasClass('nav__link--active')) {
							$(this).attr('aria-expanded', true);
							$(this).next('.navMb-twodepth__list').show();
						}
					});
				} else {
					$(this).attr('aria-expanded', false);
					// $(target).hide();
					$(target).fadeOut();
					if ($('html').hasClass('mobile') == true) {
						$('html').removeClass('scrolllock');
						$('.navMb__link').each(function(){
							if ($(this).hasClass('nav__link--active')) {
								$(this).attr('aria-expanded', true);
								$(this).next('.navMb-twodepth__list').show();
							} else {
								$(this).attr('aria-expanded', false);
								$(this).next('.navMb-twodepth__list').hide();
							}
						});
					}
				}
			});

			$('.mobile .navMb__link').off('click').on('click', function(){
				if ($(this).attr('aria-expanded') == 'false') {
					$(this).attr('aria-expanded', true).next('.navMb-twodepth__list').slideDown();
				} else {
					$(this).attr('aria-expanded', false).next('.navMb-twodepth__list').slideUp();
				}
			});

			//console.log('=> init nav');
		},
		gnb:function() {
			var winWidth =  $(window).width();

			if (winWidth > 1024) {
				$('html').removeClass('scrolllock');
				$('.nav__hamburger').attr('aria-expanded', false);
				$('.navMb__link').attr('aria-expanded', false);
				$('.navMb__link').next('.navMb-twodepth__list').hide();
				$('.nav-mobile').hide();
			}
		},
		/**
		 * [gnb활성화]
		 * ui.nav.act(dep1, dep2)
		 * @param {'string'} 1뎁스 메뉴명
		 * @param {'string'} 2뎁스 메뉴명
		 * or
		 * @param {number} 1뎁스 순번
		 * @param {number} 2뎁스 순번
		 */
		act:function(dep1,dep2) {
			var dep1 = dep1 || 0;
			var dep2 = dep2 || 0;

			if (typeof dep1 ==  'string') {
				$('.nav__list > li > a').each(function(){
					if( $(this).text() == dep1 ){
						$('.nav__list > li > a').removeClass('nav__link--active').removeAttr('aria-current');
						$(this).addClass('nav__link--active').attr('aria-current','page');
					}
				});
				$('.navMb_list > li > a').each(function(){
					if( $(this).text() == dep1 ){
						$('.navMb_list > li > a').removeClass('nav__link--active').attr('aria-expanded','false');
						$(this).addClass('nav__link--active').attr('aria-expanded','true');
					}
				});
			} else {
				$('.nav__list > li > a').removeClass('nav__link--active').removeAttr('aria-current');
				$('.nav__list > li:nth-child('+dep1+') > a').addClass('nav__link--active').attr('aria-current','page');
				$('.navMb_list > li > a').removeClass('nav__link--active').attr('aria-expanded','false');
				$('.navMb_list > li:nth-child('+dep1+') > a').addClass('nav__link--active').attr('aria-expanded','true');
			}

			if (typeof dep2 ==  'string') {
				$('.nav-sub__list > li > a').each(function(){
					if( $(this).text() == dep2 ){
						$('.nav-sub__list > li > a').removeClass('nav-sub__link--active');
						$(this).addClass('nav-sub__link--active');
					}
				});
				$('.nav-navMb-twodepth__list > li > a').each(function(){
					if( $(this).text() == dep2 ){
						$('navMb-twodepth__list > li > a').removeClass('nav-sub__link--active');
						$(this).addClass('nav-sub__link--active');
					}
				});
			}
			else {
				$('.nav-sub__list > li > a').removeClass('nav-sub__link--active');
				$('.nav__list > li:nth-child('+dep1+') .nav-sub__list > li:nth-child('+dep2+') > a').addClass('nav-sub__link--active');
				$('.navMb-twodepth__list> li > a').removeClass('nav-sub__link--active');
				$('.navMb_list > li:nth-child('+dep1+') .navMb-twodepth__list > li:nth-child('+dep2+') > a').addClass('nav-sub__link--active');
			}
		}
	},
	fixedHeader:{ // 추후 헤더 공간을 줄일수 있으므로 나중에 사용
		init:function() {
			$(window).on('load resize scroll', this.headerFix);

			//console.log('=> init fixedHeader');
		},
		headerFix:function() {
			$(window).scroll(function() {
				if ($(window).scrollTop() > 0) {
					ui.lock.using(true);
					$('header').addClass('scroll');
					$('section').addClass('paddingTop');
				} else {
					$ui.lock.using(false);
					$('header').removeClass('scroll');
					$('section').removeClass('paddingTop');
				}
			});
		}
	},
	fixedFooter:{
		init:function() {
			$(window).on('load resize scroll', this.footerFix);
			$(document).ready( this.footerFix );

			//console.log('=> init fixedFooter');
		},
		footerFix:function() {
			var winH = $(window).height();
			var subH = $('.sub').height();
			var mainH = $('main').height();
			var footerH = $('footer').height();
			var headerH = $('header').height();

			// console.log(winH);
			// console.log(subH);
			// console.log(mainH);
			// console.log(footerH);
			// console.log(headerH);

			// (subH + footerH > winH - headerH) ? $('footer').removeClass('fixed') : $('footer').addClass('fixed');
			(mainH > winH) ? $('footer').removeClass('fixed') : $('footer').addClass('fixed');
		}
	},
	lock:{
		sct: 0,
		stat: false,
		using:function(opt) {

			///var lockDiv = " .popLayer, .popConfirm" ;
			if (opt === true && this.stat === false ){
				this.stat = true;
				$('html').addClass('popLock');
				//$(lockDiv).bind('touchmove scroll', function(e){ e.preventDefault() });
			}
			if (opt === false) {
				this.stat = false;
				$('html').removeClass('popLock');
				//$(lockDiv).unbind('touchmove scroll');
			}
		}
	},
	popLayer:{
		init: function() {
			var _this = this;
			$(document).on('click', '.popLayer .btnPopClose', function() {
				var id = $(this).closest('.popLayer').attr('id');
				//console.log(id + ' close');
				_this.close(id);
			});
			$(document).on('click', '.popLayer .pbd', function(e) {
				e.stopPropagation();
			});
			$(window).on('load resize', this.resize);

			//console.log('=> init popLayer');
		},
		openPop:[],
		callbacks:{},
		open:function(id) {
			//console.log(id);
			_this = this;

			if ( $('#' + id).length  <= 0  ) return;

			_this.opt = $.extend({
				ocb: null ,
				ccb: null,
				zIndex: 10000,
			});

			_this.callbacks[id] = {} ;
			_this.callbacks[id].open  = _this.opt.ocb ? _this.opt.ocb : null ;
			_this.callbacks[id].close = _this.opt.ccb ? _this.opt.ccb : null ;

			ui.lock.using(true);

			$('#' + id).css({ zIndex: _this.opt.zindex });
			$('#' + id).fadeIn(100,function() {
				if(_this.callbacks[id].open)  _this.callbacks[id].open();
				if ($('.popLayer').hasClass('on') !== true) {
					$(this).addClass('on');
				}
			}).attr('tabindex','0').focus();
			window.setTimeout(function() {
				_this.resize(id);
			});
		},
		close:function(id, set) {
			_this = this;
			$('#'+id).removeClass('on').fadeOut(150,function() {
				if( !$('.popLayer:visible').length ) ui.lock.using(false);
				try { _this.callbacks[id].close(); } catch (error) { }
			});
		},
		resize:function(id){
			var pctnH =  $('.popLayer:visible').outerHeight() ;
			pctnH = pctnH - ( $('.popLayer:visible .pbd .phd').outerHeight() || 0 );
			$('.popLayer:visible .pbd .pct').css({'max-height': pctnH - 70 });
			//console.log(pctnH)
		}
	},
	checkbox:{
		init:function() {
			this.checkLabel();
			this.checkItem();

			//console.log('=> init checkbox');
		},
		checkLabel:function() {
			$('input[type="checkbox"]').each(function() {
				var checkTextLength = $(this).next('label');

				if (checkTextLength.text() == '') {
					checkTextLength.addClass('hidden');
				}
			});

			$(document).on('click', 'input:checkbox, input:radio', function (e) {
				var inp = $(this);

				if(inp.next().is('label')) {
					var name = inp.next().attr('for');

					if(inp.attr('type') == 'radio') {
						$('input:radio[name=' + name + ']').each(function() {
							$(this).next().removeClass('on');
						});
					}

					if(name) {
						$('input[id=' + name + ']').each(function(index) {
							if($(this).is(':checked')) {
								$(this).next().addClass('on');
							} else {
								$(this).next().removeClass('on');
							}
						});
					}
				}
			});
		},
		checkItem:function() {
			$(document).on('click','input.checkItem', function() {
				var checkBoxLength = $(this).closest('tbody').find('input.checkItem').length;
				var checkedBoxLength = $(this).closest('tbody').find('input.checkItem:checked').length;

				if(checkBoxLength == checkedBoxLength ) {
					$(this).closest('table').find('thead input.checkAll').prop("checked", true);
				} else {
					$(this).closest('table').find('thead input.checkAll').prop("checked", false);
				}
			});

			$(document).on('click','input.checkAll', function() {
				var isCheckedAll = $(this).prop("checked");
				$(this).closest('table').find('tbody input.checkItem').prop('checked', isCheckedAll);
			});
		}
	},
	attach:{
		init:function(){
			$(document).on('change', '[data-ui="attach"].add__attach__file .fileButton .fileInput', function() {
				var fUrl = (this.value).split('\\'),
					fName = fUrl[fUrl.length - 1];
				var locVar = $(this).closest('.add__attach__file').find('.file').length;
				if (!locVar) {
					// console.log("132132");
					$(this).closest('.add__attach__file').addClass('on');
					$(this).closest('.add__attach__file').append(
						'<span class="file">'+
							'<span class="loc"></span>'+
							'<button type="button" class="delete">삭제</button>'+
						'</span>'
					);
				}
				$(this).closest('.add__attach__file').find('.file .loc').text(fName);
			});

			$('.uploadForm').each(function() {
				$(this).find('.add__attach').on('click',function() {
					var currentLeng = $(this).next('.add__attach__list').find('li').length;

					if (currentLeng < 5) {
						$(this).next('.add__attach__list').append(
							'<li>'+
								'<span class="add__attach__file" data-ui="attach">'+
									'<span class="btn__attach">'+
										'<label class="fileButton">파일선택<input type="file" class="fileInput" accept=".jpg, .jpeg, .bmp, .gif, .png, .tif, .pdf, .hwp, .doc, .xlx, .xlsx"></label>'+
									'</span>'+
								'</span>'+
							'</li>');
						currentLeng ++;
					} else {
						alert('※ 첨부파일은 5개만 등록할 수 있습니다.');
					}
				});

				$(document).on('click', '.delete', function() {
					var delLang = $(this).closest('.add__attach__list').find('li').length;

					if (delLang !== 1) {
						$(this).closest('.add__attach__file').removeClass('on');
						$(this).closest('.add__attach__file').find('.fileButton .fileInput').val('');
						$(this).closest('.add__attach__file').find('.file .loc').text('');
						$(this).closest('li').remove();
					} else {
						$(this).closest('.observer').removeClass('on');
						$(this).closest('.add__attach__file').removeClass('on');
						$(this).closest('.add__attach__file').find('.fileButton .fileInput').val('');
						$(this).closest('.add__attach__file').find('.file .loc').text('');
						$(this).closest('.add__attach__file').find('.file').remove();

					}
					delLang --;
				});
				
				// 첨부파일 삭제버튼 관련 이벤트 추가
				$('.delete').on('click', function() {
					$(this).closest('.add__attach__file').find('.exist_file_id').remove();
				});
			});

			// 옵저버상태체크
			var target = $('.add__attach__file');
			target.change(function() {
				$(this).closest('.observer').addClass('on');
			});

			//console.log('=> init attach');
		},
	},
	datePicker:{
		init:function(){
			$('input.datepicker').length && this.using();

			$('input.datepicker').on('click',function(){
				$(this).next('.ui-datepicker-trigger').trigger('click');
			});
			$('input.datepicker').on('focus',function(){
				$(this).blur();
			});
			$('input.datepicker_month').length && this.month();

			//console.log('=> init datePicker');
		},
		using:function(){
			$('input.datepicker').datepicker({
				showOn: 'button',
				changeYear:true ,
				changeMonth:true,
				buttonText: '달력',
				showMonthAfterYear: true,
				dateFormat:'yy-mm-dd',
				yearRange: 'c-20:c+20',
				dayNamesMin: [ '일', '월', '화', '수', '목', '금', '토' ],
				monthNamesShort: [ '1','2','3','4','5','6','7','8','9','10','11','12'],
				beforeShow: function() {
					ui.lock.using(true);
				},
				onChangeMonthYear:function(ddd){
					console.log('달,년  변경');
				},
				onSelect :function(ddd){
					// console.log('선택');
				},
				onClose:function(date){
					console.log(date);
					// console.log(typeof(date))
					ui.lock.using(false);
				}
			});

		},
		month:function(){
			$('input.datepicker_month').datepicker({
				showMonthAfterYear: true,
				dateFormat: 'yy-mm',
				monthNamesShort: [ '1','2','3','4','5','6','7','8','9','10','11','12'],
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
				closeText: '선택',
				currentText: '이달',
				onClose: function(dateText, inst) {
					inst.dpDiv.hide();
					inst.dpDiv.removeClass('month_year_datepicker');
					function isDonePressed(){
						return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
					}
					ui.lock.using(false);
					if (isDonePressed()){
						var month = $('#ui-datepicker-div .ui-datepicker-month :selected').val();
						var year = $('#ui-datepicker-div .ui-datepicker-year :selected').val();
						$(this).datepicker('setDate', new Date(year, month, 1)).trigger('change');

						$('input.datepicker_month').focusout();

						str = parseInt(month);
						month = str + 1;
						month = String(month);

						if (month.length < 2) {
							month = '0'+month;
						}
						console.log(year,month);
					}
				},
				beforeShow : function(datestr, inst) {
					ui.lock.using(true);

					inst.dpDiv.addClass('month_year_datepicker');

					if ((datestr = $(this).val()).length > 0) {
						// console.log(datestr);
						// console.log(datestr.substring(0, 4));
						// console.log(datestr.substring(5, 7) );
						year = datestr.substring(0, 4);
						month = datestr.substring(5, 7);
						$(this).datepicker('option', 'defaultDate', new Date(year,month-1,  1));
						$(this).datepicker('setDate', new Date(year, month-1, 1));
						$(".ui-datepicker-calendar").hide();
					}
				},
				onChangeMonthYear:function(ddd){
					console.log('달,년  변경');
				},

			});

		}
	},
	searchExpander:{
		init:function() {
			$(window).on('load resize', this.expanderOff);
			//$(window).on('load', this.expanderOff);

			$('.searchForm .expander').off('click').on('click',function() {
				$(this).closest('.searchForm').toggleClass('active');
				if ($(this).closest('.searchForm').hasClass('active')) {
					//$('.expander__item').show();
					if( $('.expander__item').hasClass('col') ){
						$('.expander__item').css('display', 'flex');
					}else{
						$('.expander__item').show();
					}
					$(this).addClass('on');
				} else {
					$('.expander__item').hide();
					$(this).removeClass('on');
				}
			});

			$('.expander__btn .reset').off('click').on('click',function() {
				$(this).closest('.searchForm').find('select option:first-child').prop('selected', true);
				$(this).closest('.searchForm').find('input').val('');
			});

			//console.log('=> init searchExpander');
		},
		expanderOff:function() {
			if ($('html').hasClass('mobile') == true) {
				$('.expander__item').hide();
			}else if ($('html').hasClass('desktop') == true) {
				$('.searchForm ').removeClass('active');
				//$('.expander__item').show();
				$('.expander').removeClass('on');
				
				if( $('.expander__item').hasClass('col') ){
					$('.expander__item').css('display', 'flex');
				}else{
					$('.expander__item').show();
				}
			}
		}
	},
	accordion:{
		init:function() {
			$(document).on('click','.accordion a',function() {
				$(this).closest('li').toggleClass('on');
			});

			//console.log('=> init accordion');
		}
	},
	emailForm:{
		init:function() {
			$('.domain__select').each(function() {
				var value = $(this).val();
				var text = $(this).find('option:selected').text();

				$(this).closest('.emailForm').find('.biz__comapany__domain').val(text).attr('readOnly', false);
				if (value == 'choice') {
					$(this).closest('.emailForm').find('.email_domain').val('').attr('readOnly', true);
				} else {
					if (value == 'direct') {
						$(this).closest('.emailForm').find('.email_domain').val('').attr('readOnly', false);
					} else {
						$(this).closest('.emailForm').find('.email_domain').val(text).attr('readOnly', false);
					}
				}

				$(this).change(function() {
					var value = $(this).val();
					var text = $(this).find('option:selected').text();

					if (value == 'choice') {
						$(this).closest('.emailForm').find('.email_domain').val('').attr('readOnly', true);
					} else {
						if (value == 'direct') {
							$(this).closest('.emailForm').find('.email_domain').val('').attr('readOnly', false);
						} else {
							$(this).closest('.emailForm').find('.email_domain').val(text).attr('readOnly', false);
						}
					}
				});
			});

			//console.log('=> init emailForm');
		},
	},
	addressForm:{
		init:function() {
			$(document).on('click', '.address__item', function(){
				var selctedPost = $(this).find('.address__post').text();
				var selctedAddr = $(this).find('.address__detail').text();

				$(this).closest('.address__list').find('li').removeClass('on');
				$(this).addClass('on');

				console.log(selctedPost , selctedAddr);
			});

			$(document).on('click', '.address__select', function(){
				var selectedPost = $('.address__item.on').find('.address__post').text();
				var selectedAddr = $('.address__item.on').find('.address__detail').text();

				if ($('.address__item.on').length !== 0) {
					$('.input_post').val(selectedPost);
					$('.input_addr1').val(selectedAddr);
					$('.input_addr2').val('');
					$('.input_addr2').focus();
				}
			});
		}
	},
	bankForm:{
		init:function() {
			$(document).on('click', '.bank__list li button', function() {
				$('.bank__list li').removeClass('selected');
				$(this).closest('li').addClass('selected');
				console.log($(this).find('span').text());
			});

			$(document).on('click', '.bank__select', function() {
				var bank = $('.bank__list li.selected').text();
				$('.account__bank__number').val(bank);
			});
		}
	},
	mobileScroll:{
		init:function() {
			$('.mb__scroll_info').click(function() {
				$(this).fadeOut(150);
				$('.mb__scroll').addClass('on');
			});

			setTimeout(function() {
				$('.mb__scroll_info').fadeOut(150);
				$('.mb__scroll').addClass('on');
			}, 3000);

			//console.log('=> init mobileScroll');
		},
	},
	pagination:{
		init:function() {
			$(document).on('click', '.pagination__list .pagination__num', function() {
				$(this).closest('.pagination__list').find('.pagination__num').removeClass('active').removeAttr('aria-current', false).removeAttr('title', '');
				$(this).addClass('active').attr('aria-current', true).attr('title', '현재페이지');
			});

			//console.log('=> init pagination');
		},
	},
	etc: {
		init:function() {
			// input clear
			$('.clear__item').keyup(function () {
				if($(this).val()) {
					$('.clear__input').show();
				} else {
					$('.clear__input').hide();
				}
			});
			$('.clear__input').click(function () {
				$(this).closest('.input').find('input').val('');
				$(this).closest('.input').find('input').focus();
				$(this).hide();
			});

			// preview file check
			$('.downloadForm.preview li a:nth-child(1)').each(function(){
					var fileVal = $(this).text();
				console.log(fileVal);

				if( fileVal != "" ){
					var ext = fileVal.split('.').pop().toLowerCase();
					console.log(ext);
					if($.inArray(ext, ['jpg','jpeg','gif','png','pdf']) == -1) {
						$(this).closest('li').find('.file_preview').hide();
					} else {
						$(this).closest('li').find('.file_preview').show();
					}
				}
			});

			// 문자알림받기
			$(document).on('click','input#receiveMessage', function() {
				var isCheckedAll = $(this).prop("checked");
				if ( $(this).prop("checked") == true) {
					$(this).closest('.receiveForm').find('.input input').removeAttr('disabled');
				} else {
					$(this).closest('.receiveForm').find('.input input').attr('disabled', 'disabled').val('');

				}
			});

			//console.log('=> init etc');
		}
	},
	loadingBar : {
		init:function() {
			$(document).ajaxStart(function() {
				var els = '<div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 125" width="70" height="55"><defs><style>.cls-1{fill:#B3CF0A;stroke:#B3CF0A;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#B3CF0A;stroke:#B3CF0A;}</style></defs><path class="cls-1 svg-elem-1" d="M240.52,450.32c-4.53-2.12-8.25-3.83-8.25-7.29,0-2.65,2.12-4.57,6.3-4.57a21.53,21.53,0,0,1,4.1.42,13.34,13.34,0,0,0,2,.21c3.66,0,5.72-2.18,7.09-6.31l.57-1.69A38.21,38.21,0,0,0,238,428.23c-12.38,0-18.92,7.94-18.91,16.18a13.93,13.93,0,0,0,3.34,9.54c2.62,3.05,6.36,5.05,9.86,6.76,5.1,2.5,9.71,4.35,9.71,8.06,0,3.29-3.4,5.16-8,5.16-6.23,0-11.68-3.56-12.37-4l-5.12,9.59c.91.52,7.5,4.7,18.35,4.7,11.55,0,20.3-6.63,20.3-16.83S247.09,453.5,240.52,450.32Z" transform="translate(-215.88 -356.28)"></path><path class="cls-1 svg-elem-2" d="M285.72,455.05l21-25.7H291.74L275,451.53h-.25V429.35H262.47V483.8h.73c5.32,0,11.66-2.47,11.66-11.36v-12.5h.25l17,23.18h15.67Z" transform="translate(-215.88 -356.28)"></path><path class="cls-1 svg-elem-3" d="M307.38,371c-4.34.82-10.76,4.75-10.74,11.71,0,6.31,5.18,10.14,5.2,18.42a14.67,14.67,0,0,1-7.12,12.75c1.5-.14,3.14-.22,4.95-.23a41.48,41.48,0,0,1,6.22.38l19.44-23.86A81,81,0,0,0,307.38,371Z" transform="translate(-215.88 -356.28)"></path><path class="cls-1 svg-elem-4" d="M323.71,435.47c2.45-3.81,2.76-9.88,3-16.07.22-5.77,1.43-10.11,9.15-10.14,1.71,0,3.34.23,6.28.23a45.55,45.55,0,0,0,23.28-6.5,80.65,80.65,0,0,0-40.06-12.78c-1.11,3.12-9.72,27.06-10.37,29a30.91,30.91,0,0,1,3.49,5.1A56.31,56.31,0,0,1,323.71,435.47Z" transform="translate(-215.88 -356.28)"></path><path class="cls-2 svg-elem-5" d="M282.64,415.91c-1,0-1.47-.64-1.6-1.78s-5-45.61-5.72-52.34c-.1-1-.34-2.79-.35-3.43a1.44,1.44,0,0,1,1.47-1.58c2.3,0,14.86,2.93,28.19,12.27-3.84,1.08-10.79,5.08-10.76,13.34,0,7.32,5.27,11.35,5.3,18.69C299.21,413,285.48,415.91,282.64,415.91Z" transform="translate(-215.88 -356.28)"></path><path class="cls-2 svg-elem-6" d="M324.83,438.64a7.72,7.72,0,0,0,.6,1.35,1.31,1.31,0,0,0,1.2.75,2.85,2.85,0,0,0,1.11-.29c1-.48,41.62-19.38,47.74-22.2.89-.43,2.57-1.18,3.13-1.5a1.51,1.51,0,0,0,.84-1.3,1.46,1.46,0,0,0-.24-.79c-.76-1.24-4.69-5.41-11.26-10-5.21,2.88-13.36,7.31-25.47,7.36-3,0-3.64-.19-5.66-.18-5.92,0-7.39,2.55-7.61,7.73,0,1,0,2.3-.11,3.74C328.91,428,328.36,434.37,324.83,438.64Z" transform="translate(-215.88 -356.28)"></path></svg></div>';
				$("body").prepend(els);

				var wrapper = $('.loading svg');
				function draw() {
					wrapper.addClass('active');
				}
				setTimeout(draw, 100);
				setInterval(function(){wrapper.toggleClass('active')}, 1600);
				
			}).ajaxStop(function() {
				$('.loading').remove();
			}); 
		}
	},
	tab : {
		init:function(){
			$(".tab__box > ul.tab__list li a").click(function(e){
				e.preventDefault();
				var currentTab = $(this).parent().index();
				//console.log(currentTab);

				$(this).parent().parent().find("li").removeClass("active");
				$(this).parent().parent().parent().find(".tab__content").removeClass("active");
	
				$(this).parent().parent().find("li").eq(currentTab).addClass("active");
				$(this).parent().parent().parent().find(".tab__content").eq(currentTab).addClass("active");			
			});
		}
	}

}; // ui


$(document).ready(function() {
});


