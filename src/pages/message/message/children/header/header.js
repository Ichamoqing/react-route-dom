import React, { Component } from 'react'
import './header.scss'
export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeType:0,
        }
    }
    render() {
        return (
            <div className="header">
                <li className={this.state.activeType === 0 ? 'active' : ''} onClick={
                    this.ClickAction.bind(this,0)
                }>动态</li>
                <li className={this.state.activeType === 2 ? 'active' : ''} onClick={
                    this.ClickAction.bind(this,2)
                }>文章</li>
                <span className="iconfont icon-zuojiantouxiangzuoxianxing backicon" onClick={
                    this.BackAction.bind(this)
                }></span>
            </div>
        )
    }
    ClickAction(pramas){
        // 点击选中动态
        if(pramas===0 && this.state.activeType!==pramas){
            this.props.typeAction(pramas);
            this.setState({
                activeType:0,
            })
        // 点击选中文章
        } else if(pramas===2 && this.state.activeType!==pramas){
            this.props.typeAction(pramas);
            this.setState({
                activeType:2,
            })
        }
    }   
    BackAction(){
        console.log(this.props.props.history.goBack());
    }
}
