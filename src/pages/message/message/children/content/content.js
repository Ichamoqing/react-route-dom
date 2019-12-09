import React, { Component } from 'react'
import './content.scss'
export default class content extends Component {
    render() {
        let createInfoList = this.props.props.createInfoList;
        console.log(createInfoList);
        console.log('render');
        let Dom = '';
        if(createInfoList.length){
            Dom = createInfoList.map(item=>{
                return (
                    <li className="message-list" key={item.id} onClick={this.pushDetail.bind(this,item.id,item.type)}>
                        <p>{item.author.username}</p>
                        <p className="person-from">
                            <span>19小时前</span>
                            <span>来自</span>
                        </p>
                        <p className="personal_abstract">
                            {item.title}
                        </p>
                        <div className="groundcoverImg">
                            <img src={item.cover} alt=""/>
                        </div>
                        <p className="groundTitle">
                            {item.title}
                        </p>
                        <div className="personal_start_bottom">
                            <span className="iconfont icon-qunzu"></span>
                            <i className="total_number">{item.liketimes}</i>
                            <span className="iconfont icon-xinxi"></span>
                            <i className="total_number">7</i>
                            <span className="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></span>
                        </div>
                    </li>
                )
            })


        }
        return (
            <div className="content message" ref={(el)=>{this.IScroll = el}}>
                <div className="wrap">
                    <ul className="message-item">
                        {Dom}
                    </ul>
                </div>
            </div>
        )
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
    pushDetail(id,type){
        console.log(this.props);
        let personId = this.props.props.match.params.uid;
        let params = id+''+type;
        console.log(params);
        this.props.props.history.push(`/mine/message/${personId}/detail/${params}`);
    }

}

