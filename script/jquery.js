$(function(){
   setInterval(function(){
      $(".slider").animate({marginLeft:310},function(){
         $(this).css({marginLeft:310}).find("img:last").after($(this).find("img:first"));
      })
   }, 3000);
});
