import { IonIcon } from "@ionic/react";
import { star, timeOutline } from "ionicons/icons";
import upcoming1 from "../assets/upcoming-1.png";
import upcoming2 from "../assets/upcoming-2.png";
import upcoming3 from "../assets/upcoming-3.png";
import upcoming4 from "../assets/upcoming-4.png";

const Movies = () => {
  return (
    <>
      <section class="upcoming" id="movies">
        <div class="container">
          <div class="flex-wrapper">
            <div class="title-wrapper">
              <p class="section-subtitle">In-Cinema Showings</p>

              <h2 class="h2 section-title">Previously Screened Films</h2>
            </div>

            <ul class="filter-list">
              <li>
                <button class="filter-btn">Movies</button>
              </li>
            </ul>
          </div>

          <ul class="movies-list  has-scrollbar">
            <li>
              <div class="movie-card">
                <a href="/">
                  <figure class="card-banner">
                    <img src={upcoming1} alt="The Northman movie poster" />
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="/">
                    <h3 class="card-title">The Northman</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time datetime="PT137M">137 min</time>
                  </div>

                  <div class="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>8.5</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="movie-card">
                <a href="/">
                  <figure class="card-banner">
                    <img
                      src={upcoming2}
                      alt="Doctor Strange in the Multiverse of Madness movie poster"
                    />
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="/">
                    <h3 class="card-title">
                      Doctor Strange in the Multiverse of Madness
                    </h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">4K</div>

                  <div class="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time datetime="PT126M">126 min</time>
                  </div>

                  <div class="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="movie-card">
                <a href="./movie-details.html">
                  <figure class="card-banner">
                    <img src={upcoming3} alt="Memory movie poster" />
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">Memory</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time datetime="">N/A</time>
                  </div>

                  <div class="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="movie-card">
                <a href="./movie-details.html">
                  <figure class="card-banner">
                    <img
                      src={upcoming4}
                      alt="The Unbearable Weight of Massive Talent movie poster"
                    />
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">
                      The Unbearable Weight of Massive Talent
                    </h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time datetime="PT107M">107 min</time>
                  </div>

                  <div class="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Movies;
