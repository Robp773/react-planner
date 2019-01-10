import React from "react";
import './sass/_DailyPlan.scss';
import TopBar from './TopBar';


export default class DailyPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render(){
            return(
                <div className='dailyPlan'>
                    <TopBar title='Daily Plan' buttonSet='dailyPlan' dateShown='today'/>
                    <h2>Primary Task</h2>

                </div>
            )
        }
}