class Player {
  constructor(name, id, color, isTurn = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = this.createTokens(21);
  }
  /**
   * Creates tokens for the player
   * @param {number} num - The value of the no of tokens to be created
   */

  createTokens(num) {
    const tokens = [];
    for (let i = 0; i < num; i++) {
      let token = new Token(this, i);
      tokens.push(token);
    }
    return tokens;
  }
  /** 
   * Gets tokens that havevnot been played yet that belong to the player
   * @return {array} Array of unused tokens 
  */
  get unusedTokens() {
    const unused = this.tokens.filter(token => !token.moved);
    return unused;
  }
  /**
   * Gets player's token currently in play by returning the first token in the unused token array
   * @return {Object} First token object in the array of unused tokens
   */
  get activeToken() {
    return this.unusedTokens[0]
  }
}
