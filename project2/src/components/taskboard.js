import React, { Component } from 'react';
import TaskBoardItem from "./taskboarditem";


class TaskBoard extends Component {
    render() {
        const items_toDo = this.props.items.map(item => {
            return <TaskBoardItem task={item} key={item.id} />
        });

        return (
            <div>
                <h1>Task Board</h1>

                <div id="board-container">
                    <div className="board-section">
                        <h2>To Do</h2>
                        { items_toDo }
                    </div>

                    <div className="board-section">
                        <h2>In Progress</h2>
                    </div>

                    <div className="board-section">
                        <h2>Review</h2>
                    </div>

                    <div className="board-section">
                        <h2>Done</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default TaskBoard;