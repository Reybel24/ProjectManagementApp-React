import React, { Component } from 'react';

class PageTabs extends Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.OnViewChange(tabName);
    }

    render () {
        return (
            <thead className='nav page-tabs'>
            <tr className='nav-item'>
                <a className={this.isActiveTab('TaskList')}
                   onClick={(e) => this.onTabClick(e, 'TaskList')}>
                    Grid View
                </a>
            </tr>
            <tr className='nav-item'>
                <a className={this.isActiveTab('TaskGrid')}
                   onClick={(e) => this.onTabClick(e, 'TaskGrid')}>
                    List View
                </a>
            </tr>
            <tr className='nav-item'>
                <a className={this.isActiveTab('AddTask')}
                   onClick={(e) => this.onTabClick(e, 'AddTask')}>
                    Add Task
                </a>
            </tr>
        </thead>
        )
    }
};

export default PageTabs;