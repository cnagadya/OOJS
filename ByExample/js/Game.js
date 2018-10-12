class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const player1 = new Player("Christine", 1, "purple", true);
    const player2 = new Player("Ritah", 2, "lime");
    return [player1, player2];
  }
  /**
   * Gets game ready for play
   */
  startGame() {
    console.log("game should start");
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**Gets active player
   * @return {Object} Active Player object
   */
  get activePlayer() {
    return this.players.find(player => player.isTurn);
  }

  /**Creates operation to be created when a key is pressed
   * @param {String} eventKey = Value of the key pressed down
   */
  handleKeydown(eventKey) {
    if (this.ready) {
      if (eventKey === "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (eventKey === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (eventKey === "ArrowDown") {
        this.playToken();
      }
    }
  }
  /**
   * Plays the players active token
   */
  playToken() {
    // let tokenToPlay = this.activePlayer.activeToken;
    // let targetToken = this.board.spaces[tokenToPlay.columnLocation];
    // let targetSpace;
    // //to recheck later
    // targetSpace = targetColumn.find(space => space.token === null);
    // if (targetSpace !== "undefined") {
    //   game.ready = false;
    //   this.tokenToPlay.drop(targetToken);
    // }
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;
    debugger;
    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }

    if (targetSpace !== null) {
      game.ready = false;
      activeToken.drop(targetSpace);
    }
  }
}
