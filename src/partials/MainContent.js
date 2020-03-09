import React, { Component } from 'react';

export class MainContent extends Component {
    render() {
        return (
            <div id="main-content">
                <div>
                    <aside id="aside">
                        <ul>
                            <li>info bullet points</li>
                            <li>More infor bullet points</li>
                            <li>one last point to be made</li>
                        </ul>
                    </aside>
                    <section id="content">
                        <p>lorem ipsom</p>
                    </section>
                </div>
            </div>
        );
    }
}