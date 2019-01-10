import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'

library.add(faMap, faCalendarWeek)

ReactDOM.render(
 <Provider store={store}>
    <Main />
 </Provider>,

  document.getElementById("root")
);
