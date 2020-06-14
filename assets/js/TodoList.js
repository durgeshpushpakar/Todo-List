$("ul").on("click","li",function(){
  $(this).toggleClass("done");
});
$("ul").on("mouseenter","li",function(){
  $(this).css("cursor","pointer");
});
$("ul").on("click","span.delete",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation(); //Most important line of the project...
});
$("input").on("keypress",function(event){
  if(event.which===13){
    var x=$(this).val();
    $(this).val("");
    $("ul").append("<li><span class=\"delete\"><i class=\"far fa-trash-alt\"></i> </span>" + x + "</li>");
  }
});
$(".fa-plus").on("click",function(){
  $("input").fadeToggle(200,function(){});
})


