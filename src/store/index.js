import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import maincontent from '../pages/home/home/children/content/reducer'
import detailcontent from '../pages/home/children/detail/children/content/reducer'
import navicontent from '../pages/navigator/navigator/reducer'
import usercontent from '../pages/mine/mine/reducer'
import messagecontent from '../pages/message/message/reducer'
import msdetailcontent from '../pages/message/detail/reducer'

const reducer = combineReducers({
    maincontent,
    detailcontent,
    navicontent,
    usercontent,
    messagecontent,
    msdetailcontent
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;