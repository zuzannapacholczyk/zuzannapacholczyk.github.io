var main = function() {
    $('.gallery_pic').click(function() {
        var imgSrc = $(this).attr('src');
        $(this).addClass('curr_pic');
        $('.gallery_pic_zoom_chosen').attr("src", imgSrc);
        $('.gallery_pic_zoom').show();
    });

    $('.gallery_pic_zoom_close').click(function() {
        $('.gallery_pic_zoom').hide();
    });
    
    $('.gallery_pic_zoom_prev').click(function() {
        var currPic = $('.curr_pic');
        var prevPic = currPic.prev();
        
        if(prevPic.length == 0) {
            prevPic = $('.gallery_pic').last();
        }
        
        currPic.removeClass('curr_pic');
        prevPic.addClass('curr_pic');
        $('.gallery_pic_zoom_chosen').attr("src", $('.curr_pic').attr('src'));
    });
    
    $('.gallery_pic_zoom_next').click(function() {
        var currPic = $('.curr_pic');
        var nextPic = currPic.next();
        
        if(nextPic.length == 0) {
            nextPic = $('.gallery_pic').first();
        }
        
        currPic.removeClass('curr_pic');
        nextPic.addClass('curr_pic');
        $('.gallery_pic_zoom_chosen').attr("src", $('.curr_pic').attr('src'));
    });

};

$(document).ready(main);