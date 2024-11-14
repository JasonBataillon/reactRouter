import { Routes, Route } from 'react-router-dom';
import Red from './red';
import Blue from './blue';
import Home from './home';

export default function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
