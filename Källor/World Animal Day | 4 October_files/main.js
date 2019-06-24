$(document).ready(function () {
    checkHasSubMenu();
    mobileMenu();
    footerAccording();
    mapClick();
    countDown();
    carosal($('.happenings-around-the-world'));
    banner('events', $('.main .events .evetnt-slider'), $('.main .events .evetnt-slider ul'), 'li', 'scrollHorz', 3000, 500);
    mainbanner('main', $('.main-visual .main-banner'), $('.main-visual .main-banner ul'), 'li', 'scrollHorz', 3000, 900);
    events($('.events-location-carousel'));
    bottomImageGroup();
    uniformMaster($('.main select'));
    uniformMaster($('.main input[type="radio"]'));
    uniformMaster($('.main input[type="file"]'));
    uniformMaster($('.main input[type="checkbox"]'));
    addLastClass();
    pagingDisabledFix();
    colorBoxesAddColors();
    tableStyle();
    flotedTwoBoxes();
    fourColumnsGrid();
    tab();
    vimeoPlayer($('.main .video-wrapper'));
    //donationClick(); 6/18/2018 Duminda removed due to not functioning click event of "donate to help a animal" in news page
    addDatePicker();
    fileUploadTextChange();
    accordion();
    lobbyingAppeal();
    duplicateElementPetitions();
    formValidation();
    preventDefaultEL($('.main .poll-stac .choice .stac-wrapper a.count'));
    $('.main .events .map img').mapster({
        fillOpacity: 1,
        fillColor: "188d6d",
        stroke: false,
        isSelectable: true,
        singleSelect: true
    });
    $('.page-main-heading').appendTo('.main-container');
    googleTranslateElementInit();
//    $('.nav-wrapper .wrapper .main-menu-big ul li').on('click', '.main-menu-big', previewCatSelect);
//    $('.WTT,.LTT,.MTT').css({
//        position: 'absolute'
//    }).hide()
//    $('area').each(function(i) {
//        $('area').eq(i).bind('mouseover', function(e) {
//            $('.WTT,.LTT,.MTT').eq(i).css({
//                top: e.pageY,
//                left: e.pageX
//            }).show()
//        })
//        $('area').eq(i).bind('mouseout', function() {
//            $('.WTT,.LTT,.MTT').hide()
//        })
//    })

});
function checkHasSubMenu() {
    $('.outer-menu > li').each(function () {
        $(this).has('ul').addClass('has-sub-menu');
    });
    $('.outer-menu > li.has-sub-menu').mouseenter(function () {
        $(this).children('ul').addClass('show-menu');
        $(this).addClass('sub-menu-show');
    });
    $('.outer-menu > li.has-sub-menu').mouseleave(function () {
        $(this).children('ul').removeClass('show-menu');
        $(this).removeClass('sub-menu-show');
    });
}

function mobileMenu() {
    var menu;
    menu = $('.outer-menu');
    $('.mobiile-menu-icon').click(function (evt) {
        evt.preventDefault();
        if (menu.hasClass('active')) {
            menu.removeClass('active');
        } else {
            menu.addClass('active');
        }
    });
}

function footerAccording() {
    $('.footer-col h2').append('<span class="mobi"></span>');
    $('.footer-col:first').addClass('active');
    $('.footer-col h2').click(function (evt) {
        evt.preventDefault();
        if (!$(this).parents('.footer-col').hasClass('active')) {
            $('.footer-col').removeClass('active');
            $(this).parents('.footer-col').addClass('active');
        } else {
            $(this).parents('.footer-col').removeClass('active');
        }
    });
}

function googleTranslateElementInit() {
    try {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');

    } catch (e) {
    }
}

function countDown() {
    var austDay;
    austDay = new Date();
    
//    var dd = austDay.getDate();
//    var mm = austDay.getMonth() + 1;
    var yyyy = austDay.getFullYear();
  
    
//    if(yyyy+'/'+mm+'/'+dd >= yyyy+'/10/4'){
//        yyyy = yyyy+1;
//    }

    var animalDay = + new Date(yyyy+'/10/4');
    var today = + new Date();
    
    if(today > animalDay){
        yyyy = yyyy+1;
    }
    austDay = new Date(yyyy, 10 - 1,4);
    
    
    $('#defaultCountdown').countdown({
        until: austDay,
        padZeroes: true
    });
}

function carosal(jcarousel) {
    $('.happenings-around-the-world').parents('.jcarousel-wrapper').append('<a class="jcarousel-control-next" href="#"></a><a class="jcarousel-control-prev" href="#"></a>');
    jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.width();
                if (width >= 939) {
                    width = width / 3;
                } else if (width >= 720) {
                    width = width / 5;
                } else if (width >= 480) {
                    width = width / 3;
                }
                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                transitions: Modernizr.csstransitions ? {
                    transforms: Modernizr.csstransforms,
                    transforms3d: Modernizr.csstransforms3d,
                    easing: 'ease'
                } : false
            });
    $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=3'
            });
    $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=3'
            });
    $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .on('click', function (e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 3,
                item: function (page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
}

function banner(bannerControl, banner, bannerItem, slideItem, scrollHorz, timeout, speed) {
    var bannerControler;
    if ((bannerItem.children(slideItem).length > 1) && ($().cycle !== 'undefined ')) {
        bannerControler = '<a class="' + bannerControl + '-next cycle-next" href="#">Next >></a><a href="#" class="' + bannerControl + '-prev cycle-prev"><< Prev</a><p class="' + bannerControl + '-cycle-pager banner-cycle-pager"></p>';
        banner.append(bannerControler);
        bannerItem.cycle({
            fx: scrollHorz,
            log: false,
            swipe: true,
            slides: '>' + slideItem,
            delay: 3000,
            timeout: timeout,
            speed: speed,
            next: '.' + bannerControl + '-next',
            prev: '.' + bannerControl + '-prev',
            pager: '.' + bannerControl + '-cycle-pager'
        });
        bannerItem.css('z-index', '1');
        $('.banner-cycle-pager span').text('');
        $('.cycle-next').text('');
        $('.cycle-prev').text('');
    }
}

function events(jcarousel) {
    $('.events-location-carousel').parents('.jcarousel-wrapper').append('<a class="events-location-carousel-control-next" href="#"></a><a class="events-location-carousel-control-prev" href="#"></a>');
    jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.width();
                if (width >= 939) {
                    width = width / 3;
                } else if (width >= 720) {
                    width = width / 5;
                } else if (width >= 480) {
                    width = width / 3;
                }
                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular',
                transitions: Modernizr.csstransitions ? {
                    transforms: Modernizr.csstransforms,
                    transforms3d: Modernizr.csstransforms3d,
                    easing: 'ease'
                } : false
            });
    $('.events-location-carousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=3'
            });
    $('.events-location-carousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=3'
            });
    $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .on('click', function (e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 3,
                item: function (page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
}

function bottomImageGroup() {
    $('.bottom-image-group li:first').addClass('first');
    $('.bottom-image-group li:last').addClass('last');
}

function uniformMaster(el) {
    el.uniform();
}

function rating() {
    var hoverIndex, myRatingClas, ratingEl;
    myRatingClas = 'my-rating';
    ratingEl = $('.rating p span');
    $('.rating').each(function () {
        ratingEl.hover(function () {
            hoverIndex = $(this).index() + 1;
            ratingEl.removeClass(myRatingClas);
            $('.rating p span:lt(' + hoverIndex + ')').addClass(myRatingClas);
        });
        ratingEl.mouseout(function () {
            ratingEl.removeClass(myRatingClas);
        });
        ratingEl.click(function (evt) {
            evt.preventDefault();
        });
    });
}

function addLastClass() {
    $('.event-listing > ul > li:last').addClass('last');
}

function pagingDisabledFix() {
    if ($('.paging').length) {
        $('.paging span.prev.disabled').append('<a> < prev</a>');
        $('.paging span.next.disabled').append('<a> next > </a>');
    }
}

function colorBoxesAddColors() {
    if ($('.color-boxes-wrapper').length > 0) {
        $('.color-boxes-wrapper .color-box:even').addClass('light-green-box');
        $('.color-boxes-wrapper .color-box:odd').addClass('ligtBlue-background');
    }
}

function tableStyle() {
    $('.main table').each(function () {
        $(this).find('tr:nth-child(even)').addClass('gray-background');
        $(this).find('th:last').addClass('last');
    });
}

function flotedTwoBoxes() {
    if ($('.floted-tow-boxes').length > 0) {
        $('.floted-tow-boxes').each(function () {
            $(this).children('.floted-tow-boxes > div.pull-left').last().addClass('last');
        });
    }
}

function fourColumnsGrid() {
    if ($('.main .four-columns-grid').length > 0) {
        $('.main .four-columns-grid').each(function () {
            $(this).children('.pull-left:nth-child(4n)').addClass('last');
            $(this).children('.pull-left:nth-child(4n + 1)').addClass('clear');
        });
    }
}

function tab() {
    if ($('.tab-wrapper').length > 0) {
        var tabHeading, tabMenuHTML, tabID, tabElHTML, tabActiveSectionID, windowHash, windowLoadAHref, newID, oldID;
        windowHash = window.location.hash;
        tabMenuHTML = '<ul class="ul-list-normalize tab-heading-wrapper"></ul>';
        $('.tab-wrapper').prepend(tabMenuHTML);
        $('.tab-wrapper > section').each(function () {
            tabHeading = $(this).children('h3.tab-heding').text();
            tabID = replaceSpace(tabHeading);
            $(this).attr('id', tabID);
            tabElHTML = '<li><a href="#' + tabID + '" title="' + tabHeading + '">' + tabHeading + '</a></li>';
            $('.tab-wrapper .tab-heading-wrapper').append(tabElHTML);
        });
        $('.tab-wrapper > section').hide();
        if (windowHash !== '') {
            $(windowHash).fadeIn();
            $('.tab-wrapper .tab-heading-wrapper > li a').each(function () {
                windowLoadAHref = $(this).attr('href');
                if (windowHash === windowLoadAHref) {
                    $(this).parent('li').addClass('active');
                }
            });
        } else {
            $('.tab-wrapper .tab-heading-wrapper > li:first').addClass('active');
            $('.tab-wrapper > section:first').fadeIn();
        }
        $('.tab-wrapper .tab-heading-wrapper > li a').click(function (evt) {
            evt.preventDefault();
            tabActiveSectionID = $(this).attr('href');
            newID = CleanIDHash(tabActiveSectionID) + 'a';
            $(tabActiveSectionID).attr('id', newID);
            location.hash = tabActiveSectionID;
            oldID = CleanIDHash(tabActiveSectionID);
            $('#' + newID).attr('id', oldID);
            $('.tab-wrapper .tab-heading-wrapper > li').removeClass('active');
            $(this).parent('li').addClass('active');
            $('.tab-wrapper > section').hide();
            $(tabActiveSectionID).fadeIn();
        });
    }
}

function replaceSpace(text) {
    text = text.split(' ').join('_');
    return text;
}

function CleanIDHash(id) {
    id = id.substr(1);
    return id;
}

function vimeoPlayer(el) {
    if (el.length > 0) {
        var vimeoPlayer, videoURL;
        el.each(function () {
            videoURL = $(this).attr('data-vimeo');
            vimeoPlayer = '<iframe src="' + videoURL + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            $(this).append(vimeoPlayer);
        });
    }
}

function donationClick() {
//    $('.main-container .second-menu .outer-menu li.last a').click(function (evt) {
//        evt.preventDefault();
//        $('.donate-now-wrapper .donate-now-button').trigger('click');
//    });
    $('.main aside .aside-banner.for-donate').click(function (evt) {
        evt.preventDefault();
        $('.donate-now-wrapper .donate-now-button').trigger('click');
    });
}

function addDatePicker() {
    $('.main input.date').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        yearRange: "-100:+0"
    });
    $('.main input.birth-day').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        yearRange: "-100:+0",
        minDate: "-100Y",
        maxDate: "-1Y",
        defaultDate: "-45Y"
    });
    $(".from").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        yearRange: "-10:+10",
        onClose: function (selectedDate) {
            $(".to").datepicker("option", "minDate", selectedDate);
        }
    });
    $(".to").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        yearRange: "-10:+10",
        onClose: function (selectedDate) {
            $(".from").datepicker("option", "maxDate", selectedDate);
        }
    });
    $('.decade-range').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
        yearRange: "-0:+10"       
    });
}

function fileUploadTextChange() {
    $('.main .uploader span.action').text('Browse');
}

function accordion() {
    if ($('.accordion-wrapper').length > 0) {
        var height;
        $('.accordion-wrapper .accordion-heading').append('<span></span>');
        $('.accordion-wrapper .accordion-item').hide();
        $('.accordion-wrapper .accordion-heading').click(function (evt) {
            evt.preventDefault();
            if (!$(this).hasClass('active')) {
                $('.accordion-wrapper .accordion-heading').removeClass('active');
                $('.accordion-wrapper .accordion-item').slideUp();
                height = $(this).height();
                $(this).addClass('active').siblings('.accordion-wrapper .accordion-item').slideDown('slow', function () {
                    $('html, body').animate({scrollTop: $(this).offset().top - height * 2}, 500);
                });
            } else {
                $(this).removeClass('active').siblings('.accordion-wrapper .accordion-item').slideUp('slow', function () {
                    $('html, body').animate({scrollTop: $(this).offset().top - height * 2}, 500);
                });
            }
        });
    }
}

function fileUploadTextChange() {
    $('.main .uploader span.action').text('Browse');
}

function accordion() {
    if ($('.accordion-wrapper').length > 0) {
        var height;
        $('.accordion-wrapper .accordion-heading').append('<span></span>');
        $('.accordion-wrapper .accordion-item').hide();
        $('.accordion-wrapper .accordion-heading').click(function (evt) {
            evt.preventDefault();
            if (!$(this).hasClass('active')) {
                $('.accordion-wrapper .accordion-heading').removeClass('active');
                $('.accordion-wrapper .accordion-item').slideUp();
                height = $(this).height();
                $(this).addClass('active').siblings('.accordion-wrapper .accordion-item').slideDown('slow', function () {
                    $('html, body').animate({scrollTop: $(this).offset().top - height * 2}, 500);
                });
            } else {
                $(this).removeClass('active').siblings('.accordion-wrapper .accordion-item').slideUp('slow', function () {
                    $('html, body').animate({scrollTop: $(this).offset().top - height * 2}, 500);
                });
            }
        });
    }
}

function duplicateElementPetitions() {
    var nameID, name, HTML, pallHTML, callToActionsName, callToActionsNameID, callToActionsHTML;
    if ($('span.petitions-add-url').length) {
        name = $('.related-links-item-wrapper .related-links-item:last .form-row:first input').attr('name');
        nameID = getLastELSplit(name, ']', 2);
        nameID = getLastELSplit(nameID, '[', 1);
        $('.main .form-row label.related-link span.petitions-add-url').click(function (evt) {
            evt.preventDefault();
            nameID = ++nameID;
            HTML = '<div class="related-links-item"><div class="form-row"><input type="text" name="data[Petition][LinkType][' + nameID + ']"></div><div class="form-row"><input type="text" name="data[Petition][Link][' + nameID + ']"></div></div>';
            $('.related-links-item-wrapper').append(HTML);
        });
    }

    if ($('.main .form-row-wrapper.related-polls-add').length) {
        var i = $('.main .form-row-wrapper.related-polls-add .form-row select').length;
        ;
        pallHTML = $('.main .form-row-wrapper.related-polls-add .select .selector select').html()
        $('.main .form-row-wrapper.related-polls-add label.related-link span').click(function (evt) {
            evt.preventDefault();
            i = i + 1;
            console.log(pallHTML);
            $('.main .form-row-wrapper.related-polls-add .related-polls-add-clone').append('<div class="form-row"><div class="input select"><select name="data[Petition][Poll][' + i + ']" id="Poll">' + pallHTML + '</select></div></div>');
            $('.main .form-row-wrapper.related-polls-add .select > span').remove();
            uniformMaster($('.main select'));

        });
    }

    if ($('.call-to-actions-clone-clickEl span').length) {
        callToActionsName = $('.call-to-actions-clone .form-row:last input').attr('name');
        callToActionsNameID = getLastELSplit(callToActionsName, ']', 2);
        callToActionsNameID = getLastELSplit(callToActionsNameID, '[', 1);
        $('.call-to-actions-clone-clickEl span').click(function (evt) {
            evt.preventDefault();
            callToActionsNameID = ++callToActionsNameID;
            callToActionsHTML = '<div class="related-links-item"><div class="form-row"><input type="text" name="data[CallToAction][LinkType][' + callToActionsNameID + ']"></div><div class="form-row"><input type="text" name="data[CallToAction][Link][' + callToActionsNameID + ']"></div></div>';
            $('.call-to-actions-clone').append(callToActionsHTML);
        });
    }
}

function getLastELSplit(str, spliter, lastPlace) {
    var pieces, res;
    pieces = str.split(spliter);
    res = pieces[pieces.length - lastPlace];
    return res;
}

function lobbyingAppeal() {
    var url;
    $('.color-boxes-wrapper.pop-up a').click(function (evt) {
        evt.preventDefault();
        url = $(this).attr('href');
        $('.main').append('<div class="lobbying-appeal-list-main-wrapper clearfix"><div class="wrapper clearfix"><div class="lobbying-appeal-list clearfix"></div></div></div><div class="overlay"></div>');
        $('.lobbying-appeal-list').load(url + '.event-listing .color-boxes-wrapper', function () {
            colorBoxesAddColors();
            $('.lobbying-appeal-list .color-boxes-wrapper').css('max-height', $('.main .content-area').height() - 50);
            $('.lobbying-appeal-list').append('<span class="close"></span>');
            $('.lobbying-appeal-list span.close ').click(function (evt) {
                evt.preventDefault();
                lobbyingAppealClose();
            });
        });
    });
}

function lobbyingAppealClose() {
    $('.main .overlay').remove();
    $('.lobbying-appeal-list-main-wrapper').remove();
}

function preventDefaultEL(el) {
    el.click(function (evt) {
        evt.preventDefault();
    });
}

function mapClick() {
    var continent;
    $('#Map area').click(function (evt) {
        evt.preventDefault();
        continent = $(this).attr('href');
        $('.events-location').load(continent, function () {
            $("#events-location").focus();
        });
        $('html, body').animate({scrollTop: $('#events-location').offset().top}, 500);
    });
}

function formValidation() {
   
    $.validator.addMethod('email', function (value, element) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }, $.validator.format('Please enter a valid email address.'));

    // $.validator.addMethod("youtube", function (youtub, element) {
    // youtube = youtube.replace(/http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/, "");
    // return this.optional(element)
    //   var youtube=/http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/
    //       youtube.test(youtube);
    // }, $.validator.format("Please enter a valid YouTube link."));

	$.validator.addMethod('filesize', function (value, element, param) {
		var mb = element.files[0].size / 1048576 // convert to MB
	
		return this.optional(element) || (mb <= param)
	}, 'File size must be less than {0}MB');
	
    $.validator.addMethod("phone", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/(?:[0-9] ?){6,14}[0-9]$/);
    }, "Invalid phone number");

    $.validator.addMethod("description", function (html_des, element) {
        html_des = html_des.replace(/\s+/g, "");
        return html_des.length > 40;
    }, "This field is required.");
    
    $('form').each(function () {
        $(this).validate();
    });
    $.validator.addClassRules({
        required: {
            required: true
        },
        name: {
            minlength: 2
        },
        text_areas: {
            maxlength: 300
        },
        email: {
            email: true
        },
        password: {
            minlength: 5
        },
        phone: {
            phone: true
        },
        confirm_password: {
            equalTo: ".password"
        },
        title: {
            maxlength: 200
        },
        description: {
            required: true,
            description:true
        },
        organiser_name: {
            maxlength: 100
        },
        plege: {
            maxlength: 45
        },
        uploader: {
            required: true,
            accept: "image/jpg,image/jpeg,image/png,image/gif"
        },
		mbthree: {
			filesize: 3
		}
        // youtube:{
        //    youtube: true     
        // }
    });
    $('.main .form-row .required').each(function () {
        $(this).siblings('label').append('<span>*</span>');
    });
    $('.main .form-row select.required').each(function () {
        $(this).parent('.selector').siblings('label').append('<span>*</span>');
    });
}

function mainbanner(bannerControl, banner, bannerItem, slideItem, scrollHorz, timeout, speed) {
    var bannerControler;
    if ((bannerItem.children(slideItem).length > 1) && ($().cycle !== 'undefined ')) {
        bannerControler = '<a class="' + bannerControl + '-next cycle-next" href="#">Next >></a><a href="#" class="' + bannerControl + '-prev cycle-prev"><< Prev</a><p class="' + bannerControl + '-cycle-pager banner-cycle-pager"></p>';
        banner.append(bannerControler);
        bannerItem.cycle({
            fx: scrollHorz,
            log: false,
            swipe: true,
            slides: '>' + slideItem,
            delay: 3000,
            timeout: timeout,
            speed: speed,
            next: '.' + bannerControl + '-next',
            prev: '.' + bannerControl + '-prev',
            pager: '.' + bannerControl + '-cycle-pager'
        });
        bannerItem.css('z-index', '1');
        $('.banner-cycle-pager span').text('');
        $('.cycle-next').text('');
        $('.cycle-prev').text('');
    }
}

//function previewCatSelect(e) {
//    e.stopPropagation();
//    
//    $(this).addClass('active');
//    $(this).siblings('li').removeClass('active');
//      console.log('aaa');
//
////    if ($('.active').length > 0) { 
////        $('.category_items_action_buttons').show();
////    } else {
////        $('.category_items_action_buttons').hide();
////    }
//}