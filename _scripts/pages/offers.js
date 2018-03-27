const config = {
    btnContact: '.offert-btn-contact',
    selectStarterPack: '#offert-business-starter-pack',
    scrollTo: '.offert-contacts-layout'
}

$(config.btnContact).click(function () {
    const valueToSelect = $(this).data('select');
    $(config.selectStarterPack).val(valueToSelect);
    $('html, body').scrollTop($(config.scrollTo).offset().top);
})
