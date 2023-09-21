import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import Featured from "../../component/feature/Featured";
import "./Home.css";
import PropertyList from "../../component/propertyList/PropertyList";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <div className="hometype">Browse by Property types</div>
        <PropertyList/>
        <div className="hometype">Homes guests love</div>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
     </div>
  )
}

export default Home