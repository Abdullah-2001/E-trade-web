import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function MultipleItems() {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick} className="nextArrow">
                <FiArrowRight />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick} className="prevArrow">
                <FiArrowLeft />
            </div>
        );
    }

    const arr = [
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
        { img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png" },
    ]

    const settings = {
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <Slider {...settings}>
                {arr.map((v, i) => {
                    return (
                        <>
                            <img src={v.img} />
                            <p style={{ fontSize: "18px", fontWeight: "700", marginTop: "15px" }}>Watches</p>
                        </>
                    )
                })}
            </Slider>
        </div>
    );

}