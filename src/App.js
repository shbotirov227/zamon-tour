import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import HeroSection from "./containers/HeroSection/HeroSection";
import Prices from "./containers/Prices/Prices";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<Prices />
			<Footer />
		</div>
	);
}

export default App;
