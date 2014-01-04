(function(root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var Board = SnakeGame.Board = function () {
		this.gridSize = 20;
		this.grid = this.makeGrid();
		this.midpoint = [
			Math.floor(this.gridSize / 2),
			Math.floor(this.gridSize / 2)
		];
		this.snake = new SnakeGame.Snake(this);
	};

	Board.prototype.coordIncludes = function (arrOfCoords, target) {
		for(var i = 0; i < arrOfCoords.length; i++) {
			if (arrOfCoords[i][0] === target[0] && arrOfCoords[i][1] === target[1]) {
				return true;
			}
		}
		return false;
	};

	Board.prototype.makeGrid = function () {
		var board = this;
    return _.times(board.gridSize, function (i) {
      return _.times(board.gridSize, function (j) {
        return null;
      });
    });
	};

	Board.prototype.render = function () {
		var text = "";

		for(var i = 0; i < this.gridSize; i++) {
			for(var j = 0; j < this.gridSize; j++) {
				if (this.coordIncludes(this.snake.segments, [i, j])) {
					text += " S";
				} else {
					text += " .";
				}
			}

			text += "\n";
		}

		return text;
	};

})(this);