var regularIcon = 'fa-refular fa-star';
var solidIcon = 'fa-solid fa-star';
var isImportant = false;

function toggleImportant() {
  console.log('Icon clicked');

  if(!isImportant) {
    $('#iImportant').removeClass(regularIcon);
    $('#iImportant').addClass(solidIcon);
    isImportant = true;
  }
  else {
    $('#iImportant').removeClass(solidIcon);
    $('#iImportant').addClass(regularIcon);
    isImportant = false;
  }
}

function saveTask() {
  console.log("Saving task!");

  let title = $("#txtTitle").val();
  let description = 

  console.log()
}

function displayTask(task) {
  let syntax = 
  `<div class= "task">
    <h5>${task.title}</h5>
  </div>`;

  $("#pendingTasks").append(syntax);
}

function init() {
  console.log('Task Manager page!');

  $('#iImportant').click(toggleImportant);
  $("#btnSave").click(saveTask);
}

window.load = init;