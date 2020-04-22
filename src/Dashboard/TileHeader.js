import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react'
import React, { Component } from 'react';

class TileHeader extends Component {
    render() {
        return <div class="bx--row">
                    <div class="bx--col tile--heading-left">    
                        {this.props.headingtext}
                    </div>
                    <div class="bx--col no-padding-right">
                        <OverflowMenu className={"over-flow--right"}>
                            <OverflowMenuItem
                                itemText="Export"
                            />
                        </OverflowMenu>
                    </div>
                </div>

    }
}

export default TileHeader;