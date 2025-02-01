/* Q.There's an algorithms tournament taking
place in which teams of programmers
compete against each other to solve
algorithmic problems as fast as possible.
Teams compete in a round robin, where
each team faces off against all other teams.
Only two teams compete against each other
at a time, and for each competition, one
team is designated the home team, while the
other team is the away team. In each
competition there's always one winner and
one loser; there are no ties. A team receives
3 points if it wins and 0 points if it loses. The
winner of the tournament is the team that
receives the most amount of points.
Given an array of pairs representing the
teams that have competed against each
other and an array containing the results of
each competition, write a function that
returns the winner of the tournament. The
input arrays are named competitions
and results , respectively. The
competitions array has elements in the
form of [homeTeam, awayTeam] , where
each team is a string of at most 30
characters representing the name of the
team. The results array contains
information about the winner of each
corresponding competition in the
competitions array. Specifically,
results[i] denotes the winner of
competitions[i] , where a 1 in the
results array means that the home team
in the corresponding competition won and a
0 means that the away team won.
It's guaranteed that exactly one team will win
the tournament and that each team will
compete against all other teams exactly
once. It's also guaranteed that the
tournament will always have at least two
teams

comptetions:[
 ["HTML", "C#"],
 ["C#", "Python"],
 ["Python", "HTML"]
]  ,
results: [ 0,0,1]
. */

//SOLUTION 1
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(n) -where n is length of array
function tournamentWinner(comptetions, results) {
  if (comptetions.length !== results.length) return;
  const tournament = {};
  let winner = "";
  let winnerScore = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      if (!tournament[comptetions[i][1]]) {
        tournament[comptetions[i][1]] = 3;
      } else {
        tournament[comptetions[i][1]] += 3;
      }
    } else {
      if (!tournament[comptetions[i][0]]) {
        tournament[comptetions[i][0]] = 3;
      } else {
        tournament[comptetions[i][0]] += 3;
      }
    }
  }

  for (let key in tournament) {
    if (tournament[key] > winnerScore) {
      winnerScore = tournament[key];
      winner = key;
    }
  }
  return winner;
}

//SOLUTION 2
// TIME COMPLEXITY O(n) | SPACE COMPLEXITY O(k) -where n is no. of comptetions
// and k is the no. of teams
const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };
  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[idx];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}
