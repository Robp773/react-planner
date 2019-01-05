import React from "react";
import './DailyPlan.css';
import TopBar from './TopBar';

export default class DailyPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render(){
            return(
                <div class='dailyPlan'>

                    <TopBar title='Daily Plan' buttonSet='dailyPlan'/>

                </div>
            )
        }
}