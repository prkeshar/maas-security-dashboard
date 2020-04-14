import React, { Component } from 'react';
import { Dropdown } from 'carbon-components-react';

const viewFilter = [
    'All organization',
    'All devices'
];

export default class DashboardFilter extends Component {  
    render() {
        return (
            <div class="filterDrpDwn">
                <Dropdown
                    light
                    ariaLabel="Dropdown"
                    id="dashboard-filter"
                    items={viewFilter}
                    label="All organization"
                    titleText="View"
                    />
            </div>

        );
    }
}