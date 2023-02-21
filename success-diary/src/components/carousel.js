import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
          className: "center",
          centerMode: true,
          infinite: false,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          focusOnSelect: true,
          draggable: true
        };
        return (
          <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                 <Card/>
              </div>
              <div>
                 <Card/>
              </div>
            </Slider>
          </div>
        );
      }
}

function Card() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}