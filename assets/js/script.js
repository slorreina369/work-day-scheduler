// saved stuff stays -forever- 
var tasks = {};

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

var saveTasks = function(task) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log('save tasks', tasks);
  };

$(document).ready(function(){
    var rightNow = moment().format("LLLL");
    console.log(rightNow);
    
    $("#currentDay")
        .text(rightNow);
        
    
});

// function is only called when button is clicked (fuck off if you want to change it)
$(".saveBtn").on("click", function(){
    var taskBox = $(this).closest("tr").find(".task-box").text();
    var timeSet = $(this).closest("tr").find("th").text();
    tasks[timeSet] = taskBox;

    alert("Task saved to schedule.");
    console.log('SAAAAAVE', tasks, timeSet, taskBox);
    saveTasks();
})





auditTime();
loadTasks();