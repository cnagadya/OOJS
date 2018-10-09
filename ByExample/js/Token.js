class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.moved = false;
  }
  /**
   * Draws new HTML token.
   */
  drawHTMLToken() {
    const token = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(token);
    token.setAttribute("id", this.id);
    token.setAttribute("class", "token");
    token.style.backgroundColor = this.owner.color;
  }

  /**Returns new HTML Token associated with the object */
  get htmlToken() {
    return document.getElementById(this.id);
  }
}
