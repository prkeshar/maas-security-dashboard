import React, { Component } from 'react';
import './SecurityDashboard.scss';
import DashboardActions from './DashboardActions'
import InfoTiles from './InfoTiles'
import ThreatAlertsGrid from './ThreatAlertsGrid'
import ThreatIncidentsChart from './ThreatIncidentsChart'
import DashboardHeader from './DashboardHeader'
import DashboardFilter from './DashboardFilter'
import RiskScoreTrendChart from './RiskScoreTrendChart'
import RiskyDevicesChart from './RiskyDevicesChart'
import RiskyUsersChart from './RiskyUsersChart'
import PriorityUsersWatchlist from './PriorityUsersWatchlist'
import PriorityDeviceWatchlist from './PriorityDeviceWatchlist'
import ActiveThreats from './ActiveThreats'
import SecurityInsights from './SecurityInsights'

class SecurityDashboard extends Component {
    render() {
        return (
            <div class="bx--grid">
                
                <DashboardHeader />
                
                <div class="bx--row bx--row-margin whiteBackground">
                    <div class="bx--col-lg-12 bx--col-md-5 bx--col-sm-2 bx--col-no-gutter">
                        <DashboardFilter />
                    </div>
                    <div class="bx--col-lg-4 bx--col-md-3 bx--col-sm-2">
                        <DashboardActions />
                    </div>
                </div>
                
                <InfoTiles />
    
                <div class="bx--row bx--row-margin">
                    <div class="bx--col col-only-right-padding"><ThreatAlertsGrid /></div>
                    <div class="bx--col col-only-right-padding"><ThreatIncidentsChart /></div>
                </div>

                <div class="bx--row bx--row-margin">
                    <div class="bx--col-lg-5 bx--col-md-3 bx--col-sm-1 col-only-right-padding"><RiskyUsersChart /></div>
                    <div class="bx--col-lg-5 bx--col-md-3 bx--col-sm-1 col-only-right-padding"><RiskyDevicesChart /></div>
                    <div class="bx--col-lg-6 bx--col-md-2 bx--col-sm-2 col-only-right-padding"><RiskScoreTrendChart /></div>
                </div>

                <div class="bx--row bx--row-margin">
                    <div class="bx--col-lg-10 bx--col-md-6 bx--col-sm-2">
                        <div class="bx--row bx--row-margin">
                            <div class="bx--col col-only-right-padding"><PriorityUsersWatchlist /></div>
                            <div class="bx--col col-only-right-padding"><PriorityDeviceWatchlist /></div>
                        </div>
                        <div class="bx--row bx--row-margin">
                            <div class="bx--col col-only-right-padding"><SecurityInsights /></div>
                        </div>
                    </div>
                    <div class="bx--col-lg-6 bx--col-md-2 bx--col-sm-2 col-only-right-padding">
                        <ActiveThreats />
                    </div>
                </div>
            </div>
        );
    }
}

export default SecurityDashboard;