import React from "react";
// import img from '../../images/PlusPointWhite.png' ;
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';  
import './Footer.css';

export default function Footer(){
    return(
        <>
        <div className="main-main-footer" style={{}}>
          <div className="main-footer">
               <div className="foot-row-1"> 
                   <div className="foot-col-1">
                       <img src="https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1701648000&Signature=UcpcdZjFLKvpqBZnKty19bBBxa~ibU0Z9smzXERhqYA-NUbCraPKL~wKKseXd1xVz2YCvscUW5eIyYJOQ4V7xpQG4JEpwZgGaVFd5wt6E0lQiltim04Tmdw87Pkrkp~ZZH7ue~5MEzg4zYMoMJ~P7qIGQurnB0wmgGMQ81FtaJLnGUyW~hlbgDcas4hckLcysrdYUsRyyksiH2oeDQh1w5DZa58sp73F~CywXfFBYD3FyW-UxL8-wd-DMfH85jFqCHdxgYIvhBdvCD-IaRY1Sa~sdWdajq9iMCURTf~Nc241cE4ZLCTCd50xVM2xJvWeOs6y0Hd8V5T8ybqUY1cz7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="foot-img"/>
                       
                       
                   </div>
                   <div className="foot-col-2 foot-col target">
                     <h3>Contact Us</h3>
                     <span href="">Lorem Ipsum Pvt Ltd.5/1, Magalton<br/> Road, Phartosh Gate near YTM<br/> Market, XYZ-343434</span>
                     <span href="">example2020@gmail.com</span>
                     <span href="">(904) 443-0343</span>
                     
                   </div>
                   <div className="foot-col-3 foot-col">
                       <h3>More</h3>
                       <span href="">About Us</span>
                       <span href="">Products</span>
                       <span href="">Career</span>
                       <span href="">Contact Us</span>
                      
                   </div>
                   <div className="foot-col-3  foot-col-links foot-col">
                       <h3>Social Links</h3>
                       <div className="icons-pp"> 
                        <div className="social-icons">

                        <div className="si-div"><InstagramIcon/></div>
                           <div className="si-div"><FacebookOutlinedIcon /></div>
                          <div className="si-div"><TwitterIcon /></div>
                          
                          
                       </div>
                        <div style={{color:"#828B9C"}}>
                        © 2022 Food Truck Example
                        </div>

                       </div>

                       
                   </div>
                   
               </div>
               
               
          </div>
          </div>
        </>
    )
}