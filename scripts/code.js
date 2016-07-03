$(function($){
    var addToAll = false;
    var gallery = true;
    var titlePosition = 'inside';
    $(addToAll ? 'img' : 'img.gallery_pic_display').each(function(){
        var $this = $(this);
        var title = $this.attr('title');
        var src = $this.attr('src');
        var a = $('<a href="#" class="gallery_pic_display"></a>').attr('href', src).attr('title', title);
        $this.wrap(a);
    });
    if (gallery)
        $('a.gallery_pic_display').attr('rel', 'fancyboxgallery');
    $('a.gallery_pic_display').gallery_pic_display({
        titlePosition: titlePosition
    });
});
$.noConflict();