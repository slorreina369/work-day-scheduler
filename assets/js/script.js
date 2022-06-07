// clicking on a time block can add an event
// each time block has a save button to save it
// saved stuff stays -forever- 

var auditTime = function(){
    var now = moment().hour();
    console.log(now);

    $(".time-set").each(function(){
        var time = moment($(this).text(), "h A").hour();
        console.log(time)
        if(now > time){
            $(this).closest("tr").find(".task-box").addClass("bg-secondary");
            console.log("early");
        } else if (now < time){
            $(this).closest("tr").find(".task-box").addClass("bg-success");
            console.log("late");
        } else if (now == time){
            $(this).closest("tr").find(".task-box").addClass("bg-danger");
            console.log("this is fine");
        }
    })
    
   
};

$(document).ready(function(){
    var rightNow = moment().format("LLLL");
    console.log(rightNow);
    
    $("#currentDay")
        .text(rightNow);
        
    
});

// work day task making 
$(".list-group").on("click", "p", function(){
    var text = $(this)
    .text()
    .trim();
    
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
  });

auditTime();