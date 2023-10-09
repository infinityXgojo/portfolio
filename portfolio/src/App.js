import React from "react";
import Header from "./components/header/Header.jsx";
import "./App.css";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
//import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import Work from "./components/work/Work.jsx";

const App = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Work />
				<Contact />
			</main>
			<Footer />
			<ScrollUp />
		</>
	);
};

export default App;
