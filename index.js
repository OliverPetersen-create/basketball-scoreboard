let teamScores = [0, 0]
let teamScoreEls = document.querySelectorAll("h2.team1Score, h2.team2Score")

function addPointsToTeam(team, points) {
    teamScores[team] += points
     if (teamScores[team] > 99) {
        teamScores[team] = 99
     }
    updateScore()
}
function updateScore() {
    teamScoreEls[0].textContent = teamScores[0]
    teamScoreEls[1].textContent = teamScores[1]
}
function newGame() {
    teamScores = [0, 0]
    updateScore()
}