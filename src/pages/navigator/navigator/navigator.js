import React, { Component } from 'react'
import 'whatwg-fetch'
import {connect} from 'react-redux'
import {requestNavigaterData,requestTagList} from './reducer'
import Header from '../header/header'
import Content from '../content/content'
class navigator extends Component {
    render() {
        return (
            <div className="navigater">
                <Header TagList={this.props}/>
                <Content NavigaterList={this.props}/>
            </div>
        )   
    }
    componentDidMount(){
        this.props.getNavigaterData('/v1/news/0',1);
        this.props.getTagData();
    }

}

const mapStateToProps = (state)=>{
    return {
        Navigater: state.navicontent.NavigaterList,
        TagList:state.navicontent.TagList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      getNavigaterData(url,params){
        let action = requestNavigaterData(url,params);
        dispatch(action);
      },
      getTagData(){
        let action = requestTagList();
        dispatch(action);
      }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(navigator);