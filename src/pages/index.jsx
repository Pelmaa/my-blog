import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const heroImages = [
   "/99292a14-bec8-4b88-a9e9-79c24ea64dea.jfif",
  "/acb595e7-2fb5-4550-a62b-fdc4fdade5ab.jfif",
 
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-section">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero slide ${index + 1}`}
            className={`hero-image ${index === current ? "active" : ""}`}
          />
        ))}

        <div className="hero-text">
          <h1>Welcome to My Developer Journey</h1>
          <p>From beginner to web developer in 3 months</p>
        </div>
      </div>

      <div className="page">
        <div className="cards">
          <div className="card">
            <h2>My Story</h2>
            <p>Learn how I started coding</p>
            <Link to="/blog"><Button>Read My Blog</Button></Link>
          </div>
          <div className="card">
            <h2>Skills Learned</h2>
            <p>HTML • CSS • JavaScript • React • MongoDB • GitHub</p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
