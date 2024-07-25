import { IonIcon } from "@ionic/react";
import { tv, videocam } from "ionicons/icons";

import serviceBanner from "../assets/service-banner.jpg";

const Services = () => {
  return (
    <>
      <section class="service" id="services">
        <div class="container">
          <div class="service-banner">
            <figure>
              <img src={serviceBanner} alt="HD 4k resolution! only $3.99" />
            </figure>
          </div>

          <div class="service-content">
            <p class="service-subtitle">Our Services</p>

            <h2 class="h2 service-title">Get Your Ticket Online.</h2>

            <p class="service-text">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </p>

            <ul class="service-list">
              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <IonIcon icon={tv}></IonIcon>
                  </div>

                  <div class="card-content">
                    <h3 class="h3 card-title">Movie Descriptions.</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <IonIcon icon={videocam}></IonIcon>
                  </div>

                  <div class="card-content">
                    <h3 class="h3 card-title">Movie Listing and Showtimes.</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
