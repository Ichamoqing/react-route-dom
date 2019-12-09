import React, { Component } from 'react'
import Header from './children/header/header'
import Content from './children/content/content'
import Article from './children/article/article'
import {connect} from 'react-redux'
import {requestCreateData} from './reducer'
import './style.scss'

let activeType = 0;
class message extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log('render.....');
        let Com = null;
        const type = activeType;
            switch (type) {
            case 0:
                Com =  Content
                break;
            case 2:
                Com =  Article
                break;
            default:
                break;
            }
        return (
            <div className="pages">
                <Header typeAction={this.typeClickAction.bind(this)} props={this.props}/>
                <Com props={this.props}/>
            </div>
        )
    }
    typeClickAction(type){
        console.log(1);
        console.log(type);
        activeType = type;
        let params = this.props.match.params.uid;
        let id = params.substring(0,params.length-1);
        this.props.getcreateInfoData({
            uid:id,
            type:type,
            page:1
        });
    }
    componentDidMount(){
        let params = this.props.match.params.uid;
        let id = params.substring(0,params.length-1);
        let type = params.substring(params.length-1,params.length);
        console.log(id,type);
        this.props.getcreateInfoData({
            uid:id,
            type:type,
            page:1
        });
    }
}

const mapStateToProps = (state)=>{
    return {
        createInfoList: state.messagecontent.createInfo,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      async getcreateInfoData(params){
        let action = requestCreateData(params);
        await dispatch(action);
      },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(message);