import React, { Component } from 'react'
import './comment.scss'

let CommentList = [];
let lastId = 0;
export default class comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.CommentList.data){
            CommentList = [...CommentList,...this.props.CommentList.data];
        }
        let commentDom = null;
        commentDom =  this.ShowDataList(CommentList);

        return (
            <div className="comment">
                <div className="comment-title border-bottom">
                    {this.props.CommentList.totalCount}条评论
                </div>
                <ul className="list">
                    {commentDom}
                    {this.ShowRequestData(this.props.CommentList)}
                </ul>
            </div>
        )
    }
    ShowDataList(list){
            return list.map((item,index)=>{
                return (
                    <li className="item border-bottom" key={index}>
                        <div className="user-img">
                            <img src={item.avatar} alt=""/>
                        </div>  
                        <div className="comment-content">
                            <p className="user-info">
                                <span>{item.username}</span>
                                {item.createTimeStr}
                            </p>
                            <p className="comment-desc">
                                {item.content}
                            </p>
                            {this.ShowReplyList(item)}
                        </div>
                    </li>
                )
            })
    }

    ShowReplyList(item){
        if(item.replies.totalCount){
            return item.replies.data.map((item,index)=>{
                return (
                    <div className="replay-covers" key={index}>
                        <div className="replay-img">
                            <img src={item.avatar} alt=""/>
                        </div>
                        <div className="replay-content">
                            <p className="replay-info">
                                {item.username} <span>{item.createTimeStr}</span>
                            </p>
                            <div className="replay-desc">
                                <p>回复:</p><span>{item.originalCreatorName}</span> <i>{item.content}</i>
                            </div>
                        </div>                
                    </div>
                )
            })
        }
        
    }

    ShowRequestData(data){
        console.log(data);
        if(data.hasNext){
            // lastId = data.data[9].
            let arrayList = data.data;
            console.log(arrayList);
            lastId = arrayList[arrayList.length-1].id;
            return (
                <div className="requestdata" onClick={this.RequestData.bind(this)}>
                    请求更多
                </div>
            )
        }

    }   

    RequestData(){
        let params = this.props.parentprops.route.match.params.detailId;
        let objectType = params.substring(params.length-1,params.length);
        let detailId = params.substring(0,params.length-1);
        this.props.parentprops.getCommentList(detailId,objectType,lastId);
    }
}
