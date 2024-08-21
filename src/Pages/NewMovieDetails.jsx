import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../store/AuthContext";
import AuthLoader from "../Layout/UI/AuthLoader";
import SuccessModal from "../Layout/Modal";

import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  playCircle,
  ticketOutline,
  timeOutline,
  calendarNumberOutline,
} from "ionicons/icons";
import { movies } from "../Layout/Movies";

const NewMovieDetails = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(() => {
      const initialMovie = movies.find(m => m.id.toString() === movieId);
      return initialMovie || null;
    });
    const [loading, setLoading] = useState(false);
    const [movieQty, setMovieQty] = useState(1);
    const [ticketsLeft, setTicketsLeft] = useState(() => {
        // Initialize tickets left from local storage or default to 50
        const storedTickets = localStorage.getItem(`ticketsLeft-${movieId}`);
        return storedTickets ? parseInt(storedTickets, 10) : 50;
    });
    const [modalInfo, setModalInfo] = useState({ isOpen: false, message: '', type: 'success' });


    // const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // This effect will run only once or when movieId changes
        const storedTickets = localStorage.getItem(`ticketsLeft-${movieId}`);
        if (storedTickets) {
            setTicketsLeft(parseInt(storedTickets, 10));
        }
    }, [movieId]);
  

    const buyTicket = async () => {
        if (!currentUser) {
            navigate("/sign-in");
            return;
        }
        const quantity = parseInt(movieQty, 10);
        if (quantity <= 0 || isNaN(quantity)) {
            setModalInfo({ isOpen: true, message: 'Please enter a valid number of tickets.', type: 'error' });
            return;
        }
        if (ticketsLeft <= 0 || quantity > ticketsLeft) {
            setModalInfo({ isOpen: true, message: `Not enough tickets available. Only ${ticketsLeft} tickets left.`, type: 'error' });
            return;
        }
    
        setLoading(true);
        setTimeout(() => {
            const newTicketsLeft = ticketsLeft - quantity;
            localStorage.setItem(`ticketsLeft-${movieId}`, newTicketsLeft.toString());
            setTicketsLeft(newTicketsLeft);
            setLoading(false);
            setModalInfo({ isOpen: true, message: 'Purchase successful!', type: 'success' });
            setTimeout(() => {
                setModalInfo({ ...modalInfo, isOpen: false });
                navigate('/');
            }, 5000);
        }, 2000);
    };
    

  return (
    <>
      {loading ? (
        <div className="text-center">
          <AuthLoader />
        </div>
      ) : (
        <section class="movie-detail">
          <div class="container">
            <figure class="movie-detail-banner">
              <img src={movie.movieImage} alt={`${movie.movieTitle}poster`} />

              <button class="play-btn">
                <IonIcon icon={playCircle}></IonIcon>
              </button>
            </figure>

            <div class="movie-detail-content">
              <h1 class="h1 detail-title">
                <strong>{movie.movieTitle}</strong>
              </h1>

              <div class="meta-wrapper">
                <div class="badge-wrapper">
                  <div class="badge badge-fill">PG {movie.PG}</div>

                  <div class="badge badge-outline">{movie.quality}</div>
                </div>

                <div class="ganre-wrapper text-white">
                  <p>{movie.genre}</p>
                </div>

                <div class="date-time">
                  <div>
                    <IonIcon icon={calendarOutline}></IonIcon>

                    <time datetime={movie.year}>{movie.year}</time>
                  </div>

                  <div>
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time datetime={`PT${movie.duration}M`}>
                      {movie.duration} min
                    </time>
                  </div>
                  <div>
                    <IonIcon icon={calendarNumberOutline}></IonIcon>
                    <p>{movie.movieDate}</p>
                  </div>
                </div>
              </div>

              <p class="storyline">{movie.movieDesc}</p>

              <div className="text-white">
                <h3 className="text-2xl font-bold opacity-90 text-center">
                  Ticket
                </h3>
              </div>

              <div className="px-4 text-white mb-5">
                <table className="w-[90%] mx-auto">
                  <thead>
                    <tr className="flex justify-between border-b-white border-b-2">
                      <th className="text-xl font-semibold">Product</th>
                      <th className="py-2 text-xl font-semibold">Price</th>
                      <th className="py-2 text-xl font-semibold">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex justify-between border-b-white border-b-2 w-[100%]">
                      <td className="py-2 text-lg w-[33%]">
                        {movie.movieTitle}
                      </td>
                      <td className="py-2 text-lg font-semibold w-[33%]">
                        ₦ {movie.cost}
                      </td>
                      <td className="py-2 text-lg font-semibold ">
                        <input
                          value={movieQty}
                        //   onChange={(e) => setMovieQty(e.target.value)}
                        onChange={(e) => setMovieQty(Math.max(1, parseInt(e.target.value, 10) || 0))} 
                        min="1"
                          type="number"
                          className="outline-white rounded-lg w-12 text-black pl-2"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="details-actions">
                <div class="title-wrapper">
                  <p class="title">Filmlane</p>

                  <p class="text">Streaming Channels</p>
                </div>

                <button class="btn btn-primary" onClick={buyTicket}>
                  <IonIcon icon={ticketOutline}></IonIcon>

                  <span>{loading ? <AuthLoader /> : "Buy Ticket"}</span>
                </button>

                <div className="text-white">Tickets left: {ticketsLeft}</div>
              </div>
            </div>
          </div>
        </section>
      )}
        <SuccessModal 
            isOpen={modalInfo.isOpen}
            onClose={() => setModalInfo({ ...modalInfo, isOpen: false })}
            message={modalInfo.message}
            type={modalInfo.type}
        />
    </>
  );
};

export default NewMovieDetails;
