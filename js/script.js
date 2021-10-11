
let headerSec = $(".about").offset().top ;


let headerWidth = $(document).innerWidth();



$(window).scroll(function(){
let userScroll = $(window).scrollTop();
console.log(userScroll);
if(headerWidth > 974 && userScroll > headerSec-70){
$("#mynav").removeClass("bg-transparent");
$("#mynav .txt").addClass("text-dark")
$("#mynav .logo").addClass("text-primary");
$("#mynav").addClass("shadow-lg");
$("#mynav").addClass("bg-white");
$(".navList").removeClass("bg-dark");
$("#mybtn").fadeIn(1500);

  
}
else if(userScroll < headerSec-70 && headerWidth > 974) {
        $("#mynav").addClass("bg-transparent");
        $("#mynav .txt").removeClass("text-dark")
        $("#mynav .logo").removeClass("text-primary");
        $("#mynav").removeClass("bg-white");
        $("#mynav").removeClass("shadow-lg");
        $("#mybtn").fadeOut(1500);
        
}

else if(headerWidth<975){
    $("#mynav").removeClass("bg-transparent");
    $(".navList").removeClass("ml-auto");
    if(userScroll < headerSec-70){
        $("#mynav").addClass("bg-transparent");
        $(".navList").addClass("bg-dark");
        $("#mynav .txt").removeClass("text-dark")
        $("#mynav .txt").addClass("text-white")
        $(".navList").addClass("position-relative");
        $(".navList").addClass("w-100");
        $(".navList li").addClass("ml-3");
        $("#mynav .logo").removeClass("text-primary");
        $("#mynav").removeClass("bg-white");
        $("#mynav").removeClass("shadow-lg");
        $("#mybtn").fadeOut(1500);
    
    }
    else {
        
        $("#mynav .txt").addClass("text-dark")
        $("#mynav .logo").addClass("text-primary");
        $("#mynav").addClass("shadow-lg");
        $("#mynav").addClass("bg-white");
        $(".navList").removeClass("bg-dark");
        $(".navList li").addClass("ml-3");
        $("#mybtn").fadeIn(1500);
        


}
}

});

$("#mybtn").click(function(){
 $("html,body").animate({scrollTop:0}, 2000);
});

