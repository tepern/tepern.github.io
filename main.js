$(function(){
    reviewSlider();
    callRequestSubmit();
});
function reviewSlider() {
    if($('.review').length >0) {
        $('.review').slick({
            slidesToShow: 3,
            infinity: true,
            arrows: true,
            dots: false,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }, 
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '200px'
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '65px'
                    }
                }
            ]
        });
    }
}


function callRequestSubmit() {
    $('.call-request-form').on("submit", function(){
        var el = $(this);
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: $(this).serialize() + '&web_form_submit=' + el.find('button[type="submit"]').val(),
            success: function (data)
            {
                $('.call-request-form-content').addClass('call-request-form-content_success');
                $('.call-request-form-success').addClass('call-request-form-success_show');

                el[0].reset();
            }
        });
        return false;
    });
}

function cartSubmit() {
    $('.cart-form').on("submit", function(){
        var el = $(this);
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: $(this).serialize() + '&web_form_submit=' + el.find('button[type="submit"]').val(),
            success: function (data)
            {
                $('.call-request-form-content').addClass('call-request-form-content_success');
                $('.call-request-form-success').addClass('call-request-form-success_show');

                el[0].reset();
            }
        });
        return false;
    });
}
 /*------------------------------------Modal-----------------------------------------------*/
$('.call-request__btn_success').on('click',function(){
    $('.call-request-form-success').removeClass('call-request-form-success_show');
    $('.call-request').removeClass('call-request_show');
    $('.call-request-form-content').removeClass('call-request-form-content_success');
})

$('.header__btn').on('click',function() {
    $(".header-catalog").addClass("header-catalog_open");
});

$('.header-mobile__btn').on('click',function() {
    $(".header-catalog").addClass("header-catalog_open");
});

$('.header-catalog__close').on('click',function() {
    $(".header-catalog").removeClass("header-catalog_open");
});

$('.catalog-filter').on('click',function() {
    $(this).find('.catalog-filter-group').toggleClass('catalog-filter-group_open');
    $(this).siblings().find('.catalog-filter-group').removeClass('catalog-filter-group_open');
});

$('.catalog-filter__reset').on('click',function() {
     $('.catalog-filter__checkbox:checked').prop('checked', false);
});

$('.popup__link_close').on('click',function() {
    $(this).parent('.popup').removeClass('popup_open');
});

$('.product-btn').on('click',function() {
    $('.popup').addClass('popup_open');
})

$('.header__link').on('click',function() {
    $('.call-request').addClass('call-request_show');
});

$('.header-mobile__link').on('click',function() {
    $('.call-request').addClass('call-request_show');
});

$('.footer__link').on('click',function() {
    $('.header__link').trigger('click');

    $('html, body').animate({scrollTop: 0},500);
    return false;
   
});

$('.call-request__close').on('click',function() {
    $('.call-request-form-success').removeClass('call-request-form-success_show');
    $('.call-request').removeClass('call-request_show');
    $('.call-request-form-content').removeClass('call-request-form-content_success');
});

/*--------------------------------------Amount--------------------------------------*/

$(".cart-amount__decrease").on('click',function(){
    var $input = $(this).parent('.cart-amount').find(".cart-amount__input");
    var count = parseInt($input.val()) - 1;
    if(count < 1) {
        count = 1;
    } else if(count !== count) {
        count = 1;
    }
    //count = (count < 1) && (count !== count) ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});

$(".cart-amount__increase").on('click',function(){
    var $input = $(this).parent('.cart-amount').find(".cart-amount__input");
    var count = parseInt($input.val()) + 1;
    count = count !== count ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});

/*------------------------------------------Time-----------------------------------*/
$('.date__label_time').on('click',function() {
    $(this).addClass('date__label_time_remove'); 
    $('#time').addClass('order__date_active');
});

$('.date__label_date').on('click',function() {
    $(this).addClass('date__label_date_remove'); 
    $('#date').addClass('order__date_active');
})

/*-----------------------------------Delivery-------------------------------------*/
$('.order-select__label').on('click',function() {
    var shop = $(this).siblings('.order-select__input').val();
    $('.order__select').text(shop);
    $('.order-select').removeClass('order-select_open');
});

$('.order__select').on('click',function() {
    $(this).siblings('.order-select').toggleClass('order-select_open');     
});

$('input[name=delivery]').on('change',function() {
    var delivery = $(this).attr("id");
    var pickup = $('.order__item_method_pickup');
    var courier = $('.order__item_method_delivery');
    var deliveryBlock = $('.order-content');

    if(delivery == 'delivery1') {

        if(pickup.hasClass('hidden')){
            pickup.removeClass('hidden');
            courier.addClass('hidden');
        };

        if(!(deliveryBlock.hasClass('order-content_pickup'))) {
            deliveryBlock.addClass('order-content_pickup');
        }

    } else if(delivery == 'delivery2') {

        if(courier.hasClass('hidden')){
            courier.removeClass('hidden');
            pickup.addClass('hidden');
        }

        if(deliveryBlock.hasClass('order-content_pickup')) {
            deliveryBlock.removeClass('order-content_pickup');
        }
    }
});
