// $(document).on("pagecreate",  function(){
//     var degree = 0.1;
//     var speed = 0.1;
//     $("p").on("tap",function(){
//         // $(this).hide();
//         $(this).css("transform", "rotate("+degree+"deg)");
//         degree = degree+speed;
//     });                       
// });
        
$(document).on("pagecreate", function(){
    var degree = 10;
    var speed = 10;
    $("img").on("tap",function(){
        $(this).css("transform", "rotate("+degree+"deg)");
        degree = degree+speed;
    });
});



// $(document).ready(function(){
//     var degree = 0.1;
//     var speed = 0.1;
    
//     // use with mouse:
//     $(document).on('mousemove', '#vanes', function(){
//         console.log('Vanes clicked');
//         $(this).css("transform", "rotate("+degree+"deg)");
//         degree = degree+speed;
//     });

//     // use with touchscreen:
//     $(document).on('swiperight', '#vanes', function(){
//         alert('Vanes touched!');
//         $(this).css("transform", "rotate("+degree+"deg)");
//         degree = degree+speed;
//     })
// });


// TEST IT:
// https://www.w3schools.com/jsref/event_clientx.asp

// $(document).ready(function() {
//     var params = {
//         start: function(event, ui) {
//             console.log("Rotating started")
//         },
//         rotate: function(event, ui) {
//             var degrees = ui.angle.current * 180/Math.PI
//             // if (Math.abs(ui.angle.current > 6)) {
//                 console.log("Rotating " + ui.angle.current)
//                 console.log("Rotating " + degrees)
//             // }
//         },
//         stop: function(event, ui) {
//             console.log("Rotating stopped")
//         },
//     };
//     $('#target').rotatable(params);
//     // $('#target').rotatable(params, {handle: $(document.createElement('img')).attr('src', 'static/vanes1.png')} );
// });