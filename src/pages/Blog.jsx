
import Badge from "../components/Badge";

const Blog = () => (
  <div className="page">
    <h1>My Journey to Website Development</h1>
    <p>A transformative 3-month experience that shaped my career</p>

    <div className="blog-section">
      <h2>Where It All Began</h2>
      <p>
        I started my journey learning to code with Trainee <strong>Pratap Sharma</strong> sir, who traveled all the way from Nepal to mentor us.
        His guidance and hands-on teaching style made complex concepts easier to understand and stay motivated.
      </p>

      <h2>What I Learned</h2>
      <p>Over these 3 months, I gained proficiency in:</p>
      <div className="badges">
        <Badge className="badge-html">HTML</Badge>
        <Badge className="badge-css">CSS</Badge>
        <Badge className="badge-js">JavaScript</Badge>
        <Badge className="badge-react">React</Badge>
        <Badge className="badge-mongo">MongoDB</Badge>
        <Badge className="badge-github">GitHub</Badge>
      </div>
      <p>
        These technologies formed the core of my skillset. I started by mastering semantic HTML and CSS layouts, then moved on to JavaScript fundamentals.
        Learning React introduced me to component-based architecture and state management, while MongoDB taught me the basics of NoSQL databases.
        Additionally, I learned how to use <strong>GitHub</strong> for version control, collaboration, and code management, which is an essential skill for every developer.
      </p>

      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Calculator App:</strong> A simple yet challenging project where we implemented JS logic for operations and created an intuitive UI.
          This helped me understand event handling and DOM manipulation.
        </li>
        <li>
          <strong>Todo App:</strong> Here, I learned to manage application state, handle form inputs, and persist data locally.
          Collaborating with teammates improved my communication and code-sharing skills.
        </li>
        <li>
          <strong>Watch Buddy:</strong> Our capstone full-stack project involved building a movie recommendation app using React and MongoDB.
          I contributed to both frontend and backend, deploying the app live for users.
        </li>
      </ul>

      <h2>Going Live</h2>
      <p>
        One of the most exciting parts was deploying my projects to platforms like Netlify for Frontend and Render for Backend.
        This experience taught me about hosting, environment variables, and the importance of version control using <strong>GitHub</strong> to manage my code efficiently.
      </p>

      <h2>Challenges & Growth</h2>
      <p>
        The journey wasn’t without challenges—debugging complex issues, understanding asynchronous code, and managing project deadlines tested my perseverance.
        Each obstacle helped me grow stronger, more resourceful, and confident as a developer.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        This immersive experience turned my passion into a profession.
        I’m excited to continue learning and building impactful applications that solve real-world problems.
      </p>
      <Badge className="badge-highlight">From Student to Developer</Badge>
    </div>

   
  </div>
);

export default Blog;
