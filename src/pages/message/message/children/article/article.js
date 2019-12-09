import React, { Component } from 'react'
import './article.scss'

export default class article extends Component {
    render() {
        let createInfoList = this.props.props.createInfoList;
        console.log(createInfoList);
        console.log("render");
        let Dom = '';
        if(createInfoList.length){
            Dom = createInfoList.map(item=>{
                return (
                    <li className="article-item" key={item.id} onClick={this.pushDetail.bind(this,item.id,1)}>
                        <div className="articalBar">
                            <div className="articalBar_top">
                        <div className="box_wrap">
                            <img src={item.author.avatar_path} alt=""/>
                        </div>
                        <span className="top_name">{item.author.username}</span>
                        <span className="top_time">{item.relative_time}</span>
                    </div>
                    <div className="imgBox_more_map">
                        <div className="imgBox_more_map_title">
                            {item.title}
                        </div>
                        <ul className="imgBox_more_map_ul">
                            <li className="imgBox_more_map_li">
                                <img src={item.img[0]} alt=""/>
                            </li>
                            <li className="imgBox_more_map_li">
                                <img src={item.img[1]} alt=""/>
                            </li>
                            <li className="imgBox_more_map_li">
                                <img src={item.img[2]} alt=""/>
                            </li>
                        </ul>
                    </div>
                    <div className="personal_start_bottom">
                        <span className="iconfont icon-qunzu"></span>
                        <i className="total_number">{item.commentnum}</i>
                        <span className="iconfont icon-xinxi"></span>
                        <i className="total_number">7</i>
                        <span className="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></span>
                    </div>
                </div>
            </li>)
        })
        }

        return (
            <div className="content message" ref={(el)=>{this.IScroll = el}}>
                <div className="wrap">
                    <ul className="article-list">
                        {Dom}
                    </ul>
                </div>
            </div>
        )
    }
    pushDetail(id,type){
        console.log(this.props);
        let personId = this.props.props.match.params.uid;
        let params = id+''+type;
        console.log(params);
        this.props.props.history.push(`/mine/message/${personId}/detail/${params}`);
    }

    componentDidMount(){
        this.SCroll = new window.IScroll(this.IScroll, {
            probeType: 3,
            scrollY:true,
        })
        this.SCroll.on('beforeScrollStart', ()=>{
            this.SCroll.refresh();
        });
    }
}

