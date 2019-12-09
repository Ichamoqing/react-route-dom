import React, { Component,createRef} from 'react'
import './Swiper.scss'
import Swiper from 'swiper';
const banner = [
    {id:1,imgUrl:'https://axhub.im/pro/511b96895ac139d6/images/%E9%A6%96%E9%A1%B5/u3142.png',title:'如何让你的设计变得更有商业价值'},
    {id:2,imgUrl:'https://axhub.im/pro/511b96895ac139d6/images/%E9%A6%96%E9%A1%B5/u3144.png',title:'VR游戏市场将增长75%'},
    {id:3,imgUrl:'https://axhub.im/pro/511b96895ac139d6/images/%E9%A6%96%E9%A1%B5/u3146.png',title:'智慧出行|ADAS体验设计的多维度剖析'},
]

export default class SwiperDemo extends Component {
    constructor(props){
        super(props);
        this.swiper = createRef();
    }
    render() {
        return (
            <div className="swiper-container" ref={this.swiper}>
                <div className="swiper-wrapper">
                    {
                        banner.map(item=>(
                            <div className="swiper-slide" key={item.id}>
                                <img src={item.imgUrl} alt=""/>
                                <div className="text-context">
                                    {item.title}
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }
    componentDidMount(){
        
        const mySwiper = new Swiper(this.swiper.current, {
            direction : 'horizontal',
            loop:true,
        })
    }
}
