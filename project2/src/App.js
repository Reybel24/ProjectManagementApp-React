import React, { Component } from 'react';
import TaskList from './components/tasklist';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
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





    render() {

        var {isLoaded, items } = this.state; // access these items

        if (!isLoaded) {
            return <div> Loading...</div>
        }

        else {
             return (
                 <TaskList items={this.state.items} onStatusChanged={(id, status)=>this.taskStatusChanged(id, status)}/>
    );
  } }
}

export default App;
