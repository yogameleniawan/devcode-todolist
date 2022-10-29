import './App.css';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="w-full main-color">
          <div data-cy="header-background" className="container mx-auto">
            <h4 data-cy="header-title" className="text-start py-10 self-center text-2xl text-white font-extrabold">TO DO LIST APP</h4>
          </div>
        </div>
        <div className="container mx-auto">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="detail/:id" element={<Activity />} />
          </Routes>
        </div>
      </div>
    </Provider>

  );
}

export default App;
