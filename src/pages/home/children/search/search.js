import React, { Component,createRef} from 'react'
import './search.scss'
export default class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history:true,
        }
        this.inputVal = createRef();
    }
    render() {
        return (
            <div className="search">
                <div className="header">
                    <input type="text" ref={this.inputVal} placeholder="搜索文章，作者"/>
                    <div className="cancel" onClick={this.CancelAction.bind(this)}>取消</div>
                    <p className="iconfont icon-search searchbtn"></p>
                </div>
                <div className="content">
                    {
                        this.state.history && (
                            <div className="history-record border-bottom">
                                <div className="history-title">
                                    历史记录
                                    <span className="iconfont icon-huishouzhan" onClick={this.HideAction.bind(this)}></span>
                                </div>
                                <div className="history-content">
                                    <li>
                                        <p>AR</p>
                                        <p>汽车</p>
                                        <p>艺术</p>
                                        <p>设计</p>
                                    </li>
                                    <li>
                                        <p>大数据</p>
                                        <p>半导体</p>
                                        <p>新浪微博</p>
                                    </li>
                                </div>
                            </div>)
                    }
                    <div className="history-record">
                        <div className="history-title">
                            热门搜索
                        </div>
                        <div className="history-content">
                            <li>
                                <p>A股</p>
                                <p>大智慧</p>
                                <p>医疗</p>
                                <p>沐浴露</p>
                            </li>
                            <li>
                                <p>特斯拉</p>
                                <p>朴有天</p>
                                <p>地久天长</p>
                                <p>医疗</p>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    HideAction(){
        this.setState({
            history:false
        })
    }
    CancelAction(){
        this.inputVal.current.value = '';
    }
}
