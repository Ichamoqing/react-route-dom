import React, { Component} from 'react'
import 'whatwg-fetch'
import './content.scss'
import {requestDetailData,requestCommentList} from './reducer'
import {connect} from 'react-redux'
import Other from './other/other'
import Comment from './comment/comment'
class content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsAttention:true,
            comment:[],
            detailData:[]
        }
    }
    render() {
        return (
            <div className="description">
                <div className="fail-header">
                    <span className="iconfont icon-zuojiantouxiangzuoxianxing" onClick={this.BackAction.bind(this)}></span>
                    <span className="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></span>
                </div>
                <div className="bgimg">
                    <img src="https://axhub.im/pro/511b96895ac139d6/images/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5/u3613.jpg" alt=""/>
                </div>
                <div className="detail-content">
                    <div className="context-title">
                        一大波好玩活动等你来“打卡”
                    </div>
                    <div className="context-detail border-bottom">
                        <div className="user-desc">
                            <div className="user-img">
                                <img src="https://axhub.im/pro/511b96895ac139d6/images/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5/u3621.png" alt=""/>
                            </div>
                            <div className="user-info">
                                <p>十点新闻</p>
                                <p>2018/05/06 10:56:56</p>
                            </div>
                        </div>
                        <div className={this.state.IsAttention ? 'attention' : 'attention active'} ref={this.attention}  onClick={this.AttentionAction.bind(this)}>{this.state.IsAttention ? '+ 关注' : '已关注'}</div>
                    </div>
                    <div className="maincontent">
                        <p className="title-desc">
                            瑞虹天地月亮湾L1
                            既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于一体的Minderlands™就做到啦~
                        </p>
                        <p className="img-desc">
                            <img src="https://axhub.im/pro/511b96895ac139d6/images/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5/u3630.png" alt=""/>
                        </p>
                    </div>
                    <div className="maincontent">
                        <p className="title-desc">
                            瑞虹天地月亮湾L1
                            既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于一体的Minderlands™就做到啦~
                        </p>
                        <p className="img-desc">
                            <img src="https://axhub.im/pro/511b96895ac139d6/images/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5/u3632.png" alt=""/>
                        </p>
                    </div>
                    <div className="maincontent">
                        <p className="title-desc">
                            因为直接合作和大量采购，Minderlands™会有更多贴心实惠的价格！（此处鼓掌！）
                        </p>
                        <p className="img-desc">
                            <img src="https://axhub.im/pro/511b96895ac139d6/images/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5/u3634.png" alt=""/>
                        </p>
                    </div>
                </div>
                <Other otherlist={[...this.props.DetailList]}/>
                <Comment CommentList={{...this.props.CommentList}} parentprops={this.props}/>
            </div>
        )
    }
    AttentionAction(){
        
        this.setState({
            IsAttention:!this.state.IsAttention
        })
    }
    BackAction(){
        this.props.route.history.goBack();
    }
    componentDidMount(){
        let params = this.props.route.match.params.detailId;
        let objectType = params.substring(params.length-1,params.length);
        let detailId = params.substring(0,params.length-1);
        this.props.getDetailData(detailId,objectType);
        this.props.getCommentList(detailId,objectType,0);
    }
}


const mapStateToProps = (state)=>{
    return {
        DetailList: state.detailcontent.DetailList,
        CommentList:state.detailcontent.CommentList,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      getDetailData(detailId,objectType){
        let action = requestDetailData(detailId,objectType);
        dispatch(action);
      },
      getCommentList(detailId,objectType,lastId){
          let action = requestCommentList(detailId,objectType,lastId);
          dispatch(action);
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(content);
// export default content;