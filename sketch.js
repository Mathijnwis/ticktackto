let starty = 70;
  let startx = 70;
  let whidex = 70;
  let whidey = 70;
  let cube1 = ("white");
  let cube2 = ("white");
  let cube3 = ("white");
  let cube4 = ("white");
  let cube5 = ("white");
  let cube6 = ("white");
  let cube7 = ("white");
  let cube8 = ("white");
  let cube9 = ("white");
  let cubeclicked = 0
  let winner = 0
  let player1 = "player 1's turn"
  let player2 = "player 2's turn"
  let playerwon = ("player ", winner, "has won")
  let playerturn = 0
function setup() {
  starty = 70;
  startx = 70;
  whidex = 70;
  whidey = 70;
  playerturn = 0
  cube1 = ("white");
  cube2 = ("white");
  cube3 = ("white");
  cube4 = ("white");
  cube5 = ("white");
  cube6 = ("white");
  cube7 = ("white");
  cube8 = ("white");
  cube9 = ("white");
  cubeclicked = 0
  winner = 0
  player1 = "player 1's turn"
  player2 = "player 2's turn"
  createCanvas(400, 400);
  activePlayer = round(random(1, 2));
}
function draw() {
  if (winner == 1) {
    playerwon = ("player 1 has won")
  } else {
    playerwon = ("player 2 has won")
  }
  if (mouseIsPressed){
    if (mouseX > startx) {
      if (mouseX < startx + whidex) {
        if (mouseY > starty) {
          if(mouseY < starty + whidey) {
            if (cube1 == "white")
            if (activePlayer == 1) {
              cube1 = ("blue")
              activePlayer = 2
              cubeclicked = 1
              playerturn += 1
            } else {
              cube1 = ("red")
              activePlayer = 1
              cubeclicked = 1
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){
    if (mouseX > startx + whidex) {
      if (mouseX < startx + whidex * 2) {
        if (mouseY > starty) {
          if(mouseY < starty + whidey) {
            if (cube2 == "white")
            if (activePlayer == 1) {
              cube2 = ("blue")
              activePlayer = 2
              cubeclicked = 2
              playerturn += 1
            } else {
              cube2 = ("red")
              activePlayer = 1
              cubeclicked = 2
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){
    if (mouseX > startx + (whidex * 2)) {
      if (mouseX < startx + whidex * 3) {
        if (mouseY > starty) {
          if(mouseY < starty + whidey) {
            if (cube3 == "white")
            if (activePlayer == 1) {
              cube3 = ("blue")
              activePlayer = 2
              cubeclicked = 3
              playerturn += 1
            } else {
              cube3 = ("red")
              activePlayer = 1
              cubeclicked = 3
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){
    if (mouseX > startx) {
      if (mouseX < startx + whidex) {
        if (mouseY > starty + starty) {
          if(mouseY < starty + whidey + starty) {
            if (cube4 == "white")
            if (activePlayer == 1) {
              cube4 = ("blue")
              activePlayer = 2
              cubeclicked = 4
              playerturn += 1
            } else {
              cube4 = ("red")
              activePlayer = 1
              cubeclicked = 4
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){
    if (mouseX > startx ) {
      if (mouseX < startx + whidex ) {
        if (mouseY > starty + (starty * 2)) {
          if(mouseY < starty + whidey + starty * 2) {
            if (cube5 == "white")
            if (activePlayer == 1) {
              cube5 = ("blue")
              activePlayer = 2
              cubeclicked = 5
              playerturn += 1

            } else {
              cube5 = ("red")
              activePlayer = 1
              cubeclicked = 5
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){ //works
    if (mouseX > startx + startx) {
      if (mouseX < startx + (whidex * 2)) {
        if (mouseY > starty + (starty * 2)) {
          if(mouseY < starty + whidey + starty * 2) {
            if (cube6 == "white")
            if (activePlayer == 1) {
              cube6 = ("blue")
              activePlayer = 2
              cubeclicked = 6
              playerturn += 1
            } else {
              cube6 = ("red")
              activePlayer = 1
              cubeclicked = 6
              playerturn += 1
              
            }
  }}}}}
  if (mouseIsPressed){ //works
    if (mouseX > startx + startx + startx) {
      if (mouseX < startx + (whidex * 3)) {
        if (mouseY > starty + (starty * 2)) {
          if(mouseY < starty + whidey + starty * 3) {
            if (cube7 == "white")
            if (activePlayer == 1) {
              cube7 = ("blue")
              activePlayer = 2
              cubeclicked = 7
              playerturn += 1
            } else {
              cube7 = ("red")
              activePlayer = 1
              cubeclicked = 7
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){
    if (mouseX > startx + (whidex * 1)) {
      if (mouseX < startx + whidex * 2) {
        if (mouseY > starty + (whidey * 1)) {
          if(mouseY < starty + (whidey * 2)) {
            if (cube8 == "white")
            if (activePlayer == 1) {
              cube8 = ("blue")
              activePlayer = 2
              cubeclicked = 8
              playerturn += 1
            } else {
              cube8 = ("red")
              activePlayer = 1
              cubeclicked = 8
              playerturn += 1
            }
  }}}}}
  if (mouseIsPressed){
    if (mouseX > startx + (whidex * 2)) {
      if (mouseX < startx + whidex * 3) {
        if (mouseY > starty + (whidey * 1)) {
          if(mouseY < starty + (whidey * 2)) {
            if (cube9 == "white")
            if (activePlayer == 1) {
              cube9 = ("blue")
              activePlayer = 2
              cubeclicked = 9
              playerturn += 1
            } else {
              cube9 = ("red")
              activePlayer = 1
              cubeclicked = 9
              playerturn += 1
            }
  }}}}}
  background(64, 64, 63);
  fill(cube1)
  rect(startx, starty, whidex, whidey,7);
  fill(cube2)
  rect(startx + whidex * 1, starty, whidex, whidey ,7);
  fill(cube3)
  rect(startx + whidex * 2, starty, whidex, whidey,7 );
  fill(cube4)
  rect(startx, starty + whidey * 1 , whidex, whidey,7 );
  fill(cube5)
  rect(startx, starty + whidey * 2 , whidex, whidey, 7);
  fill(cube6)
  rect(startx + whidex * 1, starty + whidey * 2 , whidex, whidey ,7);
  fill(cube7)
  rect(startx + whidex * 2, starty + whidey * 2 , whidex, whidey, 7);
  fill(cube8)
  rect(startx + whidex * 1, starty + whidey * 1 , whidex, whidey, 7);
  fill(cube9)
  rect(startx + whidex * 2, starty + whidey * 1 , whidex, whidey ,7);
  text("player ", activePlayer, "can play")
  test("won") 
}
function test(winner) {
  if (cube1 == "blue") { if (cube2 == "blue") { if(cube3 == "blue") {
    winner = 1
  }}} else {
    if (cube1 == "red") { if (cube2 == "red") { if(cube3 == "red") {
      winner = 2
  }}}}
  if (cube1 == "blue") { if (cube4 == "blue") { if(cube5 == "blue") {
    winner = 1
  }}} else {
    if (cube1 == "red") { if (cube4 == "red") { if(cube5 == "red") {
      winner = 2
  }}}}
  if (cube4 == "blue") { if (cube8 == "blue") { if(cube9 == "blue") {
    winner = 1
  }}} else {
    if (cube4 == "red") { if (cube8 == "red") { if(cube9 == "red") {
      winner = 2
  }}}}
  if (cube1 == "blue") { if (cube7 == "blue") { if(cube8 == "blue") {
    winner = 1
  }}} else {
    if (cube1 == "red") { if (cube7 == "red") { if(cube8 == "red") {
      winner = 2
  }}}}
  if (cube5 == "blue") { if (cube7 == "blue") { if(cube6 == "blue") {
    winner = 1
  }}} else {
    if (cube5 == "red") { if (cube7 == "red") { if(cube6 == "red") {
      winner = 2
  }}}}
  if (cube2 == "blue") { if (cube8 == "blue") { if(cube6 == "blue") {
    winner = 1
  }}} else {
    if (cube2 == "red") { if (cube8 == "red") { if(cube6 == "red") {
      winner = 2
  }}}}
  if (cube3 == "blue") { if (cube9 == "blue") { if(cube7 == "blue") {
    winner = 1
  }}} else {
    if (cube3 == "red") { if (cube9 == "red") { if(cube7 == "red") {
      winner = 2
  }}}}
  if (cube3 == "blue") { if (cube8 == "blue") { if(cube5 == "blue") {
    winner = 1
  }}} else {
    if (cube3 == "red") { if (cube8 == "red") { if(cube5 == "red") {
      winner = 2
  }}}}
  textSize(20);
  if (activePlayer == 1) {
    fill("blue")
    text(player1, 10, 10, 70, 80);
  } else {
    fill("red")
    text(player2, 10, 10, 70, 80);
  }
  textSize(23);
  if (winner == 1) {
    fill("blue")
    text(player1, 150, 300, 70, 80);
  } else {
    fill("red")
  }
if (playerturn == 9 && winner == "won") {
  fill("black")
  rect(0, 0, 400 ,400)
  fill("white")
  textSize(30)
  text("tie",175, 200)
  fill("white")
  rect(125, 250, 125 ,75)
  fill("black")
  text("restart",145, 300)
  if (mouseX >= 125 && mouseX <= 250) {
    if (mouseY >= 250 && mouseY <= 325) {
      if (mouseIsPressed) {
        setup()
      }
    }
}}

  if (winner == 1 | winner == 2) {
    fill("black")
    rect(0, 0, 400 ,400)
    fill("white")
    textSize(30)
    text(playerwon, 85, 200)
    fill("white")
    rect(125, 250, 125 ,75)
    fill("black")
    text("restart",145, 300)
    if (mouseX >= 125 && mouseX <= 250) {
      if (mouseY >= 250 && mouseY <= 325) {
        if (mouseIsPressed) {
          setup()
        }
      }
    }
  } 
}