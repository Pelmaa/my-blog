// import './App.css';

// function App() {
//   return (
//     <div className="blog-container">
//       <header className="blog-header">
//         <h1>Pechu's Blog</h1>
//         <p>Sharing my learning journey as a web developer</p>
//       </header>

//       <section className="section" id="blog">
//         <h2>📘 Blog</h2>

//         {/* Blog Post 1 */}
//         <article className="blog-post">
//           <h3>📱 My Journey into React Native</h3>
//           <p className="blog-date">📅 June 30, 2025</p>
//           <p>
//             Learning web development was one of the best decisions I’ve ever made — but as I built more
//             web apps, I began wondering: <em>what if I could build mobile apps too?</em> That’s when I
//             discovered <strong>React Native</strong>.
//           </p>
//           <p>
//             React Native allows developers to use <strong>JavaScript and React</strong> to build apps for
//             both Android and iOS — using one codebase.
//           </p>
//           <p>In the past few weeks, I’ve been exploring:</p>
//           <ul>
//             <li>Setting up projects using Expo</li>
//             <li>Managing state with Context API and Redux Toolkit</li>
//             <li>Styling components using <strong>StyleSheet</strong></li>
//             <li>Integrating public APIs for dynamic data</li>
//           </ul>
//           <p>
//             Stay tuned as I share more of my React Native projects and mobile development insights!
//           </p>
//         </article>

//         {/* Blog Post 2 */}
//         <article className="blog-post">
//           <h3>⚛️ My First React Web App</h3>
//           <p className="blog-date">📅 June 15, 2025</p>
//           <p>
//             When I first started learning <strong>React.js</strong>, I was both excited and nervous. JSX
//             felt strange at first, but quickly became second nature.
//           </p>
//           <p>
//             My first project was a <strong>To-Do App</strong>. I learned how to:
//           </p>
//           <ul>
//             <li>Create components and pass props</li>
//             <li>Manage local state using <code>useState</code></li>
//             <li>Handle user input and form submissions</li>
//             <li>Use <code>map()</code> to render lists dynamically</li>
//           </ul>
//           <p>
//             It might seem simple, but building that app taught me how React thinks — and laid the foundation
//             for everything I’ve built since.
//           </p>
//         </article>

//         {/* Blog Post 3 */}
//         <article className="blog-post">
//           <h3>🎨 Styling Tips for Web Developers</h3>
//           <p className="blog-date">📅 June 1, 2025</p>
//           <p>
//             Styling used to be frustrating for me. CSS felt like a puzzle I couldn’t crack. But I discovered a few things that helped:
//           </p>
//           <ul>
//             <li>Using <strong>CSS Flexbox</strong> for layout</li>
//             <li>Adding spacing and alignment with <code>gap</code>, <code>padding</code>, and <code>margin</code></li>
//             <li>Customizing components with utility-first frameworks like <strong>Tailwind CSS</strong></li>
//             <li>Organizing styles with consistent class naming</li>
//           </ul>
//           <p>
//             Now I enjoy designing clean, responsive UIs — and I plan to share some of my favorite design tricks in a future post!
//           </p>
//         </article>
//       </section>

//       <footer className="blog-footer">
//         <p>© 2025 Pema Wangchuk • More blogs coming soon ✨</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
// App.jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;


