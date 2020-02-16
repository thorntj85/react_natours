import React from "react";

import Navigation from "./components/navigation/Navigation.component";
import Header from "./components/header/Header.component";
import About from "./components/about/About.component";
import Features from "./components/features/Features.component.jsx";
import Tours from "./components/tours/Tours.component";
import Book from "./components/book/Book.component";
import Footer from "./components/footer/Footer.component";

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Header />
			<About />
			<Features />
			<Tours />
			<Book />
			<Footer />
		</div>
	);
}

export default App;
