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
        return (
            <div className='board'>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
            </div>
        );
    };
};

ReactDOM.render(<Board/>, document.querySelector('.app'));