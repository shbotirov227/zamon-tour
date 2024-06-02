import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import HeroSection from "./containers/HeroSection/HeroSection";
import Prices from "./containers/Prices/Prices";
import Reservation from "./containers/Reservation/Reservation";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<Prices />
			<Reservation />
			<Footer />
		</div>
	);
}

export default App;
