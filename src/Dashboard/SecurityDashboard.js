import React, { Component } from 'react';
import './SecurityDashboard.scss';
import DashboardActions from './DashboardActions'
import InfoTiles from './InfoTiles'
import ThreatAlertsGrid from './ThreatAlertsGrid'
import ThreatIncidentsChart from './ThreatIncidentsChart'
import DashboardHeader from './DashboardHeader'
import DashboardFilter from './DashboardFilter'

class SecurityDashboard extends Component {
    render() {
        return (
            <div class="bx--grid">
                
                <DashboardHeader />
                
                <div class="bx--row bx--row-margin">
                    <div class="bx--col-lg-12 bx--col-md-5 bx--col-sm-2">
                        <DashboardFilter />
                    </div>
                    <div class="bx--col-lg-4 bx--col-md-3 bx--col-sm-2">
                        <DashboardActions />
                    </div>
                </div>
                
                <InfoTiles />
    
                <div class="bx--row bx--row-margin">
                    <div class="bx--col"><ThreatAlertsGrid /></div>
                    <div class="bx--col"><ThreatIncidentsChart /></div>
                </div>
                <div class="bx--row bx--row-margin">
                    <div class="bx--col">Risky users</div>
                    <div class="bx--col">Risky devices</div>
                    <div class="bx--col">Org risk score trend</div>
                </div>
                <div class="bx--row bx--row-margin">
                    <div class="bx--col">Risky users</div>
                    <div class="bx--col">Risky devices</div>
                    <div class="bx--col">Org risk score trend</div>
                </div>
            </div>
        );
    }
}

export default SecurityDashboard;