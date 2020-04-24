import React, {Component} from 'react';
import TileHeader from './TileHeader'
import { LineChart } from "@carbon/charts-react";
import { Dropdown, DatePicker, DatePickerInput } from 'carbon-components-react';
import "@carbon/charts/styles.css";
//import ThreatIncidentsFilter from './ThreatIncidentsFilter'

const viewFilter = [
  'All incidents',
  'High Risk',
  'Mid Risk',
  'Low Risk'
];

class ThreatIncidentsChart extends Component{
    
    d = [
        {
          "group": "High Risk",
          "date": "2018-12-31T18:30:00.000Z",
          "value": 5,
          "surplus": 37533813.05022552
        },
        {
          "group": "High Risk",
          "date": "2019-01-04T18:30:00.000Z",
          "value": 10,
          "surplus": 1226890049.1802392
        },
        {
          "group": "High Risk",
          "date": "2019-01-16T18:30:00.000Z",
          "value": 1,
          "surplus": 330190244.6531772
        },
        {
          "group": "Mid Risk",
          "date": "2019-01-01T18:30:00.000Z",
          "value": 10,
          "surplus": 12619.890091173742
        },
        {
          "group": "Mid Risk",
          "date": "2019-01-14T18:30:00.000Z",
          "value": 22,
          "surplus": 20424723.44334366
        },
        {
          "group": "Mid Risk",
          "date": "2019-01-18T18:30:00.000Z",
          "value": 30,
          "surplus": 480289282.9347868
        },
        {
          "group": "Low Risk",
          "date": "2018-12-31T18:30:00.000Z",
          "value": 36,
          "surplus": 834933714.2904129
        },
        {
          "group": "Low Risk",
          "date": "2019-01-04T18:30:00.000Z",
          "value": 40,
          "surplus": 11753.118646578687
        },
        {
          "group": "Low Risk",
          "date": "2019-01-12T18:30:00.000Z",
          "value": 0,
          "surplus": 773553956.2453315
        }
      ]

    options = {
        "axes": {
          "bottom": {
            "mapsTo": "date",
            "scaleType": "time"
          },
          "left": {
            "mapsTo": "value",
            "title": "No. of incidents",
            "scaleType": "linear"
          }
        },
        "height" : "200px"
      }

    constructor(props) {
      super(props);
      this.state = {
          threatIncidentLevel : 'All incident',
          chartData : this.d 
      }
    }
    
    action = (e) => {
      console.log("onchange: " + e.selectedItem);
      var arr = null;
      if(e.selectedItem === 'All incidents') {
        arr = this.d;
      } else {
        arr = this.d.filter(d => d.group === e.selectedItem);
      }

      console.log(arr);

      this.setState({
          threatIncidentLevel : e.selectedItem,
          chartData : arr
      });
    }

    render() {
        return (
            <div class="widget-section section--height-small">
                <React.Fragment>
                  <div class="bx--grid">
                      <TileHeader headingtext="Number of threat incidents"/>
                      <div class="bx--row">
                        <div class="bx--col">View</div>
                        <div class="bx--col">
                          <Dropdown
                              light
                              inline
                              onChange={ this.action }
                              ariaLabel="Dropdown"
                              id="tile-filter"
                              items={viewFilter}
                              label="All incidents"
                              /> 
                        </div>
                        <div class="bx--col">
                        <DatePicker dateFormat="m/d/Y" datePickerType="range">
                          <DatePickerInput
                            id="date-picker-range-start"
                            placeholder="mm/dd/yyyy"
                            labelText="Date Picker label"
                            type="text"
                          />
                          <DatePickerInput
                            id="date-picker-range-end"
                            placeholder="mm/dd/yyyy"
                            labelText="Date Picker label"
                            type="text"
                          />
                        </DatePicker>
                        </div>
                      </div>
                      <div class="bx--row">
                        <LineChart data={this.state.chartData} options={this.options}></LineChart>
                      </div>
                  </div>
                </React.Fragment>
            </div>
        );
    }
}
export default ThreatIncidentsChart;