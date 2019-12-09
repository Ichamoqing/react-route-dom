import React, { Component} from 'react'
import './detail.scss'
import Header from './children/header/header'
import Content from './children/content/content'
export default class detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            HeaderShow:false,
        }
    }
    render() {
        return (
            <div className="pages">
                {this.state.HeaderShow ? <Header route={this.props}/> : ''} 
                <div className="content subpages" ref={(el)=>{this.scroll=el}}>
                    <div className="wrap">
                        <Content route={this.props}/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.SCROLL = new window.IScroll(this.scroll, {
            probeType: 3,
            scrollY:true,
        })
        this.SCROLL.on('beforeScrollStart', ()=>{
            this.SCROLL.refresh();
        });
        this.ScrollAction();
    }
    ScrollAction(){
        this.SCROLL.on('scroll',()=>{
            if(this.SCROLL.y < -180){
                this.setState({
                    HeaderShow:true
                })
            } else{
                this.setState({
                    HeaderShow:false
                })
            }
        })
        this.SCROLL.on('scrollend',()=>{
            if(this.SCROLL.y < -180){
                this.setState({
                    HeaderShow:true
                })
            } else{
                this.setState({
                    HeaderShow:false
                })
            }
        })
    }
}
