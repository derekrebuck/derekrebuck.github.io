var $el = $("#very-specific-design");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

// $wrapper.resizable({
//   resize: doResize
// });
$(window).resize(doResize);

function doResize() {
  var scale, origin;
  scale = Math.min(
    $wrapper.width() / elWidth,
    $wrapper.height() / elHeight
  );
  
  $el.css({
    transform: "translate(-50%, 0%) " + "scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize();

