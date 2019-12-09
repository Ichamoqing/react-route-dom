import React, { Component } from 'react'
import {connect} from 'react-redux'
import Comment from './children/comment'
import {requestDetailInfo,requestHotCommentList,requestCommentList} from './reducer'
import './detail.scss'

class detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let Dom = '';
        if(this.props.DetailInfoList.likelist){
            let DetailInfoList = this.props.DetailInfoList;
            let likelist = this.props.DetailInfoList.likelist;
            let perhaps_like = this.props.DetailInfoList.perhaps_like;
            let liDom = '';
            let likeDom = '';
            let commentDom = '';

            liDom = likelist.map(item=>{
                return(
                    <li className="point_list_ul_li" key={item.id}>
                        <img src={item.avatar_path} alt=""/>
                    </li>
                )
            })
            if(perhaps_like){
                likeDom = perhaps_like.map(item=>{
                    return(
                        <li className="point_list_ul_li" key={item.id} id={item.author.id}>
                            <div className="img-wrap-box">
                                <img src={item.cover} alt=""/>
                            </div>
                            <div className="articleInfo">
                                <p className="articleTitle">
                                    {item.title}
                                </p>
                                <p className="author">
                                    {item.author.username}
                                </p>
                            </div>
                        </li>
                    )
                })
            }
            Dom = (
                <div className="wrap">
                    <div className="artical_banner">
                        <img src={DetailInfoList.cover} alt=""/>
                    </div>
                    <div className="container">
                        <div className="ArticleDetails_author">
                            <div className="ArticleTop">
                                <div className="ArticleTop_img_box">
                                    <img src={DetailInfoList.author.avatar_path} alt=""/>
                                </div>
                                <div className="ArticleTop_center">
                                    {DetailInfoList.author.username}
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <div className="articleTitle">
                                <p>一份关于 Switch 国行版的购买建议</p>
                                <div className="article_from_time">
                                    11小时前 · 来自文章
                                </div>
                            </div>
                            <div className="article-text">
                                <div className="TextText">
                                    <div className="ArticleDetails_content" ref={(el)=>{this.content = el}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointsList">
                            <div className="lovePoints_box">
                                <div className="point_wrap_box">
                                    <span className="iconfont icon-shoucang shoucang"></span>
                                </div>
                                <div className="pointsTotal">
                                    {DetailInfoList.liketimes}人已赞
                                </div>
                                <ul className="point_list_ul">
                                    {liDom}
                                    <li className="point_list_ul_li_last">
                                        <span className="point_list_ul_li_img_total">
                                            +{DetailInfoList.liketimes-likelist.length}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="articlePadding">
                            <div className="maybeYouLike">
                                你可能会喜欢
                            </div>
                            <ul className="recommendArticles">
                                {likeDom}
                            </ul>
                        </div>
                        <Comment props={this.props}/>
                    </div>
                </div>
            )
        }
        return (
            <div className="pages">
                <div className="content" ref={(el)=>{this.RollScroll = el}}>
                    <div>
                        {Dom}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        // 构建滚动视图
        console.log(this.RollScroll);
        this.BSScroll = new window.IScroll(this.RollScroll, {
            probeType: 3,
            scrollY:true,
        })
        this.BSScroll.on('beforeScrollStart', ()=>{
            this.BSScroll.refresh();
        });

        let params = this.props.match.params.idtype;
        let id = params.substring(0,7);
        let type = params.substring(7,params.length);
        let _params = {id,type};
        this.props.getDetailInfoData(_params);
    }

    componentDidUpdate(){
        this.content.innerHTML = this.props.DetailInfoList.content;
    }
}

const mapStateToProps = (state)=>{
    return {
        DetailInfoList: state.msdetailcontent.detailInfo,
        HotCommentList: state.msdetailcontent.hotcommentList,
        CommentList: state.msdetailcontent.commentList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      async getDetailInfoData(params){
        let action = requestDetailInfo(params);
        await dispatch(action);
      },
      async getHotCommentList(params){
        let action = requestHotCommentList(params);
        await dispatch(action);
      },
      async getCommentList(params){
        let action = requestCommentList(params);
        await dispatch(action);
      },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(detail);