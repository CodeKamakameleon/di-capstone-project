import { Link } from "react-router-dom";
import bannerVid from "../images/website-banner.mp4";

export const Banner = () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    // <!-- Slideshow container -->
    <div class="slideshow-container">
      {/* <!-- Full-width images with number and caption text --> */}
      <div class="mySlides fade">
        <video src={bannerVid} style="width:100%" />
        <div class="text">
          {" "}
          Pihana Ka Ikena is a non-profit corporation that perpetuates
          traditional Hawaiian healing arts and culture through education and
          practical application. The Pihana Ka Ikena mission is to address the
          various health, social, and economic disparities afflicting Native
          Hawaiians through education of Hawaiian cultural practices.
        </div>
        <Link className="btn" to="/about">
          About Us
        </Link>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="img2.jpg" style="width:100%" />
        <div class="text">
          La`au lapa`au is the traditional Hawaiian practice of plant medicine.
          There are over 150 native plants used in la`au lapa`au for treating
          ailments ranging from a sore throat and brain fog to more serious
          conditions such as high blood pressure, gout and even cancer.
        </div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="img3.jpg" style="width:100%" />
        <div class="text">Caption Three</div>
      </div>

      {/* <!-- Next and previous buttons --> */}
      <a class="prev" onclick="plusSlides(-1)">
        &#10094;
      </a>
      <a class="next" onclick="plusSlides(1)">
        &#10095;
      </a>
    </div>
  );
};
