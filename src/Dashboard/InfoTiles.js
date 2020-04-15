import React from 'react';

function InfoTiles() {
    return (
        <div class="bx--row bx--row-margin whiteBackground">
            <div class="bx--col">
                <section class="dash--tile">
                    <p class="tile-text">Active threats</p>
                    <p class="tile--value">12</p>
                    <p class="tile--text tile--subtext">23 assets affected</p>
                </section>
            </div>
            <div class="bx--col">
                <section class="dash--tile">
                    <p class="tile-text">Blocked threats</p>
                    <p class="tile--value">12</p>
                    <p class="tile--text tile--subtext">35 users secured</p>
                </section>
            </div>
            <div class="bx--col">
                <section class="dash--tile">
                    <p class="tile-text">Risky users</p>
                    <p class="tile--value">12</p>
                    <p class="tile--text tile--subtext">5 users out of risk</p>
                </section>
            </div>
            <div class="bx--col">
                <section class="dash--tile">
                    <p class="tile-text">Risk score</p>
                    <p class="tile--value">12</p>
                    <p class="tile--text tile--subtext">5% lower than industry average 58</p>
                </section>
            </div>

            <div class="bx--col">
                <section class="dash--tile">
                </section>
            </div>
        </div>
    );
}

export default InfoTiles;