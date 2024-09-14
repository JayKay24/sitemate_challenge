import { IssueForm } from './pages/IssueForm';
import { Link, Route, Routes } from 'react-router-dom';
import { IssueFormUpdate } from './pages/IssueFormUpdate';
import { ListIssues } from "./pages/ListIssues";
import './App.css';

const scheme = "http";
export const baseURL = `${scheme}://localhost:3000`;

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Issue</Link>
          </li>
        </ul>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<ListIssues />} />
        <Route path="/create" element={<IssueForm />} />
        <Route path='/issues/:id' element={<IssueFormUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
