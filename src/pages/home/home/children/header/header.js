import React from 'react'
import './header.scss'
export default (props)=>{
    
    return(
        <div className="header">
            <h1>首页</h1>
            <div className="icon">
                <span className="app-react iconfont icon-yingyong"></span>
                <span className="app-search iconfont icon-search" onClick={()=>{
                    props.props.history.push('/home/search');
                }}></span>
            </div>
        </div>
    )
        
}
