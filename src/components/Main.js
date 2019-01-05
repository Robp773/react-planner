import React from "react";
import './Main.css';
import DailyPlan from './DailyPlan';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render(){
            return(
                <div>
                    <DailyPlan/>
                </div>
            )
        }
}