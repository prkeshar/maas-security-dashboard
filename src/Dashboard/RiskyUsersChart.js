import React, { Component } from 'react';
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

class RiskyUsersChart extends Component{
    state = {
		data: [
			{
		"group": "Severe Risk",
		"value": 20000
        },
        {
            "group": "High Risk",
            "value": 65000
        },
        {
            "group": "Mid Risk",
            "value": 75000
        },	
        
        {
            "group": "Misc",
            "value": 5000
        }
		],
		options: {

			"resizable": true,
			"donut": {
				"center": {
					"label": "Risky Users"
					}
			},
			"height": "300px"
		}	
    };
    
    render() {
        return (
            <div class="widget-section section--height-small">
                <React.Fragment>
                    <DonutChart
                    data={this.state.data}
                    options={this.state.options}>
                    </DonutChart>
			    </React.Fragment>
            </div>
        );
    }
}

export default RiskyUsersChart;