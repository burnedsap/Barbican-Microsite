


$('.about').on('click', function(){
$('.close').addClass('slide')
$('.header1').hide()
$('.artwork').addClass('up')
$('.variations').addClass('up')
$('.variations1').addClass('up')
$('.variations').hide(300)
$('.variations1').hide(300)
$('.bodycopy').addClass('up2')

return true

})

$('.close').on('click', function(){
$('.variations1').show(700)
$('.variations').show(700)
$('.variations1').removeClass('up')
$('.variations').removeClass('up')
  $('.header1').show()
  $('.close').removeClass('slide')
  $('.artwork').removeClass('up')
  $('.bodycopy').removeClass('up2')
})
