var yarg = require('yargs').argv;

let move=''

class Game {
  constructor(player, computer){
    this.player1=player
    this.player2=computer
    this.moves=['rock', 'paper', 'scissors']
  }

  validateMove(){
    if(!this.moves.includes(yarg.move)){
      console.log(`${yarg.move} not a move option`);
    }
  }
  start(){
    console.log(`Playing a game of Roshambo against the computer.`);
    this.validateMove()
  }
  determineWinner(){
    if(this.player1.move === this.player2.move){
      console.log('Tie!');
    }else if(this.player1.move === 'rock' && this.player2.move=== 'scissors'){
      console.log(`~${this.player1.name} wins~`);
  }else if(this.player1.move === 'rock' && this.player2.move=== 'paper'){
      console.log(`~${this.player2.name} wins~`);
  }else if(this.player1.move === 'scissors' && this.player2.move=== 'paper'){
      console.log(`~${this.player1.name} wins~`);
  }else if(this.player1.move === 'scissors' && this.player2.move=== 'rock'){
      console.log(`~${this.player2.name} wins~`);
  }else if(this.player1.move === 'paper' && this.player2.move=== 'rock'){
      console.log(`~${this.player1.name} wins~`);
  }else if(this.player1.move === 'paper' && this.player2.move=== 'scissors'){
      console.log(`~${this.player2.name} wins~`);
    } 
  }

}

class Player {
  constructor(name){
    this.move = `${yarg.move}`
    this.name = name
    this.possibleMoves=['rock', 'paper', 'scissors']
  }
  randomize(){
    let randomIndex = Math.floor(Math.random()*3)
    this.move=this.possibleMoves[randomIndex]
  }
  showMove(){
    console.log(`${this.name} plays ${this.move}`);
  }

}

const player = new Player('Player')
const computer = new Player('Computer')
computer.randomize()
const roshambo = new Game(player, computer)

roshambo.start()
player.showMove()
computer.showMove()
roshambo.determineWinner()
