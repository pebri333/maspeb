// js card// 
$(document).ready(function (){
    $(".tab").on("click",function(){
        var categoryId = $(this).data("id");

        $(".tab, .tab-pane").removeClass("active");
        $(this).addClass("active");
        $("#"+categoryId).addClass("active")
    })
})