import React from "react";
import './TopBarBtns.css';

export default class TopBarBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render(){

            let buttonSets = {
                dailyPlan: (
                    <div>
                        <button>Weekly Progress</button>
                        <button>Weekly Plan</button>
                    </div>
                ),
                weeklyPlan: (
                    <div>
                        <button>Back to Daily Plan</button>
                    </div>
                ),
                weeklyOverview: (
                    <div>
                        <button>To Weekly Review</button>
                        <button>Back to Daily Plan</button>
                    </div>
                ),
                weeklyReview: (   
                    <div>
                        <button>Back to Week View</button>
                    </div>
                )
        }

        let currentBtns = buttonSets[this.props.buttonSet];
            return(

                <div class='topBarBtns'>
                   {currentBtns}
                </div>
                
            )
        }
}