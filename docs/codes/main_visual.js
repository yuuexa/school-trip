const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".main_visual");

setInterval(() => {
    $target.addClass(CLASSNAME);
    $target.removeClass(CLASSNAME);
});