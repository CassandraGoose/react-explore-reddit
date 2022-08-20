import { Routes, Route, Link } from "react-router-dom";
import Posts from './Posts.js';
import PostDetails from './PostDetails.js';

function App() {
  return (
    <div className="App">
      <header className="flex spaced vertical-center gutters">
        <h1>
          Reddit Reader Example
        </h1>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:postName" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
