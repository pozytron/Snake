import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      const boardStyles = {backgroundColor: "MistyRose", border:"1px solid black", width: "500px", height: "550px", position:"relative"}
        return (
            <div className="board" style={boardStyles}>
                <h1>Snake Game</h1>
                <div>
                    <span> Score: {this.props.score}</span>
                </div>
            </div>
        )
    }
}

class Grid extends React.Component {
    constructor(props){
        super(props);

    }
    render() {

        let gridArr = [];

        return (
            <div
                className="grid" style={{backgroundColor:"LightGray", border:"2px solid black", width: "400px", height:"400px", position:"absolute", left:"55px", top:"120px"}}>
                {gridArr}
            </div>

        )
    }
}

class Snake extends React.Component {
    constructor(props){
        super(props);
       // this.handleKey = this.handleKey.bind(this); // donno...
    }

    // poruszanie sie snakeeee'a
    handleKey = (e) => {
        const direction = e.keyCode;
        // console.log(direction);
        switch(e.keyCode) {
            case 37:
            console.log("LEFT");
                if(this.props.direction !== "RIGHT" && this.props.moving){
                    this.props.changeDirection("LEFT")
                }
                break;
            case 38:
            console.log("UP");
                if(this.props.direction !== "DOWN" && this.props.moving){
                    this.props.changeDirection("UP")
                }
                break;
            case 39:
            console.log("RIGHT");
                if(this.props.direction !== "LEFT" && this.props.moving){
                    this.props.changeDirection("RIGHT")
                }
                break;
            case 40:
            console.log("DOWN");
                if(this.props.direction !== "UP" && this.props.moving) {
                    this.props.changeDirection("DOWN")
                }
                break;
            default:
                break;
        }
    }
    //poruszanie sie snake nawet jesli user pozostaje bierny
    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(),100);
    }
    componentWillUnmount() {
        //clearInterval(this.timerID);
    }
    tick() {
       // console.log("Tick!");
    }

    componentWillMount(){
      document.addEventListener("keydown",this.handleKey)
    }
    render() {
        const snakeStyle = {
          width: "20px",
          height: "20px",
          backgroundColor: "blue",
          position: "absolute",
          top: "300px",
          left: "235px" }

        return (<div className="snakeBody"  style={snakeStyle}>
            </div>

        )
    }
}
class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
        direction: "DOWN",
        moving: true,
        score: 0
      }
    }
    changeDirection = (data)=>{
      console.log("Change direction in app from:",this.state.direction,"to:",data);

      this.setState({
        direction: data
      })
    }
    render(){
        return (
            <div  className="app">
                <Board score={this.state.score}/>
                <Grid />
                <Snake direction={this.state.direction} moving={this.state.moving} changeDirection={this.changeDirection} />
            </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
