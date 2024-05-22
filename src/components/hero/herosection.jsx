import React from "react";
import "../hero/heroStyle.css";
// import srevice1 from "./services1.svg";
import objectt from "../../api/object";
import aboutimg from "./about1.png.webp";
import Pdata from "../propsdata/pdata";
import priceimg from "../propsdata/price1.svg";
import Tabs from "../tabs/tab2";
import priceimg2 from "../propsdata/price2.svg";
import priceimg3 from "../propsdata/price3.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidimg from "../hero/brand1.png.webp";
import slidimg2 from "../hero/brand2.png.webp";
import sldeimg3 from "../hero/brand3.png (1).webp";
import slideimg4 from "../hero/brand4.png.webp";
import slider2img from "../hero/stuffs1.jpg.webp";
import slider2img2 from "../hero/stuffs2.jpg.webp";
import slider2img3 from "../hero/stuffs3.jpg.webp";
import cirlimg from "./bg-2.png.webp";





function Hero() {



   

    const arrow = () =>{
        window.scrollTo({
            top:0,
        })
    }

    // const contentsettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             contentsettings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 768,
    //             contentsettings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             contentsettings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };


    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <>

            <div className="heroimg ">
                <div className="main contaner">
                    <div className="left-content">
                        <span>Digital Marketing Expert</span>
                        <h1>We bring you new customers</h1>
                        <p>We build effective strategies to help you reach customers and prospects across the entire web.</p>
                        <button>Explore Service</button>
                    </div>
                    <div className="right-content">
                        <button><a href="https://youtube.com/shorts/jX8PbaReV5Q?si=rn46Fg-yHyZda7mr" target="blank"><i class="fa-solid fa-play"></i></a></button>
                    </div>
                </div>


            </div>


            <div className="contaner oueservice">
                <span>OUR SERVICES</span>
                <h2>Provide Awesome Service With Our Tools</h2>
            </div>
            <div className="card-main">
                {
                    objectt.map((data) => {

                        return (
                            <div className="main-box" key={data.id}>
                                <div className="box1">
                                    <h3>{data.title}</h3>
                                    <img src={data.img} alt="not suport" />
                                    <p>Efective Strategies to help your reach customers</p>
                                </div>
                            </div>



                        )


                    })
                }
            </div>

            <div className="contaner about-main">
                <div className="aboutusleft">
                    <img src={aboutimg} alt="not support" className="aboutimg"/>
                </div>
                <div className="aboutus">
                    <span>ABOUT US</span>
                    <h2>We Create a Steps to Build a Successful Digital Product</h2>
                    <p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
                    <p>We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
                    <a href="#">Explore More</a>
                </div>
            </div>

            <div className="tab-box">
                <span>PRICING PLAN</span>
                <h2>Choose Your Best Pricing Plan</h2>
                <Tabs>
                    <div label="YEARLY">
                        <div className='pflex'>
                            <Pdata price={"$ 05.00"} img1={priceimg} />
                            <Pdata price={"$ 05.00"} img1={priceimg2} />
                            <Pdata price={"$ 05.00"} img1={priceimg3} />
                        </div></div>
                    <div label="MONTHLY">
                        <div className='pflex'>
                            <Pdata price={"$ 022.00"} img1={priceimg2} />
                            <Pdata price={"$ 05516.00"} img1={priceimg3} />
                            <Pdata price={"$ 01515.00"} img1={priceimg} />
                        </div>
                    </div>
                </Tabs>

            </div>

            <main className="main-co">
                <section className="left-co">
                    <span>
                        WHY CHOOSE US
                    </span>
                    <h2>We are an SEO company that specializes in developing</h2>

                </section>
                <section className="right-co">
                    <a href="#"> Explore More</a>
                </section>
            </main>
            <main className="sp-main">
                <section className="sp1">
                    <div>
                        <span className="a450">450 +</span>
                        <p className="p450">Successfully <br />completed projects</p>
                    </div>
                    <div>
                        <span className="a450">860 </span>
                        <p className="p450">Highly specialised<br /> employees</p>
                    </div>
                </section>
                <section className="sp2">
                    <p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
                    <p className="fnnt-w">- Shonda Leer, Chief of Staff at Franclin Technologies</p>
                </section>
            </main>

            <div className="slide-main-box">
                <Slider {...settings}>
                    <div className="inner-slide">
                        <img src={slidimg} alt="" />
                    </div>

                    <div className="inner-slide">
                        <img src={slidimg2} alt="" />
                    </div>

                    <div className="inner-slide">
                        <img src={sldeimg3} alt="" />
                    </div>

                    <div className="inner-slide">
                        <img src={slideimg4} alt="" />
                    </div>

                    <div className="inner-slide">
                        <img src={slidimg2} alt="" />
                    </div>



                </Slider>
            </div>


            <div className="study-case">
                <span>CASE STUDY</span>
                <h1>Some Of Our Awesome <br /> Stuffs</h1>
            </div>

            <div className="slider2">
                <Slider {...settings2}>

                    <div className="slidbox2">
                        <img src={slider2img} alt="" />
                        <div className="imgcont">
                            <span>Marketing</span>
                            <h2>Discover, Explore <br />the product</h2>
                        </div>
                    </div>

                    <div className="slidbox2">
                        <img src={slider2img2} alt="" />
                        <div className="imgcont">
                            <span>Marketing</span>
                            <h2>Discover, Explore <br />the product</h2>
                        </div>
                    </div>

                    <div className="slidbox2">
                        <img src={slider2img3} alt="" />
                        <div className="imgcont">
                            <span>Marketing</span>
                            <h2>Discover, Explore <br />the product</h2>
                        </div>
                    </div>

                </Slider>
            </div>

            {/* <div className="contntslide">
                <Slider {...contentsettings}>

                    <div className="co-box">
                        <img src={womenimg} alt="not support" />
                        <p>"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation</p>
                        <span>- Robert . Creative Director at Colorlib</span>
                    </div>

                </Slider>
            </div> */}


            <div className="sec-last-co">
                <div className="cirl">
                    <img src={cirlimg} alt="" className="wd"/>
                    <div className="cirl-content">
                        <h5>Interested To
                            Digging Dipper?</h5>
                            <p class="emargenc-cap">We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
                            <a href="contact.html" class="border-btn loan-btn">Contact Us</a>
                    </div>
                </div>
            </div>

            <button onClick={arrow}><i class="fa-solid fa-arrow-up-long"></i></button>

       
        </>
    )
}
export default Hero;