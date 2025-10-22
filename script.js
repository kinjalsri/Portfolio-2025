const projectsData = {
  "JavaScript": [
    { title: "Note-It", img: "assests/jslogo.png", link: "https://github.com/kinjalsri/Note-it" },
    { title: "Portfolio", img: "assests/jslogo.png", link: "https://github.com/kinjalsri/Portfolio-2025.git" },
    { title: "30daysJs", img: "assests/jslogo.png", link: "https://github.com/kinjalsri/30daysJs" },
    { title: "Manthan", img: "assests/jslogo.png", link: "https://github.com/kinjalsri/manthanwebsite" },
  ],
  "Python": [
    { title: "Whatsapp Bulk Message Sender", img: "assests/icons8-python-48.png", link: "https://github.com/kinjalsri/Whatsapp-Bulk-Message-Sender" },
    { title: "Music Recommendation System", img: "assests/icons8-python-48.png", link: "https://github.com/kinjalsri/MusicRecommandation" },
    { title: "Hangman", img: "assests/icons8-python-48.png", link: "https://github.com/kinjalsri/hangman" },
    { title: "Ceasar Encryption", img: "assests/icons8-python-48.png", link: "https://github.com/kinjalsri/CeasarEncryption" },
  ],
  "Java": [
    { title: "Study Buddy", img: "assests/javalogo.png", link: "https://github.com/kinjalsri/Study-Buddy" },
    { title: "Notify", img: "assests/javalogo.png", link: "https://github.com/kinjalsri/Cloud-Automation" },
    
  ],

   "React": [
    { title: "Disaster Alert App", img: "assests/react.png", link: "https://github.com/kinjalsri/CSA_Hackathon" },
    { title: "Game Engine", img: "assests/react.png", link: "https://github.com/yourname/game-engine" },
  ], 

  "AWS": [
    { title: "Notify", img: "assests/icons8-aws-logo-64.png", link: "https://github.com/kinjalsri/Note-it"},
    { title: "WildRydes", img: "assests/icons8-aws-logo-64.png", link: "https://github.com/kinjalsri/wildrydes-site" },
    
  ],

   "HTML": [
    { title: "Note-It", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/Note-it" },
    { title: "Portfolio", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/Portfolio-2025.git" },
    { title: "Frontend Learnings", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/HTML-CSS-JS-Learnings" },
    { title: "Manthan", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/manthanwebsite" },
  ],

  "CSS": [
    { title: "Note-It", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/Note-it" },
    { title: "Portfolio", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/Portfolio-2025.git" },
    { title: "Frontend Learnings", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/HTML-CSS-JS-Learnings" },
    { title: "Manthan", img: "assests/csslogo.png", link: "https://github.com/kinjalsri/manthanwebsite" },
  ],

  "ReactNative": [
    { title: "Seher-Tourist Safety App", img: "assests/reactlogo.png", link: "https://github.com/kinjalsri/Smart-Tourist-Safety--SIH" },
  ],

   "C": [
    { title: "Library System", img: "assests/icons8-c-100.png", link: "https://github.com/yourname/library-system" },
    { title: "Student Manager", img: "assests/icons8-c-100.png", link: "https://github.com/yourname/student-manager" },
  ],
"ExpressJs": [
    { title: "Note-It", img: "assests/icons8-express-js-64.png", link: "https://github.com/kinjalsri/Note-it" },
    { title: "Game Engine", img: "assests/icons8-express-js-64.png", link: "https://github.com/yourname/game-engine" },
  ],

  
  
};

function renderProjects(tech) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  if (!projectsData[tech]) return;

  projectsData[tech].forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("project-card");

   card.innerHTML = `
  <div class="project-left">
    <img src="${proj.img}" alt="${proj.title}">
    <div class="project-title">${proj.title}</div>
  </div>
  <a href="${proj.link}" target="_blank" class="play-btn" data-tooltip="Github-Repo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </a>
`;


    container.appendChild(card);
  });
}

document.querySelectorAll(".tech-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();

    document.querySelectorAll(".tech-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    renderProjects(item.dataset.tech);
  });
});

// default load
renderProjects("JavaScript");
