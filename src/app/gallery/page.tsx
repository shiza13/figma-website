
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";


export default function GalleryPage() {
  
  return (
    <div >
      <Header /><div className="photo">
      <div>Photo</div><div className="gallery"><b>Gallery</b></div>
      </div>
      <div className="gallery-images">
        <img src="/Rectangle 22.png" alt="" />
        <img src="/Rectangle 23.png" alt="" />
        <img src="/Rectangle 24.png" alt="" />
        <img src="/Rectangle 25.png" alt="" />
        <img src="/Rectangle 26.png" alt="" />
        
      </div>
      <div className="gallery-images-2">
      <img src="/Rectangle 27.png" alt="" />
        <img src="/Rectangle 28.png" alt="" />
        <img src="/Rectangle 29.png" alt="" />
        <img src="/Rectangle 30.png" alt="" />
        <img src="/Rectangle 31.png" alt="" />
      </div>
      <div className="slide-arrow">
      <img src="/slide-numbers.png" alt="" className="slide-no"/><button className="arrow">&rarr;</button>
      </div>
      <Footer/>
      </div>
      );}