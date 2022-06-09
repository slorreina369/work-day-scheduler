var tasks = [];
var table = document.querySelector("#table-schedule");

var auditTime = function(){
    var now = moment().hour();
    console.log(now);
    $(".hour").each(function(){
        var time = moment($(this).text(), "h A").hour();
        var taskBox = $(this).closest("tr").find(".task-box");

        if(now > time){
            taskBox.addClass("past");
            taskBox.prop("contenteditable", false);
        } else if (now < time){
            taskBox.addClass("future");
            taskBox.prop("contenteditable", true);
        } else if (now == time){
            taskBox.addClass("present");
            taskBox.prop("contenteditable", true);
        };
    }); 
};

var saveTasks = function(task) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log('save tasks', tasks);
};

// pulls up the current date and time, this will effect the code by the hour
// so I feel its important to show the hour as well
$(document).ready(function(){
    var rightNow = moment().format("LLLL");
    console.log(rightNow);
    
    $("#currentDay")
        .text(rightNow);   
});

// function is only called when button is clicked
$(".saveBtn").on("click", function(){
    var taskBox = $(this).closest("tr").find(".task-box").text();
    var timeSet = $(this).closest("tr").index();
    tasks[timeSet] = taskBox;

    alert("Task saved to schedule.");
    console.log( tasks, timeSet, taskBox);
    saveTasks();
});

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if(!tasks){
        tasks = [];
    };
    for(var i=0; i<tasks.length; i++){
        console.log(tasks);
        var task = tasks[i];

        $(table).find("tr:nth-child(" + (i + 1) + ") .task-box").text(task);
    };
};

auditTime();
loadTasks();