import React, { Component } from 'react'
import Swiper from 'swiper'
import './other.scss'
export default class other extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
              <div className="swiper-title">
                <div className="title">设计师专访的其他创作</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.otherlist.map(item=>(
                                <div className="swiper-slide" key={item.id}>
                                    <img src={item.cover} alt=""/>
                                    <div className="text-content">
                                        {item.title}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        const otherSwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            freeMode: true,
        });
    }
}
