import React, { Component } from 'react';
import MasonryItem from './MasonryItem';
import './MasonryGrid.css';
import card1 from '../../assets/img/card-1.png';
import card2 from '../../assets/img/card-2.png';
import card3 from '../../assets/img/card-3.png';
import card4 from '../../assets/img/card-4.png';
import card5 from '../../assets/img/card-5.png';
import card6 from '../../assets/img/card-6.png';

// const MasonryGrid = props => (
//   <div className="MasonryGrid">
//     <ul className="content">
//       <li><MasonryItem source="http://cdn.playbuzz.com/cdn/7a7a5814-ed79-410c-b748-db6a24f73f0b/4d71c010-f930-4334-ba62-79d87a7ddef4.jpg" /></li>
//       <li><div className="masonry-item"><img src="http://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/8/aa/8aabb05a-1817-11e3-870e-0019bb30f31a/522bba8a1bfd6.image.jpg" alt="" /></div></li>
//       <li><div className="masonry-item"><img src="http://cdn.playbuzz.com/cdn/7a7a5814-ed79-410c-b748-db6a24f73f0b/4d71c010-f930-4334-ba62-79d87a7ddef4.jpg" alt="blah" /></div></li>
//       <li><div className="masonry-item"><img src="http://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/8/aa/8aabb05a-1817-11e3-870e-0019bb30f31a/522bba8a1bfd6.image.jpg" alt="" /></div></li>
//       <li><div className="masonry-item"><img src="http://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/8/aa/8aabb05a-1817-11e3-870e-0019bb30f31a/522bba8a1bfd6.image.jpg" alt="" /></div></li>
//       <li><div className="masonry-item"><img src="http://cdn.playbuzz.com/cdn/7a7a5814-ed79-410c-b748-db6a24f73f0b/4d71c010-f930-4334-ba62-79d87a7ddef4.jpg" alt="blah" /></div></li>
//       <li><div className="masonry-item"><img src="http://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/8/aa/8aabb05a-1817-11e3-870e-0019bb30f31a/522bba8a1bfd6.image.jpg" alt="" /></div></li>
//     </ul>
//   </div>
// );

class MasonryGrid extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          date: 'FEBRUARY 10 2017',
          title: 'Bureaux exquisite delightful carefully curated soft power.',
          author: 'LOREM IPSUM',
          img: card1
        },
        {
          date: 'FEBRUARY 2 2017',
          title: 'Sharp bureaux sleepy K-pop carefully curated.',
          author: 'LOREM IPSUM',
          img: card4
        },
        {
          date: 'JANUARY 27 2017',
          title: 'St Moritz uniforms Beams.',
          author: 'LOREM IPSUM',
          img: card2
        },
        {
          date: 'JANUARY 21 2017',
          title: 'Esse airport veniam ryokan soft power.',
          author: 'LOREM IPSUM',
          img: card5
        },
        {
          date: 'JANUARY 18 2017',
          title: 'K-pop extraordinary.',
          author: 'LOREM IPSUM',
          img: card3
        },
        {
          date: 'JANUARY 12 2017',
          title: 'Artisanal iconic cutting-edge business class.',
          author: 'LOREM IPSUM',
          img: card6
        }
      ]
    }
  }

  render() {
    return (
      <div className="MasonryGrid">
        <ul className="content">
          {
            this.state.items.map((card, i) => <li key={ i }>
                <MasonryItem
                  date={ card.date }
                  title={ card.title }
                  author={ card.author }
                  img={ card.img } 
                />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default MasonryGrid;