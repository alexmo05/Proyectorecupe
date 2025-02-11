import '../styles/main.css'






window.addEventListener('load', function() {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  if (splashScreen && mainContent) {
    splashScreen.addEventListener("click", function() {
      splashScreen.style.display = "none"; // Ocultar splash
      mainContent.style.display = "block";  // Mostrar contenido principal
    });
  } else {
    console.error("No se encontraron los elementos splash-screen o main-content");
  }
});

// Mostrar u ocultar la sección "About" al hacer clic en el botón
document.getElementById("about-btn")?.addEventListener("click", function() {
  const aboutSection = document.getElementById("about-section");
  if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
    aboutSection.style.display = "block"; // Mostrar la sección
  } else {
    aboutSection.style.display = "none"; // Ocultar la sección
  }
});

// Cambiar la funcionalidad de los botones para que redirijan a GitHub
document.querySelectorAll('.launch-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const githubUrl = button.getAttribute('data-github-url');
    if (githubUrl) {
      window.open(githubUrl, '_blank'); // Abre el enlace en una nueva pestaña
    }
  });
});

// Efectos de hover para los proyectos (como si fuera una consola de código)
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', function() {
    project.style.border = '2px solid #ff6600';
  });
  project.addEventListener('mouseleave', function() {
    project.style.border = '2px solid #00ff00';
  });
});

// Animación al hacer scroll (fade-in con efecto)
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.project');
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('fade-in');
    }
  });
});

// Función para verificar si un elemento está en la vista
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Función para inicializar el gráfico de habilidades (Chart.js)
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'Docker', 'Figma'],
      datasets: [{
        label: 'Nivel de habilidad',
        data: [85, 75, 65, 75, 60, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

