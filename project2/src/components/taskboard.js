import React, { Component } from 'react';
import TaskBoardItem from "./taskboarditem";


class TaskBoard extends Component {

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

                <div id="board-container">
                    <div className="board-section" id="todo">
                        <h2>To Do</h2>
                        {
                            // Filter items and put into seperate arrays
                            this.props.items.filter(function (task)
                            {
                                // Condition to filter by
                                return task.column == "todo";
                            }).map(function (task)
                            {
                                // Create the task card
                                return <TaskBoardItem key={task.id} task={task}/>
                            })
                        }
                    </div>

                    <div className="board-section" id="todo">
                        <h2>In Progress</h2>
                    </div>

                    <div className="board-section" id="todo">
                        <h2>Review</h2>
                    </div>

                    <div className="board-section" id="todo">
                        <h2>Done</h2>
                    </div>
                </div>

            </div>
        )
    }

}

export default TaskBoard;