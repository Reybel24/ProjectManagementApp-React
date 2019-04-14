import React, { Component } from 'react';
import TaskBoardItem from "./taskboarditem";
import './taskboard.css';


class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        // Force update
        console.log("whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
        this.setState({ state: this.state })
    }

    filterCards = (column, fun) =>
    {

        console.log("Filtering by: " + column);
        // Filter items by column
        return this.props.items.filter((task) =>
        {
            // Condition to filter by
            return task.column == column;
        }).map((task) => (
            // Create the task
            //console.log(this);
            <TaskBoardItem key={task.id} task={task} handler={this.handleClick} />
        ), this)

    }



    render() {
        /*
        // Create task cards
        const itemCards = this.props.items.map(item => {
            return <TaskBoardItem task={item} key={item.id} />
        });

        // Place cards
        itemCards.map(item => {
            return <h5>ahhhh</h5>
        });
        */

        return (
            <div>
                <h1>Task Board</h1>
                <div id="boards-container">

                    {/* Section: To do */}
                    <section className="board" id="todo">
                        <h2 className="board-header" id="todo">To Do</h2>
                        { this.filterCards("todo", this.handleClick) }
                    </section>

                    {/* Section: In Progress */}
                    <section className="board" id="in-progress">
                        <h2 className="board-header" id="in-progress">In Progress</h2>
                        { this.filterCards("in-progress", this.handleClick) }
                    </section>

                    {/* Section: Review */}
                    <section className="board" id="review">
                        <h2 className="board-header" id="review">Review</h2>
                        { this.filterCards("review", this.handleClick) }
                    </section>

                    {/* Section: Done */}
                    <section className="board" id="done">
                        <h2 className="board-header" id="done">Done</h2>
                        { this.filterCards("done", this.handleClick) }
                    </section>


                </div>

            </div>
        )
    }

}

export default TaskBoard;