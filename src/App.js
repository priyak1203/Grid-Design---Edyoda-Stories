import logo from './logo.svg';
import './App.css';

import LatestPosts from './components/LatestPosts';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <LatestPosts />
    </div>
  );
}

export default App;
