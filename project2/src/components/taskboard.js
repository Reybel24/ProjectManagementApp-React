import React, { Component } from 'react';
import TaskBoardItem from "./taskboarditem";
import './taskboard.css';


class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        // Currently active column for mobile
        activeColumn: 'todo'
    }

    handleClick(task, dest)
    {
        // Move the card to wherever its going using the moveTask function in the parent
        this.props.moveTask(task, dest)

        // Force update to reflect changes
        this.setState({ state: this.state })
    }

    filterCards = (column, fun) =>
    {
        // Filter items by column
        return this.props.items.filter((task) =>
        {
            // Condition to filter by
            return task.column == column;
        }).map((task) => (
            // Create the task
            <TaskBoardItem key={task.id} task={task} handler={this.handleClick} />
        ), this)

    }

    onSelectColumn = (activeColumn) => {
        console.log("column changed to: " + activeColumn);
        this.setState({activeColumn});
    }


    render() {
        return (
            <div>
                <select value={this.state.activeColumn} className={this.props.size == "mobile" ? '' : 'hidden'}
                        onChange={event => this.onSelectColumn(event.target.value)}>
                    <option>todo</option>
                    <option>in-progress</option>
                    <option>review</option>
                    <option>done</option>
                </select>
                <div id="boards-container">
                    <h1>Task Board</h1>

                    {/* Section: To do */}
                    <section className={this.state.activeColumn != "todo" && this.props.size == "mobile" ? 'board hidden' : 'board'} id="todo">
                        <h2 className="board-header" id="todo">To Do</h2>
                        { this.filterCards("todo", this.handleClick) }
                    </section>

                    {/* Section: In Progress */}
                    <section className={this.state.activeColumn != "in-progress" && this.props.size == "mobile" ? 'board hidden' : 'board'} id="in-progress">
                        <h2 className="board-header" id="in-progress">In Progress</h2>
                        { this.filterCards("in-progress", this.handleClick) }
                    </section>

                    {/* Section: Review */}
                    <section className={this.state.activeColumn != "review" && this.props.size == "mobile" ? 'board hidden' : 'board'} id="review">
                        <h2 className="board-header" id="review">Review</h2>
                        { this.filterCards("review", this.handleClick) }
                    </section>

                    {/* Section: Done */}
                    <section className={this.state.activeColumn != "done" && this.props.size == "mobile" ? 'board hidden' : 'board'} id="done">
                        <h2 className="board-header" id="done">Done</h2>
                        { this.filterCards("done", this.handleClick) }
                    </section>


                </div>

            </div>
        )
    }

}

export default TaskBoard;