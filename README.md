# Kanban Task Management Board 🚀

A modern, responsive Kanban board application built with vanilla JavaScript, HTML, and CSS. This project helps users manage their tasks efficiently using the Kanban methodology, featuring a clean and intuitive interface.

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
  - CSS Variables for theming
  - Flexbox for layout
  - Media queries for responsiveness
- **JavaScript (ES6+)**: 
  - Async/await for task handling
  - DOM manipulation
  - Event handling
  - Input validation

## ✨ Key Features

- **Modern UI Design**: Clean and intuitive interface with a professional look
- **Responsive Layout**: Works seamlessly across all device sizes
- **Task Management**: Add, view, and track tasks in different status columns
- **Status Tracking**: Three status categories (Todo, Doing, Done)
- **Input Validation**: Ensures proper task data entry
- **Real-time Updates**: Immediate visual feedback for task changes

## 🎯 Project Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Task management logic
└── .vscode/           # VS Code settings
```

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Click the "Add Tasks" button to start managing your tasks

## 💡 Usage Examples

### Adding Tasks
```javascript
// Example task structure
{
  title: "Complete Project",
  description: "Finish the Kanban board implementation",
  status: "doing"  // Automatically converted to lowercase
}
```

### Task Status Options
- `todo`: Tasks that need to be started
- `doing`: Tasks currently in progress
- `done`: Completed tasks



## 🔧 Development

The project uses VS Code with Live Server for development. 

## 📝 Notes

- All status inputs are automatically converted to lowercase
- Task titles and descriptions cannot be empty
- The interface is fully responsive and works on all modern browsers
