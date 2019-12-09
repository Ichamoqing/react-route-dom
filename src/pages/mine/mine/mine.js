import React, { Component } from 'react'
import Header from '../mine/children/header/header.js'
import {requestUserData} from './reducer'
import {connect} from 'react-redux'
import './mine.scss'
class mine extends Component {

    render() {
        return (
            <div>
                <Header props={this.props}/>
                <div className="main-content">
                    <ul className="item">
                        <li className="list">
                            <p>
                                <span className="iconfont icon-bianji"></span>
                                我要投稿
                            </p>
                            <span>></span>
                        </li>
                        <li className="list">
                            <p>
                                <span className="iconfont icon-yingyong"></span>
                                我的活动
                            </p>
                            <span>></span>
                        </li>
                        <li className="list">
                            <p>
                                <span className="iconfont icon-qianbao"></span>
                                我的钱包
                            </p>
                            <span>></span>
                        </li>
                        <li className="list">
                            <p>
                                <span className="iconfont icon-shezhi"></span>
                                设置
                            </p>
                            <span>></span>
                        </li>
                        <li className="list">
                            <p>
                                <span className="iconfont icon-tishi"></span>
                                反馈建议
                            </p>
                            <span>></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getuserinfoData('142rnv0p');
    }
}

const mapStateToProps = (state)=>{
    return {
        createInfoList: state.usercontent.createInfo,
        userinfoList:state.usercontent.userinfo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      getuserinfoData(params){
        let action = requestUserData(params);
        dispatch(action);
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(mine);
