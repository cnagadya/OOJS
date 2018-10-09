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
    this.activePlayer.activeToken.drawHTMLToken()
    this.ready = true;
  }

  /**Gets active player
   * @return {Object} Active Player object
   */
  get activePlayer() {
    return this.players.find(player => player.isTurn);
  }
}
