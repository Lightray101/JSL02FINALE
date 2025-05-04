/**
 * Prompts the user for a task's details and validates the input.
 * @param {number} taskNumber - The task number (for display).
 * @returns {object|null} - The task object or null if cancelled/invalid.
 */
async function getTaskInput(taskNumber) {
  let title = prompt(`Enter task ${taskNumber} title:`);
  if (!title || !title.trim()) {
    alert("Title cannot be empty.");
    return null;
  }

  let description = prompt(`Enter task ${taskNumber} description:`);
  if (!description || !description.trim()) {
    alert("Description cannot be empty.");
    return null;
  }

  // Keep prompting for status until a valid value is entered
  let status;
  while (true) {
    status = prompt(
      `Enter task ${taskNumber} status ('todo', 'doing', or 'done'):`
    );
    if (!status) {
      alert("Status cannot be empty.");
      continue;
    }
    status = status.trim().toLowerCase();
    if (["todo", "doing", "done"].includes(status)) {
      break;
    } else {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }

  return { title: title.trim(), description: description.trim(), status };
}
/**
 * Handles the task entry process for two tasks.
 */
async function handleAddTasks() {
  const tasks = [];
  for (let i = 1; i <= 2; i++) {
    const task = await getTaskInput(i);
    if (!task) {
      alert("Task entry cancelled or invalid. No tasks were added.");
      return;
    }
    tasks.push(task);
  }
  // Store or use the tasks array as needed
  console.log("Tasks entered:", tasks);
  // Log completed tasks to the console in the required format
  const completedTasks = tasks.filter((task) => task.status === "done");
  if (completedTasks.length === 0) {
    console.log("No tasks completed, let's get to work!");
  } else {
    completedTasks.forEach((task) => {
      console.log(`Title: ${task.title}, status: done`);
    });
  }

  alert("Tasks successfully added! Check the console for details.");
}
// Attach event listener to the button after DOM is loaded
window.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-tasks-btn")
    .addEventListener("click", handleAddTasks);
});
