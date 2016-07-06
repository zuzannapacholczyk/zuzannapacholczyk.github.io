var main = function() {
    $('.gallery_pic').click(function() {
        var imgSrc = $(this).attr('src');
        $('.gallery_pic_zoom_chosen').remove();
        $('.gallery_pic_zoom_content').prepend($('<img>',{class:'gallery_pic_zoom_chosen',src: imgSrc}));
        $('.gallery_pic_zoom').show();
    });

    $('.gallery_pic_zoom_close').click(function() {
        $('.gallery_pic_zoom').hide();
    });

};

$(document).ready(main);