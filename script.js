var newTask = document.getElementById('newTask');
var form;
var mapImg;
var locationInput;
var address;
var currentAddress = "";
var selectedServiceType = "";
var taskInfo;
var taskText = "";
var currentTaskText = "";
var currentTask = "";
var selectedServiceTask = "";
var map = document.getElementById('map');
map.onclick = function(event) {
    var topcoords = event.pageY;
    var leftcoords = event.pageX;
    if (mapImg !== undefined) {
        mapImg.remove();
    }
        mapImg = document.createElement('img');
        mapImg.src = "../icons/Combined Shape Copy.svg";
        mapImg.style.position = "absolute";
        mapImg.style.left = leftcoords - 26 + "px";
        mapImg.style.top = topcoords - 67 + "px";
        map.appendChild(mapImg);
        if (leftcoords <= 500 && topcoords <= 500) {
            locationInput.value = currentAddress = "141 Ogunlana Dr, Lagos 10128";
        } else if (leftcoords > 500 && topcoords <= 500) {
            locationInput.value = currentAddress = "56 Griffit Street, Lagos 10116"; 
        }
        else if (leftcoords <= 500 && topcoords > 500) {
            locationInput.value = currentAddress = "95 Brod Street, Lagos 10104"; 
        }
        else {
            locationInput.value = currentAddress = "19 Massey Street, Lagos 10136"; 
        }
        address.innerHTML = "My address is " + locationInput.value;
}
newTask.onclick = function () {
    if (form === undefined) {
    showForm();
    }
};
newTask.onmousedown = function () {
    return false;
  };
function showForm() {
    form = document.createElement('form');
    document.body.appendChild(form);
    var taskTitle = createTaskTitle();
    form.appendChild(taskTitle);
    taskInfo = createTaskInfo();
    form.appendChild(taskInfo);
    var taskBlockLocation = createTaskBlockLocation();
    taskInfo.appendChild(taskBlockLocation);
    var taskBlockServiceType = createTaskBlockServiceType();
    taskInfo.appendChild(taskBlockServiceType);
    var electrician = createIcon("electrician", "url(../icons/noun_321339_cc.svg) no-repeat center center");
    taskBlockServiceType.appendChild(electrician);
    var plumber = createIcon("plumber", "url(../icons/noun_321315_cc.svg) no-repeat center center");
    taskBlockServiceType.appendChild(plumber);
    var gardener = createIcon("gardener", "url(../icons/noun_321363_cc.svg) no-repeat center center");
    taskBlockServiceType.appendChild(gardener);
    var housekeeper = createIcon("housekeeper", "url(../icons/noun_321399_cc.svg) no-repeat center center");
    taskBlockServiceType.appendChild(housekeeper);
    var cook = createIcon("cook", "url(../icons/noun_321395_cc.svg) no-repeat center center");
    taskBlockServiceType.appendChild(cook);

    var electricianIcon = document.getElementById('electrician');
    electricianIcon.onclick = function() {
        clearBorderType();
        this.classList.add("active-icon");
        selectedServiceType = "electrician";
        taskText.innerHTML = "I need an " + selectedServiceType;
        currentTaskText = taskText.innerHTML;
        clearDescription();
        showElectricianTasks();
    };
    var plumberIcon = document.getElementById('plumber');
    plumberIcon.onclick = function() {
        clearBorderType();
        this.classList.add("active-icon");
        selectedServiceType = "plumber";
        taskText.innerHTML = "I need a " + selectedServiceType;
        currentTaskText = taskText.innerHTML;
        clearDescription();
        showPlumberTasks();
    };
    var gardenerIcon = document.getElementById('gardener');
    gardenerIcon.onclick = function() {
        clearBorderType();
        this.classList.add("active-icon");
        selectedServiceType = "gardener";
        taskText.innerHTML = "I need a " + selectedServiceType;
        currentTaskText = taskText.innerHTML;
        clearDescription();
        showGardenerTasks();
    };
    var housekeeperIcon = document.getElementById('housekeeper');
    housekeeperIcon.onclick = function() {
        clearBorderType();
        this.classList.add("active-icon");
        selectedServiceType = "housekeeper";
        taskText.innerHTML = "I need a " + selectedServiceType;
        currentTaskText = taskText.innerHTML;
        clearDescription();
        showHousekeeperTasks();
    };
    var cookIcon = document.getElementById('cook');
    cookIcon.onclick = function() {
        clearBorderType();
        this.classList.add("active-icon");
        selectedServiceType = "cook";
        taskText.innerHTML = "I need a " + selectedServiceType;
        currentTaskText = taskText.innerHTML;
        clearDescription();
        showCookTasks();
    };
}
function createTaskTitle() {
    var taskTitle = document.createElement('div');
    taskTitle.className = 'taskTitle';
    var taskSection = document.createElement('div');
    taskSection.className = 'taskSection';
    taskSection.innerHTML = "New Task";
    taskTitle.appendChild(taskSection);
    form.appendChild(taskTitle);
    taskText = document.createElement('div');
    taskText.className = 'taskText';
    taskText.innerHTML = "I need";
    taskTitle.appendChild(taskText);
    address = document.createElement('div');
    address.className = 'address';
    taskTitle.appendChild(address);
    var createTaskButton = document.createElement('div');
    createTaskButton.className = 'createTaskButton';
    createTaskButton.innerHTML = "CREATE TASK";
    taskTitle.appendChild(createTaskButton);
    return taskTitle;
}
function createTaskInfo() {
    taskInfo = document.createElement('div');
    taskInfo.className = 'taskInfo';
    return taskInfo;
}
function createTaskBlockLocation() {
    var taskInfoBlock = document.createElement('div');
    taskInfoBlock.className = 'taskInfoBlock';
    var location = document.createElement('div');
    location.className = 'taskSection';
    location.innerHTML = "Location";
    taskInfoBlock.appendChild(location);
    locationInput = document.createElement('input');
    locationInput.type = "text";
    locationInput.className = "infoInput";
    locationInput.value = currentAddress;
    taskInfoBlock.appendChild(locationInput);
    address.innerHTML = "My address is " + locationInput.value;
    locationInput.oninput = function() {
        address.innerHTML = "My address is " + locationInput.value;
    }
    return taskInfoBlock;
}
function createTaskBlockServiceType() {
    var taskInfoBlock = document.createElement('div');
    taskInfoBlock.className = 'taskInfoBlock';
    var serviceType = document.createElement('div');
    serviceType.className = 'taskSection';
    serviceType.innerHTML = "Service Type";
    taskInfoBlock.appendChild(serviceType);
    return taskInfoBlock;
}
function createIcon(name, url) {
    var wrapper = document.createElement('div');
    wrapper.className = "wrapper";
    var icon = document.createElement('div');
    icon.id = name;
    icon.style.background = url;
    icon.className = "icon";
    wrapper.appendChild(icon);
    var serviceName = document.createElement('div');
    serviceName.className = "serviceName";
    serviceName.innerHTML = name;
    wrapper.appendChild(serviceName);
    return wrapper;
}
function showElectricianTasks() {
    clearTasks();
    createTaskSection(selectedServiceType);
    createTask("replace lightbulbs");
    createTask("repair a wiring");
    createTask("repair a power socket");
    createTask("repair a light switch");
    createTask("hang a chandelier");
    selectTask();
}
function showPlumberTasks() {
    clearTasks();
    createTaskSection(selectedServiceType);
    createTask("unblock a toilet");
    createTask("unblock a sink");
    createTask("fix a water leak");
    createTask("install a sink");
    createTask("install a shower");
    createTask("install a toilet");
    selectTask();
} 
function showGardenerTasks() {
    clearTasks();
    createTaskSection(selectedServiceType);
    createTask("water a garden");
    createTask("mow a lawn");
    createTask("plant flowers");
    createTask("crop trees");
    createTask("rustle leaves in a garden");
    selectTask();
}
function showHousekeeperTasks() {
    clearTasks();
    createTaskSection(selectedServiceType);
    createTask("do the cleaning");
    createTask("wash");
    createTask("iron");
    createTask("take care of indoor plants");
    createTask("clean carpets");
    selectTask();
}
function showCookTasks() {
    clearTasks();
    createTaskSection(selectedServiceType);
    createTask("buy products");
    createTask("cook a meal");
    selectTask();
}
function clearBorderType() {
    var icons = document.getElementsByClassName("icon");
    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.remove("active-icon");
    }
}
function clearDescription() {
    var description = document.getElementsByClassName('descriptionBlock');
    for (var i = 0; i < description.length; i++) {
        description[i].style.display = "none";
    }
}
function clearTasks() {
    var tabcontent = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}
function createTaskSection(type) {
    taskInfoBlock = document.createElement('div');
    taskInfoBlock.className = 'taskInfoBlock';
    taskInfoBlock.classList.add('tabcontent');
    taskInfo.appendChild(taskInfoBlock);
    var serviceTasks = document.createElement('div');
    serviceTasks.className = 'taskSection';
    serviceTasks.innerHTML = type + " tasks";
    taskInfoBlock.appendChild(serviceTasks);
}
function createTask(task) {
    var typeTask = document.createElement('div');
    typeTask.className = "task";
    typeTask.innerHTML = task;
    taskInfoBlock.appendChild(typeTask);
}
function clearBorderTasks() {
    var tasksList = document.getElementsByClassName("task");
    for (var i = 0; i < tasksList.length; i++) {
        tasksList[i].classList.remove("active-task");
    }
}
function selectTask() {
    var tasks = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function(event) {
            var target = event.target;
            while (target !== tasks) {
                if (target.className === 'task') {
                    clearBorderTasks();
                    target.classList.add('active-task');
                    selectedServiceTask = target.innerHTML;
                    taskText.innerHTML = currentTaskText + " to " + selectedServiceTask;
                    currentTask = taskText.innerHTML;
                    clearDescription();
                    createDescriptionSection();
                    return;
                }
            }
            target = target.parentNode;
        };    
    }
}
function createDescriptionSection() {
    var descriptionBlock = document.createElement('div');
    descriptionBlock.className = 'taskInfoBlock';
    descriptionBlock.classList.add('descriptionBlock');
    taskInfo.appendChild(descriptionBlock);
    var taskDescription = document.createElement('div');
    taskDescription.className = 'taskSection';
    taskDescription.innerHTML = "Task description";
    descriptionBlock.appendChild(taskDescription);
    var descriptionInput = document.createElement('input');
    descriptionInput.type = "text";
    descriptionInput.className = "infoInput";
    descriptionInput.value = "";
    descriptionInput.placeholder = "Please add a description";
    descriptionBlock.appendChild(descriptionInput);
    descriptionInput.oninput = function() {
        taskText.innerHTML = currentTask + ", " + descriptionInput.value;
    }
}