$("[data-media]").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var videoUrl = $this.attr("data-media");
    var popup = $this.attr("href");
    var $popupIframe = $(popup).find("iframe");
    
    $popupIframe.attr("src", videoUrl);
    
    $this.closest(".page-popup").addClass("show-popup");
    $('body').css('overflow', 'hidden');  //ADD THIS
});

$(".popup").on("click", function(e) {    
    e.preventDefault();
    e.stopPropagation();
    
    var popup = $("[data-media]").attr("href");
    var $popupIframe = $(popup).find("iframe");
    
    $popupIframe.attr("src", '');
    
    $(".page-popup").removeClass("show-popup");
    $('body').css('overflow', 'auto');  //ADD THIS
});

$(".popup > iframe").on("click", function(e) {
    e.stopPropagation();
});