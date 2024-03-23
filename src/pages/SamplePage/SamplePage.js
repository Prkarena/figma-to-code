import * as React from "react";
import './SamplePage.scss';

const data = [
  {
    title: "Nemo enim ipsam",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    buttonText: "Learn more",
  },
  {
    title: "Tempor incididunt",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    buttonText: "Learn more",
  },
];

const Button = ({ children }) => (
  <button type="button" className="button">
    {children}
  </button>
);

const FeatureCard = ({ title, description, buttonText }) => (
  <div className="feature-card">
    <p className="feature-description">{description}</p>
    <Button>{buttonText}</Button>
    <h3 className="feature-title">{title}</h3>
  </div>
);

const SamplePage = () => (
  <main className="main-container">
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Snap photos and share like never before
        </h1>
        <h2 className="hero-subtitle">Sed ut perspiciatis</h2>
      </div>
      <div className="hero-image">
        <h2 className="image-title">Lorem ipsum dolor</h2>
      </div>
    </section>
    <section className="features-section">
      <div className="features-grid">
        {data.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
    <section className="description-section">
      <p className="description-text">
        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam.
      </p>
      <p className="description-text">
        Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
        quia non numquam eius modi tempora.
      </p>
    </section>
    <section className="cta-section">
      <Button>Learn more</Button>
      <Button>Learn more</Button>
    </section>
  </main>
);

export default SamplePage;
