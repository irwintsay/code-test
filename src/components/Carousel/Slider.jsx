var React = require('react');
var Slick = require('react-slick');

const Slider = props => (
  <Slick
    className="Slick"
    dots={ true }
    infinite={ true }
    speed={ 1000 }
    slidesToShow={ 1 }
    slidesToScroll={ 1 }
    autoplay={ true }
    autoplaySpeed={ 4000 }
    swipe={ true }
    swipeToSlide={ true }
  >
    <div className="hero first"></div>
    <div className="hero second"></div>
    <div className="hero third"></div>
  </Slick>
);

export default Slider;