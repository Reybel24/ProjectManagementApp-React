import React, { Component } from 'react';

import PageTabs from './components/pagetabs';
import TaskList from './components/tasklist';
import TaskBoard from './components/taskboard';
import TaskBoardItem from './components/taskboarditem';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            view: 'TaskBoard',
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/amishin/project2_db/posts')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json, //get data from api
                })
            });
    }

    taskStatusChanged = (id, column) => {
        const itemIndex = this.state.items.findIndex(_=>_.id === id);
        if(itemIndex !== -1){
            const item = {...this.state.items[itemIndex], column};
            const newItems = [...this.state.items];
            newItems[itemIndex] = item;
            this.setState({items: newItems });
        }
        console.log("taskStatusChanged", id, column);
    }


    onViewChange(view) {
        this.setState({view});
    }

    wrapPage(jsx) {
        const {view} = this.state;
        return (
            <div className="page_container">
                <PageTabs currentView={{view}}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }


    render() {
        const{view} = this.state;

        switch (view) {
            case "TaskList":
                return (this.wrapPage(<TaskList items={this.state.items} onStatusChanged={(id, status)=>this.taskStatusChanged(id, status)}/>));
            case "TaskBoard":
                return (this.wrapPage(<TaskBoard items={this.state.items} />));
        }

        var {isLoaded, items } = this.state; // access these items

        if (!isLoaded) {
            return <div> Loading...</div>
        }
        else {
             return (
                 <TaskList items={this.state.items} onStatusChanged={(id, status)=>this.taskStatusChanged(id, status)}/>
                 );
        }
    }
}

export default App;
