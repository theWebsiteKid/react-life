// dumb components
let BoardSquare = () =>
    <div className='board-square'></div>;

let BoardRow = () =>
    <div className='board-row'>
        <BoardSquare/>
        <BoardSquare/>
        <BoardSquare/>
    </div>;

// smart components
class Board extends React.Component {
    render() {
        return <h1>App Works!</h1>
    };
};

ReactDOM.render(<Board/>, document.querySelector('.app'));