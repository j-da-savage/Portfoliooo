(function ($, window, undefined) {
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 100, // In pixels per second
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);

		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 800), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 800), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 800), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) *800), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				move.right();
			}
			if (settings.vertical) {
				move.down();
			}

      // Make it responsive
      $(window).resize( function() {
        getSizes();
      });
		});
	};
})(jQuery, window);

var jannah = document.getElementById("jannah");
var description = document.getElementById("description");



$("description").hide();

// jannah.addEventListener('mouseclick' , () => {
// 	description.
// });

$(document).ready( function() {

	$('.marquee1').marqueeify({
		speed: 500,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.marquee .logo').css('fill', newColor);
		}
	});

  $('.marquee2').marqueeify({
    speed: 300,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.marquee2 .logo').css('fill', newColor);
    }
  });

	// $('.marquee2').marqueeify({
  //   speed: 900,
  //   bumpEdge: function () {
  //     var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
  //     $('.marquee2 .logo').css('fill', newColor);
  //   }
  // });

  $('.mask').marqueeify({
		speed: 550,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.mask .logo').css('fill', newColor);
		}
	});

  $('.mask2').marqueeify({
    speed: 400,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.mask2 .logo').css('fill', newColor);
    }
  });

  $('.cool').marqueeify({
		speed: 600,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.cool .logo').css('fill', newColor);
		}
	});

  $('.cool2').marqueeify({
    speed: 1000,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.cool2 .logo').css('fill', newColor);
    }
  });

  $('.a').marqueeify({
    speed: 1500,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.a .logo').css('fill', newColor);
    }
  });

  $('.b').marqueeify({
    speed: 950,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.b .logo').css('fill', newColor);
    }
  });

  $('.c').marqueeify({
    speed: 820,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.c .logo').css('fill', newColor);
    }
  });

  $('.d').marqueeify({
    speed: 850,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.d .logo').css('fill', newColor);
    }
  });


  $('.e').marqueeify({
    speed: 330,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.e .logo').css('fill', newColor);
    }
  });

  $('.f').marqueeify({
    speed: 450,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.f .logo').css('fill', newColor);
    }
  });


  $('.g').marqueeify({
    speed: 875,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.g .logo').css('fill', newColor);
    }
  });


  $('.h').marqueeify({
    speed: 650,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.h .logo').css('fill', newColor);
    }
  });


  $('.i').marqueeify({
    speed: 1200,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.i .logo').css('fill', newColor);
    }
  });

});
