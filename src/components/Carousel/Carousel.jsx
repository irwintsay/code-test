import React, { Component } from 'react';
import Slider from './Slider';
import './Carousel.css';

class Carousel extends Component {
  checkCarouselRatio() {
    let first = document.querySelector('.hero.first');
    let second = document.querySelector('.hero.second');
    let third = document.querySelector('.hero.third');
    let slider = document.querySelector('.slick-slider');
    let active = document.querySelector('.slick-active');
    if(first.offsetWidth * .75 < first.offsetHeight) {
      active.classList.add('fixed-aspect-ratio');
      first.classList.add('fixed-aspect-ratio');
      second.classList.add('fixed-aspect-ratio');
      third.classList.add('fixed-aspect-ratio');
      slider.classList.add('fixed-aspect-ratio');
    } else {
      active.classList.remove('fixed-aspect-ratio');
      first.classList.remove('fixed-aspect-ratio');
      second.classList.remove('fixed-aspect-ratio');
      third.classList.remove('fixed-aspect-ratio');
      slider.classList.remove('fixed-aspect-ratio');
    }
  }

  componentDidMount() {
    // Janky work-around for getting the fixed-aspect-ratio to apply on fresh page load
    setTimeout(this.checkCarouselRatio.bind(this), 10);
    window.addEventListener('resize', this.checkCarouselRatio.bind(this));
    console.log(document.querySelector('.Carousel').style.height);
  }

  render() {
    return (
      <div className="Carousel" ref={(div) => { this.crf = div; }}>
        <div className="hero-copy">
          <span className="large-text springville">Screening:</span>
          <span className="large-text springville">DVF Secret Agent Part 2</span>
          <p className="medium-text acaslonpro">October 15, 2017</p>
          <span className="small-text acaslonpro">Join us for a private screening of DVF Secret Agent Part 2</span>
          <span className="small-text acaslonpro">with our special guest, director Peter Lindberg.</span>
        </div>
        <div className="overlay screen"></div>
        <Slider checkCarousel={ this.checkCarouselRatio.bind(this) } />
      </div>
    );
  }
}

export default Carousel;