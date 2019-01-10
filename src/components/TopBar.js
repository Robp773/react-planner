import React from "react";
import './sass/_TopBar.scss';
import TopBarBtns from './TopBarBtns';
import moment from 'moment';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render(){
        // week date range - example January 1st - 6th
        let weekRange = `${moment().format('MMMM')} ${moment().startOf('week').format('Do')} - ${moment().endOf('week').format('Do')}`;
        //  currentDate - example January 1st 2019
        let todaysDate = moment().format("MMMM Do, YYYY");
        let dateShown = this.props.dateShown === 'today' ? todaysDate : weekRange;

        return(

                <div className='topBar'>

                    <div className='topBar-row'>
                        <h1 className='topBar-h1'>{this.props.title}</h1>
                        <TopBarBtns buttonSet={this.props.buttonSet}/> 
                    </div>

                    <div className='topBar-row'>
                        {dateShown}
                    </div>
             
                </div>

            )
        }
}