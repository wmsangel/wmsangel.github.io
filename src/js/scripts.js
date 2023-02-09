$(function (e) {

    // select2
    $('.js-select').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'form__select-dropdown',
        selectionCssClass: 'form__select',
        placeholder: "Выберите тип системы",
        allowClear: true,
        id: '-1',
    });


    // RANGE
    $('.js-range-slider').on('change', function (e) {
        let currentIDrange = $(this).data('range-slider');
        $('.js-range-value[data-range-slider="'+currentIDrange+'"]').html($(this).val())
    })


    // FILE
    $('.js-attach-file').on('change', function(){
        let file = this.files[0];
        console.log(file.name)
        if (file.name) {
            $(this).next().addClass('form__file-wrap--attached');
            $(this).next().find('.js-file-name').html(file.name);
        } else {
            $(this).next().removeClass('form__file-wrap--attached');
        }
    });


    // MOBILE MENU
    $('body')
        .on('click', '.js-mobile-menu-btn', function (e) {
            e.preventDefault();
            $('.js-mobile-menu').toggleClass('is-opened');
            $(this).toggleClass('is-opened')
        })


    // FORM
    $('.js-form').on('submit', function (e) {
        e.preventDefault();
        $('.js-form, .js-form-success').slideToggle()
    })
})