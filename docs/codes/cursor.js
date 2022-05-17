$(function(){
    var cursor=$("#cursor");
    var stalker=$("#stalker");

    $(document).on("mousemove",function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.css({
            "opacity":"1",
            "top":y+"px",
            "left":x+"px"
        });
        setTimeout(function(){
            stalker.css({
                "opacity":"1",
                "top":y+"px",
                "left":x+"px"
            });
        },40);
    });

    $("a").on({
        "mouseenter": function() {
            cursor.addClass("active");
            stalker.addClass("active");
        },
        "mouseleave": function() {
            cursor.removeClass("active");
            stalker.removeClass("active");
        }
    });
    $(".cp_qa label").on({
        "mouseenter": function() {
            cursor.addClass("active");
            stalker.addClass("active");
        },
        "mouseleave": function() {
            cursor.removeClass("active");
            stalker.removeClass("active");
        }
    });
});