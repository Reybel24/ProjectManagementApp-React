import React, { Component } from 'react';
import './tasklist.css';


class TaskList extends Component {
    state = {
        sort: {
            column: null,
            direction: null
        },
        statusFilter: '',
        typefilter: ''
    }

    onSortOrderChanged = (column)=>{
        if(this.state.sort.column === column) {
            let direction = '↑'
            if(this.state.sort.direction === '↑') {
                direction = '↓';
            }
            this.setState({sort :{column, direction}});
        }
        else {
            this.setState({sort :{column, direction: '↑'}});
        }
    }

    onStatusFilterChanged = (statusFilter)=>{
        this.setState({statusFilter });
    }

    onTypeFilterChanged = (typeFilter)=>{
        this.setState({typeFilter });
    }

    getFilteredItems(items){
        var filtered = items;
        if(this.state.typeFilter && this.state.typeFilter!=='')
            filtered = filtered.filter(_=>_.type === this.state.typeFilter);
        if(this.state.statusFilter && this.state.statusFilter!=='')
            filtered = filtered.filter(_=>_.column === this.state.statusFilter);
        return filtered;
    }

    getSortedItems(items) {
        if(this.state.sort.column) {
            const direction = this.state.sort.direction === '↑' ? -1 : 1;
            switch (this.state.sort.column) {
                case "title":
                    return items.sort((a, b)=>a.title<b.title ? direction: -direction);
                case "type":
                    return items.sort((a, b)=>a.type<b.type ? direction: -direction);
                case "status":
                    return items.sort((a, b)=>a.column<b.column ? direction: -direction);
            }
        }
        return items;
    }

    getArrowDirection(column){
        if(this.state.sort.column === column)
            return this.state.sort.direction;
        return null;
    }

    render() {
        return <div className='container'>
            <table className='table'>
                <thead className='table_head'>
                <tr>
                    <td onClick={()=>this.onSortOrderChanged('title')}>Title {this.getArrowDirection('title')}</td>
                    <td onClick={()=>this.onSortOrderChanged('type')}>Type {this.getArrowDirection('type')}</td>
                    <td onClick={()=>this.onSortOrderChanged('status')}>Status {this.getArrowDirection('status')}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <select value={this.state.typeFilter}
                            onChange={event => this.onTypeFilterChanged(event.target.value)}>
                        <option></option>
                        <option>task</option>
                        <option>feature</option>
                        <option>bug</option>
                    </select>
                    </td>
                    <td>
                        <select value={this.state.statusFilter}
                                onChange={event => this.onStatusFilterChanged(event.target.value)}>
                            <option></option>
                            <option>todo</option>
                            <option>in-progress</option>
                            <option>review</option>
                            <option>done</option>
                        </select>
                    </td>
                </tr>
                </thead>

                <tbody className='table_body'>
                {this.getFilteredItems(this.getSortedItems(this.props.items)).map(item => (
                    <tr className='table_row' key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.type}</td>
                        <td>
                            <div className='custom-select'>
                            <select value={item.column}
                                    onChange={event => this.props.onStatusChanged(item.id,event.target.value)}>

                            <option>todo</option>
                            <option>in-progress</option>
                            <option>review</option>
                                <option>done</option>
                            </select>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>;
    }
}

export default TaskList;