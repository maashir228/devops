const projects = [
    { name: "Time series analysis", technology: "Python" },
    { name: "Recommender system", technology: "Python" },
    { name: "DNA Corpus", technology: "C++" },
    { name: "4 Way traffic signal", technology: "Circuit using Breadboard - Dld" },
    { name: "Hangman", technology: "Assembly lang" },
    { name: "Library Management system", technology: "C#" },
    { name: "Ice cream factory system call", technology: "C/ OS" },
    { name: "Spam Email Detection", technology: "Python" },
    { name: "Snake Game", technology: "C" },
    { name: "Job posting", technology: "C#" },
    { name: "Flex", technology: "C" }
];

const projectList = document.getElementById("project-list");
const filterInput = document.getElementById("filter");

// Display projects based on filter
function displayProjects() {
    const filter = filterInput.value.toLowerCase();
    const filteredProjects = projects.filter(project => project.technology.toLowerCase().includes(filter));
    projectList.innerHTML = filteredProjects.map(project => `<li>${project.name} - ${project.technology}</li>`).join('');
}

// Update projects when user types in the filter box
filterInput.addEventListener("input", displayProjects);

// Initial display of projects
displayProjects();
