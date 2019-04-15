import React, { Component } from 'react';
import icon_todo from '../images/menu.png';
import icon_inProgress from '../images/flask.png';
import icon_review from '../images/task.png';
import icon_check from '../images/check.png';

class TaskBoardItem extends Component {
    constructor(props) {
        super(props);
        this.moveCardTo = this.moveCardTo.bind(this);
    }

    moveCardTo(task, dest)
    {
        //console.log("Moving task " + task.title + " to " + dest);

        switch (dest)
        {
            case 0:
                task.column = "todo";

                // Update this item
                this.setState({ state: this.state })

                // Update entire UI
                this.props.handler();

                break;

            case 1:
                task.column = "in-progress";

                // Update this item
                this.setState({ state: this.state })

                // Update entire UI
                this.props.handler();

                break;

            case 2:
                task.column = "review";

                // Update this item
                this.setState({ state: this.state })

                // Update entire UI
                this.props.handler();

                break;

            case 3:
                task.column = "done";

                // Update this item
                this.setState({ state: this.state })

                // Update entire UI
                this.props.handler();

                break;

            default:
                console.log("none");
        }
    }

    // Return the correct icon depending on column
    getIcon(column) {
        switch (column) {
            case "todo":
                return icon_todo;
                break;

            case "in-progress":
                return icon_inProgress;
                break;

            case "review":
                return icon_review;
                break;

            case "done":
                return icon_check;
                break;

        }
    }

    render() {
        return (
            <div className="card-task">
                <div className="card-top">
                    <img className="card-img" src={ this.getIcon(this.props.task.column) } />
                    <h3 className="card-header">{this.props.task.title}</h3>
                </div>
                <div className="card-middle">
                    <h5 className="card-attribute">ID: {this.props.task.id}</h5>
                    <h5 className="card-attribute">Type: {this.props.task.type}</h5>
                </div>

                {/* Decide what actions to allow on this card item */}

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "todo" && <button className="button-taskMove" id="toInProgress" onClick={ () => this.moveCardTo(this.props.task, 1)}>Begin Work</button> }

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "in-progress" && <button className="button-taskMove" id="toToDo" onClick={ () => this.moveCardTo(this.props.task, 0)}>Send Back</button> }
                { this.props.task.column === "in-progress" && <button className="button-taskMove" id="toReview" onClick={ () => this.moveCardTo(this.props.task, 2)}>Request Review</button> }

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "review" && <button className="button-taskMove" id="toInProgress" onClick={ () => this.moveCardTo(this.props.task, 1)}>More Work Required</button> }
                { this.props.task.column === "review" && <button className="button-taskMove" id="toDone" onClick={ () => this.moveCardTo(this.props.task, 3)}>Mark Done</button> }

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "done" && <button className="button-taskMove" id="toReview" onClick={ () => this.moveCardTo(this.props.task, 2)}>Request Re-Review</button> }




            </div>
        )
    }
}

export default TaskBoardItem;