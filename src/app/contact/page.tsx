import Header from "@/app/components/header";
import Footer from "@/app/components/footer";


export default function GalleryPage() {
  
  return (
    <div >
      <Header /><div className="contact"><img src="/image 14.png" alt=""className="contac-image" />
        CONTACT
      </div>
      <div className="information"><b>Information</b></div>
      <div className="company-name"><b>Company Name</b></div>
     <div className="address"> 1234 Sample Street Austin Texas 76401</div>
     <div className="number">512.333.2222</div>
     <div className="email">sampleemail@gmail.com</div>
     <button className="contact-button">Contact us</button>
      <Footer/>
      </div>
  );
}