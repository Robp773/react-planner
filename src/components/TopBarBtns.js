import React from "react";
import './sass/_TopBarBtns.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class TopBarBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render(){

            let buttonSets = {
                dailyPlan: (
                    <div>

                        <button className='navBtn'>
                            <FontAwesomeIcon className='faIcon navIcon' icon="map" />
                        </button>

                        <button className='navBtn'>
                            <FontAwesomeIcon className='faIcon navIcon' icon="calendar-week" />
                        </button>

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

                <div className='topBarBtns'>
                   {currentBtns}
                </div>
                
            )
        }
}