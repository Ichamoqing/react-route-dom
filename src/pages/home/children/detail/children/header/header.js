import React, { Component} from 'react'
import './header.scss'
export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsAttention:true
        }
    }
    render() {
        return (
            <div className="header detailheader">
                <div className="left-header">
                    <div className="left-arrow" onClick={this.backAction.bind(this)}>
                        <span className="iconfont icon-zuojiantouxiangzuoxianxing"></span>
                    </div>
                    <div className="user-img">
                        <img src="https://axhub.im/pro/511b96895ac139d6/images/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5/u3987.png" alt=""/>
                    </div>
                    <div className="user-text">十点新闻</div>
                </div>
                <div className="right-header">
                    <div className={this.state.IsAttention ? 'attention' : 'attention active'} ref={(el)=>{this.attention = el}}  onClick={this.AttentionAction.bind(this)}>{this.state.IsAttention ? '+ 关注' : '已关注'}</div>
                    <div className="transmit">
                        <span className="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></span>
                    </div>
                </div>
            </div>
        )
    }

    AttentionAction(){
        this.setState({
            IsAttention:!this.state.IsAttention
        })
    }
    backAction(){
        this.props.route.history.goBack();
    }
    componentDidMount(){
    }

}
