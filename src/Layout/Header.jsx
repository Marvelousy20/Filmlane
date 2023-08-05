import { IonIcon } from "@ionic/react";
import { calendarOutline, timeOutline, play } from "ionicons/icons";

import MainNavigation from "./MainNavigation";
import Movies from "./Movies";
import Services from "./Services";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <MainNavigation />

      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <p class="hero-subtitle">Filmlane</p>

            <h1 class="h1 hero-title">
              Unlimited <strong>Movie</strong>, TVs Shows, & More.
            </h1>

            <div class="meta-wrapper">
              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 18</div>

                <div class="badge badge-outline">HD</div>
              </div>

              <div class="ganre-wrapper">
                <a href="/">Romance,</a>

                <a href="/">Drama</a>
              </div>

              <div class="date-time">
                <div>
                  <IonIcon icon={calendarOutline}></IonIcon>

                  <time datetime="2022">2022</time>
                </div>

                <div>
                  <IonIcon icon={timeOutline}></IonIcon>

                  <time datetime="PT128M">128 min</time>
                </div>
              </div>
            </div>

            <button class="btn btn-primary">
              <IonIcon icon={play}></IonIcon>

              <span>Watch now</span>
            </button>
          </div>
        </div>
      </section>

      <Movies />

      <Services />

      <Footer />
    </>
  );
};

export default Header;
