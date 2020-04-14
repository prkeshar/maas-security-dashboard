import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react'

class DashboardHeader extends Component {
    render() {
        return (
            <div class="bx-row landing-page__banner">
                <Breadcrumb>
                    <BreadcrumbItem href="/">Homepage</BreadcrumbItem>
                    <BreadcrumbItem class="bx--breadcrumb--no-trailing-slash" href="/">Security</BreadcrumbItem>
                </Breadcrumb>
                <h2>Security Dashboard</h2>
            </div>
        );
    }
}

export default DashboardHeader;