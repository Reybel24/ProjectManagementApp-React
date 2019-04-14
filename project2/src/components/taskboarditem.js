import React, { Component } from 'react';

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

    render() {
        return (
            <div className="card-task">
                <h3 className="card-header">{this.props.task.title}</h3>
                <h5 className="card-attributes">ID: {this.props.task.id}</h5>
                <h5 className="card-attributes">Type: {this.props.task.type}</h5>

                {/* Decide what actions to allow on this card item */}

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "todo" && <button className="button-taskMove"onClick={ () => this.moveCardTo(this.props.task, 1)}>Begin Work</button> }

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "in-progress" && <button className="button-taskMove" onClick={ () => this.moveCardTo(this.props.task, 0)}>Send Back</button> }
                { this.props.task.column === "in-progress" && <button className="button-taskMove" onClick={ () => this.moveCardTo(this.props.task, 2)}>Request Review</button> }

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "review" && <button className="button-taskMove" onClick={ () => this.moveCardTo(this.props.task, 1)}>More Work Required</button> }
                { this.props.task.column === "review" && <button className="button-taskMove" onClick={ () => this.moveCardTo(this.props.task, 3)}>Mark Done</button> }

                {/* Show "start work" to move to in progress */}
                { this.props.task.column === "done" && <button className="button-taskMove" onClick={ () => this.moveCardTo(this.props.task, 2)}>Request Re-Review</button> }




            </div>
        )
    }
}

export default TaskBoardItem;