import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react'

class DashboardBanner extends Component {
    render() {
        return (
            <div class="bx-row landing-page__banner">
                <div class="bx--col-lg-16"></div>
                <Breadcrumb>
                    <BreadcrumbItem href="/">Homepage</BreadcrumbItem>
                    <BreadcrumbItem class="bx--breadcrumb--no-trailing-slash" href="/">Security</BreadcrumbItem>
                </Breadcrumb>
                <h2 class="landing-page__heading">Security Dashboard</h2>
            </div>
        );
    }
}

export default DashboardBanner;