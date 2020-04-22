import React, { Component } from 'react';
import { Dropdown } from 'carbon-components-react';

const viewFilter = [
    'All incidents',
    'High Risk',
    'Mid Risk'
];

export default class ThreatIncidentsFilter extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            threatIncidentLevel : 'All incident'
        }
    }
    
    action = (e) => {
        console.log("onchange: " + e.selectedItem);
        this.setState({
            threatIncidentLevel : e.selectedItem
        });
    }

    handleSubmit = () => {
        console.log("submit: " + this.state.threatIncidentLevel);
    }

    render() {
        return (
            <div class="bx--row">
                <div class="bx--col-lg-2 bx--col-md-1 bx--col-sm-1">View</div>
                <div class="bx--col-lg-6 bx--col-md-3 bx--col-sm-1">
                    <form onSubmit={this.handleSubmit}>
                        <Dropdown
                            light
                            inline
                            onChange={ this.action }
                            ariaLabel="Dropdown"
                            id="tile-filter"
                            items={viewFilter}
                            label="All incidents"
                            /> 
                    </form>   
                </div>
            </div>

        );
    }
}