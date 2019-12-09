import React, { PureComponent,createRef} from 'react'
import {connect} from 'react-redux'
import {requestContentData,requestMoreContentData} from './reducer'
import Swiper from 'swiper';    
import './style.scss'

let MainContentList = [];
class content extends PureComponent {
    constructor(props) {
        super(props);
        this.SWiper = createRef();
    }
    render() {
        if(this.props.ContentList.length){
            MainContentList = this.props.ContentList;
        }
        let ListDom = '';
        let SwiperDom = '';
        let restDom = '';

        if(MainContentList.length){
            SwiperDom =  (
                <div className="hotnews">
                    <div className="title">活动精选</div>
                    <div className="swiper-container" ref={this.SWiper}>
                        <div className="swiper-wrapper">
                            {
                                MainContentList.map(item=>(
                                    <div className="swiper-slide" key={item.id + 1} onClick={this.PushDetailRoute.bind(this,item.id,item.objectType)}>
                                        <div className="bgimg">
                                            <img src={item.cover} alt=""/>
                                        </div>
                                        <div className="text-desc">全栈工程师线下培训课程</div>
                                        <span className="eyes-more iconfont icon-xiaoyanjing">{item.viewCount}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
            ListDom = MainContentList.map((item,index) => {
                if(index<=1){
                     return (<li className="list border-bottom" key={item.id} onClick={this.PushDetailRoute.bind(this,item.id,item.objectType)}>
                        <div className="context">
                                <div className="title">{item.title}</div>
                                <div className="desc">
                                    <span className="eyes iconfont icon-xiaoyanjing">{item.viewCount}</span>
                                    <span className="author">{item.creatorObj.username} {item.publishTimeDiffStr}</span>
                                </div>
                        </div>
                        <div className="imgdesc">
                            <img src={item.cover} alt=""/>
                        </div>
                    </li>)
                }
            })
            restDom = MainContentList.map((item,index) => {
                if(index<MainContentList.length && index>=2){
                     return (<li className="list border-bottom" key={item.id}>
                        <div className="context">
                                <div className="title">{item.title}</div>
                                <div className="desc">
                                    <span className="eyes iconfont icon-xiaoyanjing">{item.viewCount}</span>
                                    <span className="author">{item.creatorObj.username} {item.publishTimeDiffStr}</span>
                                </div>
                        </div>
                        <div className="imgdesc">
                            <img src={item.cover} alt=""/>
                        </div>
                    </li>)
                }
            })
        }

        return (
            <div className="homepages">
                <ul className="item">
                    {ListDom}
                </ul>
                {SwiperDom}
                <ul className="item">
                    {restDom}
                </ul>
                <div className="list-footer">
                    <button className="Loadmore" onClick={this.LoadMoreData.bind(this)}>
                        查看更多
                    </button>
                </div>
            </div>
        )
    }

    PushDetailRoute(id,objType){
        this.props.props.history.push(`/home/detail/${id}${objType}`);
    }   
    LoadMoreData(){
        this.props.getMoreContentData();
    }
    componentDidMount(){
       this.FetchContentData();
    }
    componentDidUpdate(){
        const swiper = new Swiper(this.SWiper.current, {
            slidesPerView: 'auto',
        });
    }

    async FetchContentData(){

      try {
            await this.props.getContentData();
      } catch (error) {
          console.log(error);
      }
    }
}




const mapStateToProps = (state)=>{
    return {
        ContentList: state.maincontent.ContentList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      async getContentData(){
        let action = requestContentData();
        await dispatch(action);
      },
      getMoreContentData(){
        let action = requestMoreContentData();
        dispatch(action);
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(content);
