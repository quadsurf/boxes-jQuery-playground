// console.log("hello world");
$(document).ready(function() {
    console.log("Ready for DOM Manipulation");
    $('#secretBox').css('background-color', 'white').append('<h1>secret box!</h1>');
    $('.row:first div').addClass('boxType3');
    $(".row:last .box:last").fadeOut('slow', 0);
    $(".boxType1").css('background', 'white');
    $("#row2 div:lt(2)").removeClass();
    $("#container div:not(.row, #secretBox)").width('23.8%');

    $("#container").click(function(ev){
      var x = ev.pageX;
      var y = ev.pageY;
      console.log(x, y);
      console.log(ev.target.className);
    });

    $(".boxType1").html('<a href="http://www.galvanize.com/">Galvanize</a>').on('click', 'a', function(ev){
      ev.preventDefault();
      alert('Where the eff do you think you\'re going?!!!');
    });

    $(".box").click(function(ev){
      $(this).append('<img src="http://loremflickr.com/120/120/puppy" />');
    });

    $(".box").on('click', 'img', function(ev){
      ev.preventDefault();
      ev.stopPropagation();
      $(this).remove();
    });

    // WHY DOESN'T THIS WORK???
    // var getImage = function(){
    //   $('.box').click(function(){
    //     console.log('pic appended');
    //     $(this).append('<img src="http://loremflickr.com/100/100/cute%20puppies" />');
    //   })
    // }
    //
    // var removeImage = function(){
    //   $('.box').on('click', 'img', function(ev){
    //     ev.preventDefault();
    //     ev.stopPropagation();
    //     $('img').hide();
    //   });
    // }
    //
    // $(".box").toggle(getImage, removeImage);



    // console.log("Ready for DOM Manipulation");
    // $('#secretBox').css('background-color', 'white').append('<h1>secret box!</h1>');
    // $('.row:first div').addClass('boxType3');
    // $('.row:last .box:last').hide();
    // $('.boxType1').css('background-color', 'white');
    // $('#row2 div:lt(2)').attr('class', '');
    // $('#container div:not(.row, #secretBox)').width('23.8%');
    //
    // $('#container').click(function(e) {
    //     console.log(e.pageX, e.pageY);
    // });
    //
    // $('.boxType1').html('<a href="http://www.galvanize.com/">Galvanize</a>');
    //
    // $('.boxType1').on('click', 'a', function(ev) {
    //   ev.preventDefault();
    //   alert('Mua-ha-ha, you can never leave!');
    // });
    // //alternate way that also works!
    // // $('.boxType1 a').click(function(e) {
    // //     e.preventDefault();
    // //     alert('Mua-ha-ha, you can never leave!');
    // // });
    //
    // $('.box').click(function(ev) {
    //     console.log('pic added');
    //     console.log(ev);
    //     $(this).append('<img src="http://loremflickr.com/100/100/cute%20puppies" />');
    // });
    //
    // $('.box').on('click', 'img', function(ev) {
    //     ev.preventDefault();
    //     ev.stopPropagation();
    //     $(this).hide();
    // })



    // $('#container').on('click', '.box', function(ev) {
    //     ev.preventDefault();
    //     // ev.stopPropagation();
    //     var evClassBox = box.ev.target.className;
    //     var evClassContainer = container.ev.target.className;
    //     console.log("Container evClass: " + evClassContainer);
    //     console.log("Box evClass: " + evClassBox);
    //     if ($(this).hasClass('box')) {
    //       $(this).addClass('boxType4');
    //     } else {
    //       $(this).addClass('boxType5');
    //
    //     }
    // })

})
