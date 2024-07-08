import React, { useEffect } from 'react';
import i18next from "i18next";
import { Link } from "react-router-dom";

import { InstagramIcon, TelegramIcon} from "../../assets/icons";
import Logo from "../../assets/images/logo.png";

import "./Header.scss";


import { useTranslation } from "react-i18next";


const Header = () => {

	const { t, i18n } = useTranslation();

	useEffect(() => {
		const lng = navigator.language;
		i18n.changeLanguage(lng);
	}, []);

	const lng = navigator.language;

	return (
		<div className="Header" id="header">
			<div className="Header-inner container">
				<a href="/"><img src={Logo} alt="logo" /></a>
				<ul className="Header-links">
					<li><a className="Header-link" href="/">{t("home.title")}</a></li>
					<li><a className="Header-link" href="#about">About</a></li>
					<li><a className="Header-link" href="#tours">Tours</a></li>
					<li><a className="Header-link" href="#contact">Contacts</a></li>
				</ul>

				<div className="Header-langs">
					<button className="Header-lang" to="/">UZ</button>
					<button className="Header-lang" to="/">ENG</button>
					<button className="Header-lang" to="/">RU</button>

					<Link className="Header-lang" to="/"><TelegramIcon /></Link>
					<Link className="Header-lang" to="/"><InstagramIcon /></Link>
				</div>
			</div>

		</div>
	);
}

export default Header;