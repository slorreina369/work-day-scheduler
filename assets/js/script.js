// clicking on a time block can add an event
// each time block has a save button to save it
// saved stuff stays -forever- 

var auditTime = function(){
    var now = moment().hour();
    console.log(now);

    $(".time-set").each(function(){
        var time = moment($(this).text(), "h A").hour();
        var taskBox = $(this).closest("tr").find(".task-box");
        if(now > time){
            taskBox.addClass("bg-secondary");
            taskBox.prop("contenteditable", false);
        } else if (now < time){
            taskBox.addClass("bg-success");
            taskBox.prop("contenteditable", true);
        } else if (now == time){
            taskBox.addClass("bg-danger");
            taskBox.prop("contenteditable", true);
        }
    })
    
   
};

$(document).ready(function(){
    var rightNow = moment().format("LLLL");
    console.log(rightNow);
    
    $("#currentDay")
        .text(rightNow);
        
    
});



auditTime();