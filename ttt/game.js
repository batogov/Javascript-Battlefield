var board = [];
var isNewGame = true;
var currentPlayer = 'X';

newGame();


function changeCurrentPlayer() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}


function updateBoard(i, player) {
    if (player == 'X') {
        board[i] = 1;
    } else {
        board[i] = -1;
    }
}


function checkForWin(player) {
    if (player == 'X') {
        sign = 1;
    } else {
        sign = -1;
    }

    // проверяем горизонтальные линии
    for (var i = 0; i <= 6; i += 3) {
        if (board[i] + board[i + 1] + board[i + 2] == sign * 3) {
            return [i, i + 1, i + 2];
        }
    }
    // проверяем вертикальные линии
    for (var i = 0; i <= 2; i++) {
        if (board[i] + board[i + 3] + board[i + 6] == sign * 3) {
            return [i, i + 3, i + 6];
        }
    }
    // проверяем главную диагональ
    if (board[0] + board[4] + board[8] == sign * 3) {
        return [0, 4, 8];
    }
    // проверяем побочную диагональ
    if (board[2] + board[4] + board[6] == sign * 3) {
        return [2, 4, 6];
    }
    // если победы нет - возвращаем false
    return false;
}


function newGame() {
    if (isNewGame) {
        // инициализируем поле
        board = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];

        // обнуляем все отметки ходов
        for (var i = 0; i <= 8; i++) {
            square = document.getElementById(i);
            square.textContent = '';
            square.className = '';
        }

        currentPlayer = 'X';

        statusText = document.querySelector('.status-text');

        statusText.className = 'status-text ' + currentPlayer;
        statusText.textContent = 'Начало игры! Первым ходит «' + currentPlayer + '»';
        document.querySelector('.new-game-text').style.display = 'none';

        isNewGame = false;
    }

}


function checkForTie() {
    // проверка на ничью
    if (board.indexOf(0) == -1) {
        return true;
    } else {
        return false;
    }
}


function squareClick(square) {
    i = square.id;
    if (board[i] === 0 && isNewGame === false) {

        square.textContent = currentPlayer;
        square.className = currentPlayer + ' animated bounceInLeft';

        updateBoard(i, currentPlayer);

        win = checkForWin(currentPlayer);

        if (win != false) {
            statusText = document.querySelector('.status-text');
            statusText.textContent = 'Победил «' + currentPlayer + '».';
            document.querySelector('.new-game-text').style.display = 'inline-block';

            for (var i in win) {
                square = document.getElementById(win[i]);
                square.classList.add("win-square");
            }

            isNewGame = true;
        } else if (checkForTie() === true) {
            statusText = document.querySelector('.status-text');
            statusText.textContent = 'Ничья!';
            statusText.className = 'status-text';
            document.querySelector('.new-game-text').style.display = 'inline-block';

            isNewGame = true;
        } else {
            changeCurrentPlayer();

            statusText = document.querySelector('.status-text');
            statusText.className = 'status-text ' + currentPlayer;
            statusText.textContent = 'Сейчас ходит «' + currentPlayer + '»';
        }
    }
}
