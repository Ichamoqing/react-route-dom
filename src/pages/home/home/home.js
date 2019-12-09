import React, { Component} from 'react'
import Header from './children/header/header'
import Swiper from './children/Swiper/SwiperDemo'
import Content from './children/content/content'
import './style.scss'
export default class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main">
                <Header props={this.props}/>
                
                <div className="content" ref={(el)=>{this.scroll=el}}>
                    <div className="wrap">
                        <Swiper/>
                        <Content props={this.props}/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.SCroll = new window.IScroll(this.scroll, {
            probeType: 3,
            scrollY:true,
        })
        this.SCroll.on('beforeScrollStart', ()=>{
            this.SCroll.refresh();
        });
    }
}
