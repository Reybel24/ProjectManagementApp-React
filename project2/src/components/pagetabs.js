import React, { Component } from 'react';
import '../pagetabs.css';

class PageTabs extends Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <div className='container'>
            <thead className='page_tabs'>
            <tr className='tab_items'>
                <td>
                <a className={this.isActiveTab('TaskList')}
                   onClick={(e) => this.onTabClick(e, 'TaskList')}>
                    List View
                </a>
                </td>

                <td>
                    <a className={this.isActiveTab('TaskGrid')}
                       onClick={(e) => this.onTabClick(e, 'TaskGrid')}>
                        Board View
                    </a>
                </td>
            </tr>
        </thead>
</div>
        )
    }
};

export default PageTabs;