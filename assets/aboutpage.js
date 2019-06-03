

$('.header2').on('click', function(){
  $('.blurb').css('z-index', 99)
})
$('.close').on('click', function(){
  $('.blurb').css('z-index', 0)
})

$('.postcard1').on('click', function(){
  $('.postcard1_back1').toggleClass('show')
})
$('.postcard2').on('click', function(){
  $('.postcard1_back2').toggleClass('show')
})
$('.postcard3').on('click', function(){
  $('.postcard1_back3').toggleClass('show')
})
$('.postcard4').on('click', function(){
  $('.postcard1_back4').toggleClass('show')
})

$(".mark1_1").on('click', function scroll_to(tops, left){
  var tops = $(".link4").offset().top;
  // var left = $(".link5").offset().left;
// var tops = $(".link5").top
// var lefts = $(".link5").offset().left
// var topss = Math.round((tops)-(250))
// scroll_to(tops, lefts)

// var topss = tops * 5
  $('.catalogue2').animate({
 scrollTop: 3700 + "%"
  }, 1000);

  $('.link6_3').css("opacity", 1);

console.log(tops)

})

$(".mark2_1").on('click', function(){
// var tops = $(".link1").offset().top
// var topss = tops * 5
  $('.catalogue2').animate({
    scrollTop: 0
  }, 1000);
// console.log(tops)
$('.link1_2').css("opacity", 1);

})

$(".mark3_1").on('click', function(){
// var tops = $(".link1").offset().top
// var topss = tops * 5
  $('.catalogue2').animate({
    scrollTop: 0
  }, 1000);
// console.log(tops)
$('.link3_2').css("opacity", 1);

})

$(document).on('scroll', function(){
$('.link1_2').css("opacity", 0);
$('.link6_3').css("opacity", 0);
$('.link3_2').css("opacity", 0);
})
