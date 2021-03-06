import "../../assests/styles/home-page.css";
import banner from "../../assests/image/banner.webp";
import { Link } from "react-router-dom";
import { Category } from "../../components/components";

export default function Home() {
  return (
    <section className="home-page">
      <div className="banner">
        <div className="image img-text">
          <img src={banner} alt="banner" className="banner-img" />
          <div className="text text-overlay banner-text">
            <p className="banner-name">FullStackDevelopement </p>
            <p className="banner-line">
              Complete Full Stack Developement Videos to help you Learn and
              Practise !
            </p>
            <button className="btn">
              <Link className="nav-brand-link" to="/VideoListing">
                Watch Now{" "}
              </Link>
            </button>
          </div>
        </div>
        <Category />
      </div>
    </section>
  );
}
