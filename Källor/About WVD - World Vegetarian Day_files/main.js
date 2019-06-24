/* ---------------------------------------------------------------------
Global Js
Target Browsers: All
------------------------------------------------------------------------ */

var FX = (function(FX, $) {


    /**
     * Doc Ready
     */
    $(function() {
        FX.Global.init();
        FX.Menu.init();
		FX.SlickSlider.init();
		FX.ImAHuman.init();
    });

     /**
     * Global
     * Small scripts
     */
    FX.Global = {
        init: function()
        {
            var self = this;
            self.globalSetup();
        },

		globalSetup:function(){

			$('.submenu').parent().addClass('has-submenu');

			$(".menu-btn").on('click', function(e) {
				e.preventDefault();
				$( this ).toggleClass('active');
				$( ".nav-primary" ).slideToggle();

			});

			$(".icon-search-btn").on('click', function(e) {
				e.preventDefault();
				$( ".searchbox--form" ).slideToggle();
			});

			$('input').iCheck({
				checkboxClass: 'icheckbox_square-green',
				radioClass: 'iradio_square-green'
			});

			$("input.datefield").keyup(function () {
				this.value = this.value.replace(/[^0-9\.]/g,'');
			});

            // Styled select boxes
            $('select').select2();




    	}
    };// FX. Global End


    $(window).load(function() {

		var height = $(window).innerHeight();
		$(".js-browserheight,.banner,.masthead__banner").innerHeight(height);

		if(height<=800){$('.page-sidebar').addClass('wheight');}

		$('.selectric').click();

    });

	$(window).scroll(function(){

		var fromTopPx = 108;
		var scrolledFromtop = $(window).scrollTop();
		if(scrolledFromtop > fromTopPx){
			$('.fixed-header').addClass('js-fixed');
		}else{
			$('.fixed-header').removeClass('js-fixed');
		}

    });


	$(window).resize(function() {
		var wheight = $(window).height();

		if(wheight<=800){
			$('.page-sidebar').addClass('wheight');
		} else {
			$('.page-sidebar').removeClass('wheight');
		}

	});



    /**
     * Menu Navigation
     * @type {Object}
     */

	FX.Menu = {
		init: function()
		{
            var self = this;
			self.MenuItem();

		},

		MenuItem: function(){

			$('.sub-menu').parent().addClass('has-submenu');
			$('.sub-menu').prev().append('<span class="menu-toggle icon-expand_more">');

			var $menuTrigger = $('.has-submenu > a span');

			$menuTrigger.click(function(e) {
				e.preventDefault();
				var $this = $(this);
				$this.toggleClass('active').parent().next('ul').toggleClass('active');
				$this.parent().toggleClass('active').parent().toggleClass('active');

			});

			$('.menu-toggle').click(function () {
              var $this = $(this),
                  isActive = $this.hasClass('active');
			});

		},

 	};  // FX. Menu End


    /**
     * SlickSlider
     */

	FX.SlickSlider = {
		init: function()
		{
			if($('.banner').length) {
				this.bind();
			}

		},

		bind: function()
		{
			$('.banner').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  dots: true,
			  adaptiveHeight: true,
			  arrows: false,
			  autoplay: true,
			  autoplaySpeed: 5000,
			});

		},

	};  // FX. Slick Slider End

    
    
    /**
     * ImAHuman
     * Hidden Captchas for forms
     * @type {Object}
     */
    FX.ImAHuman = {
        num: "0xFF9481",
        forms: void 0,

        init: function() {
            this.setup()
        },

        setup: function() {
            this.forms = document.getElementsByTagName("form");
            this.bind();
        },

        bind: function() {
            for (var i = 0; this.forms.length > i; i++) {
                $(this.forms[i]).on("focus click", this.markAsHuman);
            }
        },

        markAsHuman: function() {
            $(this).find('.imahuman, [name="imahuman"]').attr("value", parseInt(FX.ImAHuman.num, 16))
        }
    };

    return FX;
}(FX || {}, jQuery));