import React, { Component } from 'react';
import MasonryLayout from 'react-masonry-layout';
import './SiteContent.css';
 
class SiteContent extends Component {
 
  static defaultProps = {
    maxCount: 5,
    perPage: 20
  }
 
  state = {
    count: 0,
    isLoading: false,
    items: Array(20).fill(),
    size: [
            { columns: 2, gutter: 20 }, 
            { mq: '768px', columns: 3, gutter: 20 },
            { mq: '1024px', columns: 4, gutter: 20 } 
          ]
  }
 
  render() {
    return (
      <div className="SiteContent">
        <MasonryLayout
          id="items"
          infiniteScroll={ () => { return } }
          infiniteScrollDisabled={ true }
          style={{ width: '100%' }}>
     
          {this.state.items.map((v, i) => <div
            key={i}
            style={{
              width: '236px',
              height: `${i % 2 === 0 ? 4 * 50 : 50 }px`,
              display: 'block',
              background: 'rgba(0,0,0,0.7)'
            }}
            />)}
     
        </MasonryLayout>
      </div>
    );
  }
}

export default SiteContent;