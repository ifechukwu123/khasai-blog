import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
