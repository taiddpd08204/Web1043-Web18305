// Get DOM elements
const taskNameInput = document.getElementById('task-name');
const taskDescInput = document.getElementById('task-desc');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const editOverlay = document.getElementById('edit-overlay');
const editNameInput = document.getElementById('edit-name');
const editDescInput = document.getElementById('edit-desc');
const saveTaskButton = document.getElementById('save-task');
const cancelTaskButton = document.getElementById('cancel-task');

// Initialize tasks array
let tasks = [];

// Function to add task to list
function addTask(name, desc) {
	// Create task object
	const task = {
		name: name,
		desc: desc
	};

	// Add task object to tasks array
	tasks.push(task);

	// Add task to task list
	const li = document.createElement('li');
	li.innerHTML = `<span>${name}: ${desc}</span>
					<button class="delete-task">Delete</button>
					<button class="edit-task">Edit</button>`;
	taskList.appendChild(li);

	// Clear task name and description inputs
	taskNameInput.value = '';
	taskDescInput.value = '';
}

// Function to delete task from list
function deleteTask(index) {
	// Remove task object from tasks array
	tasks.splice(index, 1);

	// Remove task from task list
	taskList.removeChild(taskList.childNodes[index]);
}

// Function to open edit overlay
function openEditOverlay(index) {
	// Fill in edit form with task details
	editNameInput.value = tasks[index].name;
	editDescInput.value = tasks[index].desc;

	// Display edit overlay
	editOverlay.style.display = 'block';

	// Add event listener to save task button
	saveTaskButton.addEventListener('click', function() {
		// Update task object in tasks array
		tasks[index].name = editNameInput.value;
		tasks[index].desc = editDescInput.value;

		// Update task in task list
		taskList.childNodes[index].innerHTML = `<span>${editNameInput.value}: ${editDescInput.value}</span>
												<button class="delete-task">Delete</button>
												<button class="edit-task">Edit</button>`;

		// Hide edit overlay
		editOverlay.style.display = 'none';
	});

	// Add event listener to cancel task button
	cancelTaskButton.addEventListener('click', function() {
		// Hide edit overlay
		editOverlay.style.display = 'none';
	});
}

// Add event listener to add task button
addTaskButton.addEventListener('click', function(event) {
	event.preventDefault();

	// Get task name and description values
	const name = taskNameInput.value;
	const desc = taskDescInput.value;

	// Add task to list if inputs are valid
	if (name.length >= 5 && desc.length >= 20) {
		addTask(name, desc);
	}
});

// Add event listener to task list for delete and edit buttons
taskList.addEventListener('click', function(event) {
	// Get index of clicked task
	const index = Array.from(taskList.childNodes).indexOf(event.target.parentNode);

	// Delete task if delete button is clicked
	if (event.target.classList.contains('delete-task')) {
		deleteTask(index);
	}

	// Open edit overlay if edit button is clicked
	if (event.target.classList.contains('edit-task')) {
		openEditOverlay(index);
	}
});
