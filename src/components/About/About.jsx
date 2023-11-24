import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='About'>
      <div className="about-left">
        <img src="https://s3-alpha-sig.figma.com/img/5b80/babf/a1ef27ac038072c6f30264ab0d7bc72d?Expires=1701648000&Signature=SDMrBn9DOKeGDftDhj1IviXhG8CbZQAnPAPMdnnDifDZYDeY-pVfyqAfdtagaJc~ys7~UXUVkeOJb7N-Xbkwc8EO8akQwycgntMvYpelWYBnaMKu7HKfdBKy~E8fWmu6ROmW-M13xiIx3l93IiGCQvA-7HALiwfz2oQ2bU0zdAzPNLBlY4gMn2XQIJA0t~IzE3bw2Rtj-65pjtDOm2RVwiqDmnaqZkQUurYuxtzlQmZt5-9zArHlWG00djMSYDpPMqjxitKZfNVnBWxDUFMeW5pjo-PJQBE6jrxpKXawxEX0iwi7KK8p0l0Qr6IUss9OSAGdiXKGqvCinVPPDWYhcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

        
      </div>
      <div className="about-right">
        <h2 style={{color:"#0E2368"}}>About Us</h2>
        <div style={{width:'85%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        </div>
        <div className="btn btn-more">
            <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
