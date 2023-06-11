"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './footer.module.css';
import Logo from "public/logo.png";

const Footer =()=>{
    useEffect(()=>{
       console.log("It works");
    },[])
    return(
        <div className={styles.footer}>
            <div id={styles.section1} className={styles.flexDiv}>
                <div id={styles.part1}>
                    <div className={styles.flexDiv}>

                    <Image id={styles.logo} width="50px"src="data:image/png;base64,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" alt="" />
                    <span style={{fontSize:"30px",fontWeight:"500"}}>aasthy</span>
                    </div>
                    <div className={styles.flexDiv}>
                        <Image width="25px"src="https://aasthy.com/static/media/astute-giraffe-icon.eef034b8.svg" alt="" />
                        &emsp;
                        <span style={{paddingTop:"5px",fontWeight:"500"}}>  Astute Giraffe </span>
                    </div>
                    
                    <span style={{fontSize:"13px"}}>Astute Giraffe Private Limited</span>
                    <br />
                    <br />
                    <p style={{fontSize:"13px"}}>Find us on</p>
                    <div className={`${styles.flexDiv} ${styles.socialsl}`}>
                        <a href="">
                            <Image width='20px' src="https://png2.cleanpng.com/sh/144e24378b79612d047130d0eb946b07/L0KzQYi4UsAzN2M7e5GAYUK1coW8gfE6PGI8TJC7MEi8Qoe8WcE2OWM3SqUDM0S5SYS6TwBvbz==/5a22b45aa94174.2089265915122238346933.png" alt="" />
                        </a>
                        <a href="">
                            <Image width='20px' src="https://png2.cleanpng.com/sh/6e02d03058dbb23d2cfbac92cef0b505/L0KzQYm3U8MxN5NpiZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfxwb5Cye95ycD3kgsW0if50fJJsitN2LUXkcra4UPM6a5Y8TKU7Lki4Q4aCWMI5OWY3SqY5NUW6R4m7VccveJ9s/kisspng-computer-icons-logo-clip-art-instagram-5abe10c9ce7432.8535982815224055778457.png" alt="" />
                        </a>
                        <a href="">
                            <Image width='20px' src="https://png2.cleanpng.com/sh/ac8b03a2c0efc2296231c9516d53ed6f/L0KzQYm3VMA3N6hBfZH0aYP2gLBuTgNqdJl0jdd9dHWwc7F0kQV1baMygdV4boOwhMjwlQRmel5ohNt5LXH1hH77lBl1fJZ3RadqY0i1RLftWcE0QZc7RqoEOEO3Q4O8UcUzO2E7TqM6MUW8RIq1kP5o/kisspng-silhouette-computer-icons-twitter-clip-art-twitter-5ac824ff9139f6.8983432515230661115949.png" alt="" />
                        </a>
                        <a href="">
                            <Image width='20px' src="https://png2.cleanpng.com/sh/e5a8e2febfcf5a94d74bcc3d14426161/L0KzQYm3VME1N6tpiZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfxqdpxqfNt3LXzyd7E0if50fJIyTdNtMUizRoGAUPFnPmIzSqMDN0O0Qom4VcI0PmgAS6QDNEa0RnB3jvc=/kisspng-computer-icons-linkedin-logo-insta-5ad1806070af61.2187312815236793284616.png" alt="" />
                        </a>
                        <a href="">
                            <Image width='20px' src="https://png2.cleanpng.com/sh/ab7ab84c3235109c20eb97d092d7c505/L0KzQYm3VMA2N6h6j5H0aYP2gLBuTglwfaV6etc2Y3BwgMb7hgIucZR0huU2ZnBxhH7olBV0d55qRd54Z3Awc73wkL1ieqUyjtttZXAwebT2jr02aZQ6etVrZkfkQrS6Vb4zO2k6TKIBM0G4QoOCUMg0PWI6SKI9LoDxd1==/kisspng-youtube-computer-icons-font-awesome-logo-clip-art-video-icon-5ac5bcbf7a2c35.2385406315229083515004.png" alt="" />
                        </a>
                    </div>
                </div>
                <div id={styles.part2}>
                    <p>Quick Links</p>
                    <br />
                    <div >
                        <div className={styles.flexDiv}>
                            <a href="">Invest Now</a>
                            <a href="">Testimonials</a>
                            <a href="">About Us</a>
                        </div>
                        <div className={styles.flexDiv}>
                            <a href="">Refer & Earn</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                </div>
                <div id={styles.part3}>
                    <h3>Support</h3>
                    <br />
                    <span><Image width='15px'src="https://aasthy.com/static/media/email-footer.3565b9fe.svg" alt="" />&emsp;
                        support@aasthy.com
                    </span>
                    <br />
                    <br />
                    <span><Image width='15px'src='https://aasthy.com/static/media/phone-footer.8c04ca18.svg' alt="" />&emsp;
                        +91 8045688004
                    </span>
                </div>
            </div>
            <hr />
            <div id={styles.section2} className={styles.flexDiv}>
                <span><Image width="20px" src="https://png2.cleanpng.com/sh/3fa50af873dfef9fde298508a1f84d42/L0KzQYi4UsIxN5J1iZGAYUPkRLTphcM0bWRmT5CAMEWzQIa4WcE2OWQ8T6I6N0S1QYO8Ucc0PV91htk=/5a3a4cbe33e3a7.50500519151377017421251735.png" alt="" />2022, Aasthy</span>

                <div>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a></div>
            </div>
            <hr />
            <div id={styles.section3}>
                <div className={styles.part1}>
                    <a href="/real-estate-investment-in-Bangalore" >Real Estate Investment in Bangalore</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-mumbai" >Real Estate Investment in Mumbai</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Delhi" >Real Estate Investment in Delhi</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Kolkata" >Real Estate Investment in Kolkata</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Chennai" >Real Estate Investment in Chennai</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Hyderabad" >Real Estate Investment in Hyderabad</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Goa" >Real Estate Investment in Goa</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Gujarat" >Real Estate Investment in Gujarat</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Ahmedabad" >Real Estate Investment in Ahmedabad</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Pune" >Real Estate Investment in Pune</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Noida" >Real Estate Investment in Noida</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Karnataka" >Real Estate Investment in Karnataka</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Tamil%20Nadu" >Real Estate Investment in Tamil Nadu</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Kerala" >Real Estate Investment in Kerala</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Maharashtra" >Real Estate Investment in Maharashtra</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-West%20Bengal" >Real Estate Investment in West Bengal</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Rajasthan" >Real Estate Investment in Rajasthan</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Uttar%20Pradesh" >Real Estate Investment in Uttar Pradesh</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Madhya%20Pradesh" >Real Estate Investment in Madhya Pradesh</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Haryana" >Real Estate Investment in Haryana</a>&nbsp;|&nbsp;<a href="/real-estate-investment-in-Punjab" >Real Estate Investment in Punjab</a>&nbsp;|&nbsp;<a href="/investments?page=explore" >Fractional Investments in Real Estate</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in REITS</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in Embassy REIT</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in Brookfield REIT</a>&nbsp;|&nbsp;<a href="/faq#reit" >Invest in Mindspace REIT</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >Monthly Returns on Real Estate Investments</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >How to get assured returns?</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >How to get monthly returns on investments?</a>&nbsp;|&nbsp;<a href="https://medium.com/aasthy/aasthy-your-investment-buddy-21cba73bb49f" >How to make passive income on my investments?</a>
                </div>
                
                <br />
                <div className={styles.part2}>
                    <h4>Disclaimer</h4>
                    <p>Aasthy.com is a website and a fractional investment platform operated by Astute Giraffe Private Limited (&quot;Aasthy&quot;) (Company Number: 202220900D). Astute Giraffe serves as a manager to asset holding entities in various countries, like Aasthy Enterprises LLP, for India. From time to time, the executives of Astute Giraffe Private Limited organize private companies (SPVs) under the asset holding entities registered in respective countries. Neither Astute Giraffe nor asset holding entity is a broker-dealer or an investment advisor. All securitisation is conducted under the Aasthy asset holding entities organized by Astute Giraffe.</p>
                    <br />

                    <p>You should speak with your financial advisor, accountant, and/or attorney when evaluating any offering of interests, securities or fractional ownership. Neither Astute Giraffe nor Aasthy asset holding entities makes any recommendations or provides advice about investments, and no communication, through this website or in any other medium, should be construed as a recommendation for any security offered on or off this investment platform. Nothing in this material should be construed as investment or tax advice, or a solicitation or offer, or a recommendation to buy or sell any securities. The Site and/or the App may make forward-looking statements. These forward-looking statements include, but are not limited to, statements concerning the company, property, risk factors, plans, and projections. You should not rely on these statements but should carefully evaluate the offering materials in assessing any investment opportunity, including the complete set of risk factors that are provided as part of the offering circular for your consideration. We urge you to review the applicable offering circular, available here.</p>

                    <br />
                    <p>Neither Aasthy asset holding entities nor Astute Giraffe, nor any other person or entity assumes responsibility for the accuracy and completeness of forward-looking statements. Investments displayed on the Website are not bank deposits, are not insured, and are not guaranteed by Aasthy and/or Astute Giraffe, and may lose value. Investment opportunities posted on this website are &quot;private placements&quot; of securities that are not publicly traded, are subject to max holding period requirements, and are intended for investors who do not need a liquid investment.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
