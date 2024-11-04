import Header from "@/app/components/header";
import Footer from "@/app/components/footer";


export default function GalleryPage() {
  
  return (
    <div ><Header />
      <div className="our">Our</div>
      <div className="project-1"><b>Projects</b></div>
      <div className="projects">
        <div><img src="/Group 13.png" alt="" className="group-13"/></div>
        <div><img src="/Group 14.png" alt="" className="group-14"/></div>
        <div><img src="/Group 15 (1).png" alt="" className="groupno-15"/></div>
      </div>
      <Footer/>
      </div>
  );
}
