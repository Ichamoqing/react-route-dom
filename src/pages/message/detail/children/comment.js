import React, { Component } from 'react'
import './comment.scss'
export default class comment extends Component {
    render() {
        console.log(this.props);
        let CommentDom = '';
        if(this.props.props.CommentList.length){
            // 列表
            let CommentList = this.props.props.CommentList;
            // 回复列表
            let replyList = this.props.props.CommentList.reply;
            // 列表数据
            let replyDetail = '';
            if(replyList){
                replyDetail = replyList.map(item=>{
                    return (
                        <div className="counter_comment">
                            <ul className="moreCommentList">
                                <li>
                                    <p>
                                        <span className="user">{item.author.username}</span>
                                        <span className="comment" ref={(el)=>{this.replycomment = el}}></span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
            CommentDom = CommentList.map(item=>{
                return (<li className="commentBackground" key={item.id}>
                    <div className="item_left_portrait">
                        <img src={item.author.avatar_path} alt=""/>
                    </div>
                    <div className="item_right_box">
                        <div className="item_right_box_wrap">
                            <div className="item_right_box_author">
                                <span className="item_right_box_name">{item.author.username}</span>
                                <span className="item_right_box_time">{item.relativeTime}</span>
                            </div>
                        </div>
                        <div className="discuss_content_box">
                            <div className="square_comment">
                                <div ref={(el)=>{this.replycomment = el}}>
                                    {
                                        (()=>{
                                            let node = React.createElement('div',{},item.content_format);
                                            {/* node.innerHTML = item.content_format;
                                            console.log(node); */}  
                                            return node;
                                        })()
                                    }
                                </div>
                            </div>
                        </div>
                        {replyDetail}
                    </div>
                </li>)
            })
        }
        return (
            <div className="comment_region">
                <div className="comment-top-hr"></div>
                <div className="comment-hot"></div>
                <div className="comment-new">
                    <div className="articlePadding">
                        <div className="brilliantCommentTop">
                            <span>最新评论</span>
                        </div>
                        <ul className="commentList">
                            {CommentDom}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let params = this.props.props.match.params.idtype;
        let id = params.substring(0,7);
        let type = params.substring(7,params.length);
        let _params = {id,type};
        this.props.props.getCommentList(_params);
        this.props.props.getHotCommentList(_params);
    }
}
