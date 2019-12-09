import React, { Component } from 'react'
import './header.scss'
export default class header extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let createInfoList = this.props.props.createInfoList;
        let userinfoList = this.props.props.userinfoList;
        let Dom = '';
        if(userinfoList.author){
            Dom = (
                <div className="mine-info" id={userinfoList.author.id}>
                    <div className="header-mine">
                        我的
                    </div>
                    <div className="user-info">
                        <div className="user-img">
                            <img src={userinfoList.author.avatar_path} alt=""/>
                        </div>
                        <div className="username">
                            <p>{userinfoList.author.username}</p>
                            <p>{userinfoList.author.introduce}</p>
                        </div>
                    </div>
                    <div className="desc-info">
                        <div onClick={this.PushMessage.bind(this,userinfoList.author.id,0)}>
                            <p>{userinfoList.fans}</p>
                            <p>动态</p>
                        </div>
                        <div onClick={this.PushMessage.bind(this,userinfoList.author.id,2)}>
                            <p>{userinfoList.focus}</p>
                            <p>文章</p>
                        </div>
                        <div>
                            <p>{userinfoList.likes}</p>
                            <p>赞</p>
                        </div>
                        <div>
                            <p>{userinfoList.push}</p>
                            <p>精选</p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {Dom}
            </div>
        )
    }
    PushMessage(id,type){
        this.props.props.history.push(`/mine/message/${id+type}`);
    }
}
