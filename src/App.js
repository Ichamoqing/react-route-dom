import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'
import Loading from './components/Loading/Loading'
import Tabs from './components/tabs/tabs'
import 'antd-mobile/dist/antd-mobile.css';

const Home = lazy(()=>import('./pages/home/home/home'))
const Navi = lazy(()=>import('./pages/navigator/navigator/navigator'))
const Mine = lazy(()=>import('./pages/mine/mine/mine'))
const NotFind = lazy(()=>import('./pages/common/not-find/not-find'))
const Message = lazy(()=>import('./pages/message/message/message'))
const Detail = lazy(()=>import('./pages/home/children/detail/detail'))
const Search = lazy(()=>import('./pages/home/children/search/search'))
const MessageDetail = lazy(()=>import('./pages/message/detail/detail'))

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact render={() => {
                            return <Redirect to="/home" />
                        }} />
                        <Route path="/home" component={Home} />
                        <Route path="/navigation" component={Navi} />
                        <Route path="/mine" component={Mine} />
                        <Route component={NotFind} />
                    </Switch>
                    
                    <>
                        <Route path="/home/detail/:detailId" component={Detail}/>
                        <Route path="/home/search" component={Search}/>
                        <Route path='/mine/message/:uid' component={Message}/>
                        <Route path='/mine/message/:uid/detail/:idtype' component={MessageDetail}/>
                        <Route path='/navigation/detail/:idtype' component={MessageDetail}/>
                    </>




                    <Tabs/>

                </Suspense>

            </BrowserRouter>
        )
    }
}
