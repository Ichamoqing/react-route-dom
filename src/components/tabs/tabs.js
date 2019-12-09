import React from 'react'
import {NavLink} from 'react-router-dom'
import './tabs.scss'

const tabsData = [
    {id:1,icon:'iconfont icon-yemian-copy-copy-copy-copy',title:'首页',link:'/home'},
    {id:2,icon:'iconfont icon-daohang',title:'动态',link:'/navigation'},
    {id:3,icon:'iconfont icon-gerenzhongxinwoderenwubiaozhuntoumianxing',title:'消息',link:'/mine'}
]

export default ()=>{
    return (
        <nav className="border-top app-tabs">
            {
                tabsData.map(item=>
                    (
                        <NavLink className="tab" key={item.id} to={item.link}>
                            <span className={item.icon}></span>
                        </NavLink>
                    )
                )
            }
        </nav>
    )
}



