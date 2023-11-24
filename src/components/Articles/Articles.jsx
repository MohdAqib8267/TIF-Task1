import React, { useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Articles.css";
import { sliderSettings } from "../../utils/common"; 
import PropertyCard from "../PropertyCard/PropertyCard";
// import useProperties from "../../hooks/useProperties";

const Articles = () => {
  
  const data = [
    {
    img:"https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1701648000&Signature=p5l9qBoobG1H~IhcyOs5MirSv551Xo9F6B7~1lhin~TXQelxbnMxyPFzRVVWXTwBAAyowJlAjf8fF3x0oSiU4dYVSpZaatn6qTZFZhzqADHY0VjYPpqk3D2chNfuQXuHJsxO39y32x~mALkJYY9izw0YcDiWAUfHvEazA946tdal7JPEr8D4WTxD5KyrupM-jsqTaY26~7sz8VywSRHeHRyj-hU4g1jeiLcO4GRNuR~MRQn26YkRvAJ9uDVDiWie48yfjGvK0Px6w~3MxybhfNC2uA-vbAFRGgghzQ0OykW9I8TldbRKW4Cq40MMNnijifvZFAzdAOFEIU6xADWFTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"Grilled Tomatoes at Home",
    info:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        img:"https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1701648000&Signature=LIcvhCt-wMx0D-m-xXBqyMhof-uJgwVD5aUkbhP53SKtbutMOTfJmLupJK9LzwXabi4t6VJJEjSI4FYYik6DqEBBpZyGidzUCobJZrBEgJcIuHE-s2GdZ5lhlW9C15GLbpiYLPkhipGTKgis6jXUyF3jCH4hMBZd~ZoWcSapDtpdZwmRfeGtyzJfNBAo-HU0~ikCCct0XaSiKdhnWpIcAGrovJBn8R2VWjwrZyeCzIGiFnMuXHfe3ObSKeHveSvzpUtEVwfs1BcTRQ5bBr7eKHIZJhntGZONIG8kkrorI3PyDHXZQ1Z6DNtNeSfqtRocYJvNgBHhCQcFxVYb1JOCPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"Snacks for Travel",
    info:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        img:"https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1701648000&Signature=ZI1tRrucT0f~09gCwxQbkZivyogUqnlYeOvGRzGCrE~BmOiSvdlBINg3XOAhtUX6jUy-~PN96AzBrGGKgy2TBXBGYZW~jqmDbFkO53~S2f~2SvtmQ5xd23j4DOOIcMt0C~smL3NbQ9~8p6d8gGES3Kv9HEbNkX3AqHm~SLybYa4FLSCTGMexz7rDOsBDgWTbMi0UNFIEis-3TlHK0tuk89t8~~s9lU8W~v3BSSjRqXOmUGgHfomtUoaur-0588fZ~kf4VBO0hv0BmdItAdCeTRg9YEd4sUtMihJ2PrXkSS-cgief8HD4pW9xDFXMUH1DFcb44Fn~LdN-QOvaWhQTZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"Post-workout Recipes",
    info:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
    img:"https://s3-alpha-sig.figma.com/img/b457/cb75/2678ff07019c289fb72556852cc6b74f?Expires=1701648000&Signature=HXW9USVzZCL5RgluSTO-e6HWcD-AN8bGZyEe8QOI5zzmSo95JvFbkRGd~hW7Hoq39gZJtN7lp6VQ1OKU37VRf-Ce4y242Dvv7sjRyFwX4UZYLei1RPWcbJjE0vMqgM65yw7vrXaT6Eb9C5xvuBpMtciIJD2k99oczfwVzcHpy5v1kcTCF8kCmbrirhdcn131Qv4A4PyzUFykRuIhI6vN5cfv2eqte8CDxWjfOpnd8Eh8ltWZhFh2wey0iKzmiD-H85E237OU6cgV9aVS4FBuFlFWZSVcD8Y2RnM7~gLdt0TmzniJGehKgRjy9gIuCX5E923lSyCdXAev9GKN51EVYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"How To Grill Corn",
    info:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        img:"https://s3-alpha-sig.figma.com/img/36f0/05b2/98fb3af9a51a3627a968ca95735063e2?Expires=1701648000&Signature=KSJ8r-MfnUHifS8pILflJp2gap3h-MCCnYjJBrK4zahKhCAd2CrFMO5bYrQAzyYG8Mpwqetcvwu4HLn5n4Ilsk8x8vp3UUK6iGi33-sXtUCB~n~xYhubhlHRybx5dU98SVagF8Hb6yH4zZsfJgHoa0ZMMgq7Nzbqen7QLFgawfvGtgnzS61FBcxmMKygyKg4vE7cwxhuw8KZQkxs72VzI6XnT~gVY-bm86UIs4ehYGBjHpzmwl9cYyZAb0TQ5o0HnU2RK-odHb2PWYB5LH-U3ZRj44kLyDYrc2BOdh4BuVRrqxN-i0nyQVoFebtZzWji98Dprx2ddYTE6Rh-xqfQ2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"Crunchwrap Supreme",
    info:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        img:"https://s3-alpha-sig.figma.com/img/60f8/cba1/6ae830e61504aecaf6d8b547eb08589a?Expires=1701648000&Signature=nUt0Lbv1h2h3sjN9a9-MXbZj-MqiFJAtr-IB4S6TPFrmBM1DzR-K9r~lJhCWtr19zjKstoUtSIjdCOYYHDpY07JsfPKO7UarZsL2x2JDZn7W7xT1wklPRVKAHohnG4coXRbJTRb7BiAevFQza-gWioT4pk85sUONA~1Qu4DCrBAR6IQhMgTgoNhOIHN55244fFHCoqmoAdEDTErOsapTjOmUFli4jfzIBgiDvwXOL5jhr9CoffTOv~IzUjoa8psxJSVgMAqHJEbrNdrZ7N~KLjrX55k7DJb~7TT4D2CNsRUNb2PzxHCHyUFFKafePPOhAh~4rS8qSg5D2SPhjyfRbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading:"Broccoli Cheese Soup",
    info:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
  ]
// console.log(data);

  
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <h2>Latest Articles</h2>
          
        </div>
        <Swiper {...sliderSettings}>
          
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            
            </SwiperSlide>
          ))}
           <SlideNextButton />
        </Swiper>
       
      </div>
    </div>
  );
};

export default Articles;

const SlideNextButton = () => {
  const [cnt,setCnt]=useState(1);
  const swiper = useSwiper();
  const handlePrevClick = () => {
    setCnt((prevCnt) => (prevCnt > 1? prevCnt - 1 : prevCnt)); // Decrement cnt, ensuring it doesn't go below 0
    swiper.slidePrev();
  };
  const handleNextClick = () => {
    swiper.slideNext();
    setCnt((prevCnt) => (prevCnt>=2?prevCnt:prevCnt + 1)); // Increment cnt
    
  };
  return (
    <div className="flexCenter r-buttons">
      <button onClick={handlePrevClick} className="r-prevButton">
        &lt;
      </button>
      {" "}{cnt}/2{" "}
      
      <button onClick={handleNextClick} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
