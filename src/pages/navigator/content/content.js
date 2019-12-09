import React, { Component} from 'react'
import './content.scss'
import { Z_DEFAULT_STRATEGY } from 'zlib';

let loadmore = true;
let pages = 1;
export default class content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let NavigaterList = this.props.NavigaterList.Navigater;
        return (
            <div className="content" ref={(el)=>{this.scroll=el}}>
                <div className="wrap">
                    <ul className="list">
                    {
                        NavigaterList.map(item=>{
                            return(
                                <li className="item" key={item.id} onClick={this.pushDetail.bind(this,item.id,14)}>
                                    <div className="item-desc">
                                        <div className="item-img">
                                            <img src={item.cover} alt=""/>
                                        </div>
                                        <div className="item-content">
                                            <p>{item.title}</p>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                    <div className="item-info">
                                        <div className="thumbs">
                                            <span className="iconfont icon-dianzan"><i>{item.liketimes}</i></span>
                                            <span className="iconfont icon-xinxi"><i>{item.commentnum}</i></span>
                                        </div>
                                        <div className="thumbs-info">
                                            <span className="thumbs-date">{item.relativeTime}</span>
                                            ·
                                            <span className="thumbs-type">{item.column_id}</span>
                                        </div>
                                    </div> 
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div className="bottom-line">
                        
                    </div>
                </div>
            </div>
        )
    }
    pushDetail(id,type){
        console.log(this.props);
        // let personId = this.props.props.match.params.uid;
        let params = id+''+type;
        console.log(params);

        this.props.NavigaterList.history.push(`/navigation/detail/${params}`);
    }
    componentDidMount(){
        this.SCroll = new window.IScroll(this.scroll, {
            probeType: 3,
            scrollY:true,
        })
        this.SCroll.on('beforeScrollStart', ()=>{
            this.SCroll.refresh();
        });
        this.SCroll.on('scrollEnd',()=>{
            let y = Math.abs(this.SCroll.y);
            let maxY = Math.abs(this.SCroll.maxScrollY);
            let minY = this.SCroll.maxScrollY + 90;
            let MINY = Math.abs(minY);
            if(y >= maxY){
                if(loadmore){
                    // 请求更多页的数据
                    loadmore = false;
                    pages++;
                    this.props.NavigaterList.getNavigaterData('/v1/news/0',pages);
                }
                this.SCroll.scrollTo(0,minY,200);
            } else if(y > MINY && y < maxY){
                this.SCroll.scrollTo(0,minY,200);
            } else{

            }
        })
    }
    componentDidUpdate(){
        loadmore = true;
    }
}
