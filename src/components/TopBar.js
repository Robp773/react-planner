import React from "react";
import './TopBar.css';
import TopBarBtns from './TopBarBtns';

export default class TopBar extends React.Component {
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

                <div class='topBar'>
                
                    <div class='topBar-row'>
                        <h1 class='topBar-h1'>{this.props.title}</h1>
                        <TopBarBtns buttonSet='dailyPlan'/> 
                    </div>
             
                </div>

            )
        }
}