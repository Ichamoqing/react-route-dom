import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './header.scss'

class Header extends React.Component {
/*   renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>); */

  render() {
    let DefaultTabsList = this.props.TagList.TagList;
    let tabs = [{title:'全部'}];
    if(DefaultTabsList.length){
        DefaultTabsList.forEach(item => {
            let title = item.cate_name;
            let obj = {title:title};
            tabs.push(obj);
        });
    }

    return (
      <div className="header">
        <Tabs tabs={tabs} 
        onChange={(tab, index) => {
            if(index){
              var id = DefaultTabsList[index-1].id
            } else{
              var id = 0;
            }
            this.props.TagList.getNavigaterData('/v1/news/'+id,1);
        }}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
        </Tabs>
      </div>
    );
  }

}
export default Header;