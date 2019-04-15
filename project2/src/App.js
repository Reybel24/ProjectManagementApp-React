import React, { Component } from 'react';

import PageTabs from './components/pagetabs';
import TaskList from './components/tasklist';
import TaskBoard from './components/taskboard';

const LARGE_DESKTOP_BREAKPOINT = 1366;
const SMALL_DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            view: 'TaskBoard',

            // Responsive
            browserWidth: 0,
            breakpoint: 'large-desktop'
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

        // Responsive
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
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

    handleResize = () => {
        const browserWidth = window.innerWidth;
        let breakpoint = 'large-desktop';

        if (browserWidth < LARGE_DESKTOP_BREAKPOINT && browserWidth >= SMALL_DESKTOP_BREAKPOINT) {
            breakpoint = 'small-desktop';
        } else if (browserWidth < SMALL_DESKTOP_BREAKPOINT && browserWidth >= TABLET_BREAKPOINT) {
            breakpoint = 'tablet';
        } else if (browserWidth < TABLET_BREAKPOINT) {
            breakpoint = 'mobile';
        }

        this.setState({ breakpoint, browserWidth });
        console.log("current breakpoint is: " + breakpoint);
    }

    moveTaskTo(task, dest)
    {
        //console.log("Moving task " + task.title + " to " + dest);
        switch (dest)
        {
            case 0:
                task.column = "todo";
                break;

            case 1:
                task.column = "in-progress";
                break;

            case 2:
                task.column = "review";
                break;

            case 3:
                task.column = "done";
                break;

            default:
                console.log("none");
        }
    }


    render() {
        const{view} = this.state;

        switch (view) {
            case "TaskList":
                return (this.wrapPage(<TaskList items={this.state.items} onStatusChanged={(id, status)=>this.taskStatusChanged(id, status)}/>));
            case "TaskBoard":
                console.log("REFRESH");
                return (this.wrapPage(<TaskBoard items={this.state.items} moveTask={this.moveTaskTo} size={this.state.breakpoint} />));
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
