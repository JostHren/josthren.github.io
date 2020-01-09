  // Declare variables
  let s1920 = 0;
  let fixtures1920 = [];
  let players = [];



  s1920 = sDataAll.s1920;


  // Call function to extract players
  // playersOf(s1920);
  playersOf(s1920);
 

  // Create array of all players with stats For Session 19/20
  for (let player of players) {
  let stats = {"name": player, "stats": tableFor(player, s1920)};
  fixtures1920.push(stats);
  };


  // Add points and pecentage to players for Session 19/20
  for (let player of fixtures1920) {
  player.points = (player.stats[0] * 1 + player.stats[2] * 0.5);
  player.percentage = (((player.stats[0] * 1 + player.stats[2] * 0.5) / (player.stats[0] + player.stats[1] + player.stats[2])) * 100).toFixed(1);
  };


  // Sort Fixtures Properly
  sortPointsAsc(fixtures1920);



// Extract all players from session

function playersOf(session) {
  for (let entry of session) {
    for (let player of entry.win) {
      if (!players.includes(player)) {
        players.push(player);
      }
    }
    for (let player of entry.lost) {
      if (!players.includes(player)) {
        players.push(player);
      }
    }
    for (let player of entry.draw1) {
      if (!players.includes(player)) {
        players.push(player);
      }
    }
    for (let player of entry.draw2) {
      if (!players.includes(player)) {
        players.push(player);
      }
    }
  }
  return players;
}



// count [win, lost, draw, not on match]
function tableFor(play, session) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < session.length; i++) {
      let index = 0;
      if (session[i].win.includes(play)) index += 0;
      else if (session[i].lost.includes(play)) index += 1;
      else if (session[i].draw1.includes(play)) index += 2;
      else if (session[i].draw2.includes(play)) index += 2;
      else index += 3;
      table[index] += 1;
    }
    return table;
};



// Sort by points and percentage (if points == points)

function sortPointsAsc(fixtures) {
  fixtures.sort((a,b) => (a.points == b.points) ? ((a.percentage < b.percentage) ? 1 : ((b.percentage < a.percentage) ? -1 : 0)) : 
  (a.points < b.points) ? 1 : ((b.points < a.points) ? -1 : 0));
  return fixtures 
};

function sortPointsDesc(fixtures) {
  fixtures.sort((a,b) => (a.points == b.points) ? ((a.percentage > b.percentage) ? 1 : ((b.percentage > a.percentage) ? -1 : 0)) : 
  (a.points > b.points) ? 1 : ((b.points > a.points) ? -1 : 0));
  return fixtures 
};

// Sort by percentage
function sortPercAsc(fixtures) {
  fixtures.sort((a,b) => (a.percentage == b.percentage) ? ((a.points < b.points) ? 1 : ((b.points < a.points) ? -1 : 0)) : 
  (a.percentage < b.percentage) ? 1 : ((b.percentage < a.percentage) ? -1 : 0));
  return fixtures 
};
  
function sortPercDesc(fixtures) {
  fixtures.sort((a,b) => (a.percentage == b.percentage) ? ((a.points > b.points) ? 1 : ((b.points > a.points) ? -1 : 0)) : 
  (a.percentage > b.percentage) ? 1 : ((b.percentage > a.percentage) ? -1 : 0));
  return fixtures 
};


