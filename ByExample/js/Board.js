/** Class for the game board */
class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces ie spaces is an array of arrays.
   * @return  {Array}     An array of space objects
   */
  createSpaces() {
    const spaces = [];
    for (let x = 0; x < this.columns; x++) {
      const columnArr = [];
      for (let y = 0; y < this.rows; y++) {
        let space = new Space(x, y);
        columnArr.push(space);
      }
      spaces.push(columnArr);
      debugger;
    }
    return spaces;
  }
  /**
   * Draws associated SVG spaces for all game spaces
   */
  drawHTMLBoard() {
    this.spaces.map(columnArr => columnArr.map(space => space.drawSVGSpace()));
  }
}
