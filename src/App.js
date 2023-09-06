import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import CurrentAffairs from './Components/CurrentAffairs';
import SummaryHindu from './Components/SummaryHindu';
import Blog from './Components/Blog';
import Contactus from './Components/Contactus';
import TestSeries from './Components/TestSeries';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserDashboard from './Components/UserDashboard';
import DailyCurrentAffairs from './Components/DailyCurrentAffairs';
import BlogPost from './Components/BlogPost';
import DailyNews from './Components/DailyNews';
import BpscTest from './Components/BpscTest';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/CURRENT_AFFAIRS' element={<CurrentAffairs />} />
          <Route path='/SummaryOfHindu' element={<SummaryHindu />} />
          <Route path='/BLOG' element={<Blog />} />
          <Route path='/CONTACTUS' element={<Contactus />} />
          <Route path='/TEST_SERIES' element={<TestSeries />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<Signup />} />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path='/dailyCurrentAffairs' element={<DailyCurrentAffairs />} />
          <Route path='/clickDailyNews' element={<DailyNews />} />
          <Route path="/post/:postId" element={<BlogPost />} />
          <Route path="/BPSC_Test" element={<BpscTest />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
