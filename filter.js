
const coaches = [
    { name: "Coach Alex", game: "valorant", expertise: "Expert in Valorant", profileLink: "coach-alex.html", image: "images/alex.jpg" },
    { name: "Coach Sam", game: "league-of-legends", expertise: "Expert in League of Legends", profileLink: "coach-sam.html", image: "images/sam.jpg" },
    { name: "Coach Mia", game: "rocket-league", expertise: "Expert in Rocket League", profileLink: "coach-mia.html", image: "images/mia.jpg" },
    { name: "Coach Luke", game: "csgo", expertise: "Expert in CS:GO", profileLink: "coach-luke.html", image: "images/luke.jpg" },
    { name: "Coach Sarah", game: "dota-2", expertise: "Expert in Dota 2", profileLink: "coach-sarah.html", image: "images/sarah.jpg" },
    { name: "Coach Tom", game: "fortnite", expertise: "Expert in Fortnite", profileLink: "coach-tom.html", image: "images/tom.jpg" }
];


function displayCoaches(game) {
    const coachResults = document.getElementById("coach-results");
    coachResults.innerHTML = ""; 

   
    const filteredCoaches = coaches.filter(coach => coach.game === game);

    // Affiche chaque coach filtré
    filteredCoaches.forEach(coach => {
        const coachDiv = document.createElement("div");
        coachDiv.className = "coach-card";
        coachDiv.innerHTML = `
            <img src="${coach.image}" alt="${coach.name}">
            <h3>${coach.name}</h3>
            <p>${coach.expertise}</p>
            <a href="${coach.profileLink}" class="view-profile">View Profile</a>
        `;
        coachResults.appendChild(coachDiv);
    });
}


const urlParams = new URLSearchParams(window.location.search);
const gameSelected = urlParams.get("game");
if (gameSelected) {
    displayCoaches(gameSelected);
}
