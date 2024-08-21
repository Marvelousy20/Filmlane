import { IonIcon } from "@ionic/react";
import { star, timeOutline } from "ionicons/icons";
import upcoming1 from "../assets/upcoming-1.png";
import upcoming2 from "../assets/upcoming-2.png";
import upcoming3 from "../assets/upcoming-3.png";
import upcoming4 from "../assets/upcoming-4.png";
import ShowingMovies from "./ShowingMovies";
import { Link } from "react-router-dom";

export const movies = [
  {
    id: 1,
    movieTitle: "The Northman",
    movieImage: upcoming1,
    year: "2022",
    duration: "137",
    rating: "8.5",
    quality: "HD",
    movieDesc: "Description of The Northman...",
    genre: "Action, Drama",
    PG: "R",
    cost: "15",
    movieDate: "2022-10-05"
  },
  {
    id: 2,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieImage: upcoming2,
    year: "2022",
    duration: "126",
    rating: "NR",
    quality: "4K",
    movieDesc: "Description of Doctor Strange in the Multiverse of Madness...",
    genre: "Fantasy, Action",
    PG: "PG-13",
    cost: "20",
    movieDate: "2022-05-06"
  },
  {
    id: 3,
    movieTitle: "The Northman",
    movieImage: upcoming3, 
    year: "2022",
    duration: "137",
    rating: "8.5",
    quality: "HD",
    movieDesc: "Viking prince seeks revenge for his father's murder.", // Example description
    genre: "Action, Drama",
    PG: "R",
    cost: "15",
    movieDate: "2022-04-22" 
  },
  {
    id: 4,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieImage: upcoming4, 
    year: "2022",
    duration: "126",
    rating: "NR",
    quality: "4K",
    movieDesc: "Dr. Strange explores mind-bending and dangerous alternate realities.",
    genre: "Fantasy, Action",
    PG: "PG-13",
    cost: "20",
    movieDate: "2022-05-06" 
  }
];

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

          <ul class="movies-list has-scrollbar">
            {movies.map((movie) => (
              <li key={movie.id}>
                <div className="movie-card">
                  <Link to={`/movies/${movie.id}`}>
                    <figure className="card-banner">
                      <img src={movie.movieImage} alt={`${movie.movieTitle} movie poster`} />
                    </figure>
                    <div className="title-wrapper">
                      <h3 className="card-title">{movie.movieTitle}</h3>
                    </div>
                    <time datetime={movie.year} className="text-white">{movie.year}</time>
                  </Link>
                  <div className="card-meta">
                    <div className="badge badge-outline">{movie.quality}</div>
                    <div className="duration">
                      <IonIcon icon={timeOutline} />
                      <time datetime={`PT${movie.duration}M`}>{movie.duration} min</time>
                    </div>
                    <div className="rating">
                      <IonIcon icon={star} />
                      <data>{movie.rating}</data>
                    </div>
                  </div>
                </div>
              </li>
            ))}

            {/* <li>
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
            </li> */}

            {/* <li>
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
            </li> */}

            {/* <li>
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
            </li> */}

            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </section>
      {/* <ShowingMovies /> */}
    </>
  );
};

export default Movies;
