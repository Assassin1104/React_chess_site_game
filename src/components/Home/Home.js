import React from 'react';
import './home.css';
function Home() {
  return (
    <div className="home_landing_page">
      <section className="landing">
        <header>
          <div id="logo">
            {/* <img src="./src/images/Logo.PNG" alt="hero" /> */}
          </div>
        </header>
        <div className="text">
          <article>
            <h3>IT'S TIME FOR THE BATTLE OF KINGS</h3>
            <h1>Chess King</h1>
            <h1>Top class Players </h1>
            <p>
              IDEAMASN is a digital product agency dedicated to building
              cutting-edge website experiences and brand identities for
              forward-thinking companies. We're creatives driven by the synergy
              of design and technology
            </p>
          </article>
          <aside>
            <img src={require('../../assets/images/hero.jpg')} alt="hero" />
          </aside>
        </div>
        <div className="low">
          <button>scroll down</button>
        </div>
      </section>
      <section className="what_we_do">
        <header>
          <h2>
            We encourage a positive change for people, companies and
            organisations
          </h2>
        </header>
        <div>
          <article className="wcards">
            {/* <img src="./src/images/development_icon.PNG" alt="" /> */}
            <h2>Developments</h2>
            <p>
              We can provide language-agnostic development SOLID development,
              test-driven development, RESTFul API, scalable architecture,
              third-party integrations. Our passion is creating solid yet
              scalable solutions such as Cloud/Backend Architecturem API design
              and DevOps
            </p>
          </article>
          <article className="wcards">
            {/* <img src="./src/images/product_dev_icon.PNG" alt="" /> */}
            <h2>Product Design</h2>
            <p>
              We can provide language-agnostic development SOLID development,
              test-driven development, RESTFul API, scalable architecture,
              third-party integrations. Our passion is creating solid yet
              scalable solutions such as Cloud/Backend Architecturem API design
              and DevOps
            </p>
          </article>
          <article className="wcards">
            {/* <img src="./src/images/business_icon.PNG" alt="" /> */}
            <h2>Business Strategy</h2>
            <p>
              We can provide language-agnostic development SOLID development,
              test-driven development, RESTFul API, scalable architecture,
              third-party integrations. Our passion is creating solid yet
              scalable solutions such as Cloud/Backend Architecturem API design
              and DevOps
            </p>
          </article>
          <article className="wcards">
            {/* <img src="./src/images/branding_icon.PNG" alt="" /> */}
            <h2>Branding</h2>
            <p>
              We can provide language-agnostic development SOLID development,
              test-driven development, RESTFul API, scalable architecture,
              third-party integrations. Our passion is creating solid yet
              scalable solutions such as Cloud/Backend Architecturem API design
              and DevOps
            </p>
          </article>
        </div>
      </section>
      <section className="let_us">
        <article>
          <h3>Let's Talk</h3>
          <h1>Let's build something awesome together</h1>
          <p>
            Get in touch with out team to talk about your needs on your next
            website design, branding experience, or other digital project you
            have in mind. We can help turn the complex into simple usable and
            memorable experiences.
          </p>
          <a>Talk to us</a>
        </article>
        <aside>
          <img src={require('../../assets/images/sub.jpg')} alt="subhero" />
        </aside>
      </section>
      <footer>
        <div className="top">
          <ul id="our_offices">
            <li>2000 W.Morehead St.</li>
            <li>Suite A</li>
            <li>Charlotte, NC 28208</li>
            <li>1, Adekunle Owobiyi Close</li>
            <li>Ogba</li>
            <li>Lagos, Nigeria</li>
          </ul>
          <ul>
            <li>704-858-799 83</li>
            <li>General Inquiries</li>
          </ul>
          <ul id="new_bussiness">
            <li>Jason Sponsor</li>
            <li>
              <a>Let's Talk</a>
            </li>
          </ul>
          {/* <img src="./src/images/img.PNG" alt="" /> */}
        </div>

        <div className="bottom">
          <ul>
            <li>{/* <a href="#">LinkedIn</a> */}</li>
            <li>{/* <a href="#">Instagram</a> */}</li>
            <li>{/* <a href="#">Facebook </a> */}</li>
            <li>{/* <a href="#">Twitter </a> */}</li>
          </ul>
          <ul>
            <li>2019, Ideamasn, LLC. All Rights Reserved</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Home;
