import {Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Errorpage from "./pages/Errorpage";
import { useAuth } from "./context/Authcontex";

function App() {
  console.log(useAuth()?.isLogedIn);
  return <main>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<Errorpage/>} />
    </Routes>
  </main>
}

export default App
