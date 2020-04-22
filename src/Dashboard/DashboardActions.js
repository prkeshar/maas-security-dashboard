import React, { Component } from 'react';
import { Renew16, Download16, Edit16, OverflowMenuVertical16 } from '@carbon/icons-react';

class DashboardActions extends Component {
    render() {
        return (
            <div class="over-flow--right">
                <button class="bx--btn bx--btn--ghost">
                    <Renew16 />         
                </button>
                <button class="bx--btn bx--btn--ghost">
                    <Download16 />         
                </button>
                <button class="bx--btn bx--btn--ghost">
                    <Edit16 />         
                </button>
                <button class="bx--btn bx--btn--ghost">
                    <OverflowMenuVertical16 />
                </button>
            </div>
        );
    }
}

export default DashboardActions;