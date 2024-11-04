
import Header from "@/app/components/header";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div><Header/>
   
    <div className="content-container">
      <div className="project-lorum">
        <h1>Project</h1>
        <p><b>Lorum</b></p>
      </div>
      <div className="building-image">
      <button className="building-button">View Project &rarr;</button>
        <img src="/Rectangle 6.png" alt="Description" />
       
      </div>
    </div>
  <div className="about-container">
  <div className="about-image">
  <img src="/Rectangle 8.png" alt="Description" className="img-8"/>
 
  <img src="/Rectangle 10.png" alt="Description" className="img-10"/>
  </div>
  
 
  <img src="/Rectangle 9.png" alt="Description" className="img-9"/>
  <div className="about-1"><h1 className="about">ABOUT</h1>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
 </div>
<img src="/mainfocus1.png" alt="focus" className="focus-line"/>
<div className="L-1">
  <img src="/Group 16.png" alt="" className="pic-1"/>
  <img src="/Group 15.png" alt="" className="pic-2"/>
</div>
      
<div className="our-projects">
  <img src="/Group 79.png" alt="" />
</div>

    <div className="contact-container">
      <div className="contact-form">
        <h3>Contact Us</h3>
        
        <div>
          <textarea name="name" id="name" >Name:</textarea>
        </div>
        <div>
          <textarea name="phone" id="phone-no" >Phone no:</textarea>
        </div>
        <div>
          <textarea name="email" id="email" >Email:</textarea>
        </div>
        <div>
          <textarea name="interest" id="interest">Interested In:</textarea>
        </div>
        <div className="message">
          <textarea name="message" id="message" >Message:</textarea>
        </div>
      </div>
      
      <div className="image-12">
        <img src="/image 12.png" alt="Contact Image" />
      </div>
    </div>
   
   <button>Send Email &rarr;</button><br/><br/><br/>
   <Footer/>
    </div>
 
  );
}

