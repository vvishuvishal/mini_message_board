const gameBoard = (() => {
    // Creates players
    const playerFactory = (name, mark, ai, turn) => {
        return { name, mark, ai, turn };
    };

    const player1 = playerFactory('player 1', 'X', false, true);
    const player2 = playerFactory('Player 2', 'O', false, false);

    // Possible win combinations
    const winCombos = [
        [0,1,2],
        [0,3,6],
        // Add more possible winCombos. Hint: There are total 8 win combos.
    ];
    
    let winner = null;
    
    // Turn counter
    let turns = 0;

    // Board array
    let board = [];
 
    // Winner combination array
    let winnerCombo = [];
    
    // Function when making a move
    const playerTurn = (function () {
        const box = document.querySelectorAll('.box');
        box.forEach( box => {
            box.addEventListener('click', e => {
                // X player move if conditions are met
                if (player1.turn == true && gameBoard.winner == null
                    && e.target.textContent == '') {
                    // Adds move to array
                   
                    // Board styling
                   
                    // Sets player turns
                   
                    
                    console.log(board)
                // O player move if conditions are met   
                } else if (player2.turn == true && gameBoard.winner == null
                    && e.target.textContent == '' && player2.ai == false) {
                    // Adds move to array    
                  
                    // Board styling
                    
                    // Sets player turns
                   
                    
                    console.log(board)
                } else {
                    return;
                };

                winCheck();

                // Fade effect using opacity
                box.style.opacity = '1';  
            });
        });
        return { box }
    })();
    
  
    
    // Checks for a winner
    winCheck = () => {
        turns++;

        // Seperates each player X | O move into 2 diffrent arrays
       
        // Loop iterates over each winCombo array 
        
        // Display the winner
        
    };


    //**************************Don't make any changes below. The functions below are complete */


    // Resets board and display
    gameReset = () => {
        gameBoard.winner = null;
        gameBoard.winnerCombo = undefined;
        player1.turn = true;
        player2.turn = false;
        player2.ai = false;
        turns = 0;
        board.splice(0, board.length);
        console.log(board, winner, player1.turn, player2.turn)
    };
    console.log(board, winner, player1.turn, player2.turn)

    return { winCheck, gameReset, playerTurn, board, player2, winnerCombo };
})();

// Controls the display
const displayController = (() => {
    const boxCtn = document.querySelector('.box-ctn');
    const box = document.querySelectorAll('.box');
    const winCtn = document.querySelector('.win-display');
    // Display winner function 
    winDisplay = () => {
        // Displays the win combo
        combDisplay = () => {
            for(i = 0; i < gameBoard.winnerCombo.length; i++) {
                document.getElementById(gameBoard.winnerCombo[i]).style.
                  backgroundColor = 'rgba(0, 0, 0, 0.040)';
            };
        };    
        // Displays the winner
        if(gameBoard.winner === 'p1') {
            winCtn.textContent = 'X Wins the round!';
            combDisplay();

        } else if (gameBoard.winner === 'p2') {
            winCtn.textContent = 'O Wins the round!';
            combDisplay();
            
        } else if (gameBoard.winner === 'tie') {
            winCtn.textContent = 'It\'s a tie!';
            
        } else {
            return;
        };

        replayBtn.style.display = 'flex';
        backBtn.style.display = 'flex';
        console.log(gameBoard.winnerCombo)
    };
    // Board render 
    gamePlay = () => {
        winCtn.style.display = 'block';

        header.style.display = 'none';
     
        playBtn.style.display = 'none';

        // playBtnAi.style.display = 'none';
        
        boxCtn.style.display = 'flex';

        backBtn.style.display = 'flex';
    };



    // Resets board and display
    gameReplay = () => {
        gameBoard.gameReset();

        box.forEach( box => {
            box.textContent = '';
            box.style.opacity = '0';
            box.style.backgroundColor = 'white';
        });

        replayBtn.style.display = 'none';

        winCtn.textContent = '';
    };
    
    // Back to main button 
    mainPage = () => {
        // styling
        boxCtn.style.display = 'none';

        winCtn.style.display = 'none';

        backBtn.style.display = 'none';

      //  playBtnAi.style.display = 'flex';

        playBtn.style.display = 'flex';

        header.style.display = 'flex';
        // Resets board and display  
        gameReplay();
    };


    
    // Event listeners 
    const playBtn = document.getElementById('play-btn');
    playBtn.addEventListener('click', gamePlay);

    const replayBtn = document.querySelector('.replay-btn');
    replayBtn.addEventListener('click', gameReplay);

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', mainPage);

    const header = document.querySelector('header');

    return { winDisplay, gamePlay }
})();









