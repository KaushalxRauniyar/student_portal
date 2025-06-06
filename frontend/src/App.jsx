import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import ElectiveSuggestion from "./pages/ElectiveSuggestion/ElectiveSuggestion";
import Scgpa from "./pages/Sgpa/Scgpa";
import ImageRec from "./pages/health/ImageRec";
import Book from "./pages/Books/Book";
import Test from "./pages/Test/Test";
import Games from "./pages/Games";
import Feedback from "./pages/Feedback/Feedback";
import One from "./Component/SCGPA/One";
import Two from "./Component/SCGPA/Two";
import Three from "./Component/SCGPA/Three";
import Four from "./Component/SCGPA/Four";
import Five from "./Component/SCGPA/Five";
import Six from "./Component/SCGPA/Six";
import Seven from "./Component/SCGPA/Seven";
import Eight from "./Component/SCGPA/Eight";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import GradePrediction from "./pages/GradePrediction/GradePrediction";

function App() {
  const navigate = useNavigate();
  const [token, settoken] = useState(localStorage.getItem("token") || "nistha");
  // useEffect(()=>{
  //   if(token)
  //     {
  //         navigate('')
  //     }
  // },[token])

  return (
    <div className="">
      {token ? (
        <>
          <Navbar />
          <div className="flex w-full overflow-hidden">
            <Sidebar />
            <div className=" w-[80%] mx-auto my-8 ml-[max(5vw,25px)]   text-base">
              <Routes>
                <Route path="" element={token ? <Home /> : <Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/elective" element={<ElectiveSuggestion />} />
                <Route path="/grade-prediction" element={<GradePrediction />} />
                <Route path="/scgpa" element={<Scgpa />} />
                <Route path="/scgpa/1" element={<One />} />
                <Route path="/scgpa/2" element={<Two />} />
                <Route path="/scgpa/3" element={<Three />} />
                <Route path="/scgpa/4" element={<Four />} />
                <Route path="/scgpa/5" element={<Five />} />
                <Route path="/scgpa/6" element={<Six />} />
                <Route path="/scgpa/7" element={<Seven />} />
                <Route path="/scgpa/8" element={<Eight />} />
                <Route path="/health_status" element={<ImageRec />} />
                <Route path="/book" element={<Book />} />
                <Route path="/test" element={<Test />} />
                <Route path="/game" element={<Games />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
