

$(document).ready(function(){
    var rightNow = moment().format("LLLL");
    console.log(rightNow);
    
    $("#currentDay")
        .text(rightNow);
        
    
})