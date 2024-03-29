import React from "react";
import logo from "../../images/logo-white.png";

import "./Header.styles.scss";
import "../button.styles.scss";

const Header = () => {
	return (
		<div className='header'>
			<div className='header__logo-box'>
				<img src={logo} alt='Logo' className='header__logo' />
			</div>

			<div className='header__text-box'>
				<h1 className='heading-primary'>
					<span className='heading-primary--main'>Outdoors</span>
					<span className='heading-primary--sub'>is where life happens</span>
				</h1>

				<a href='#section-tours' className='btn btn--white btn--animated'>
					Discover Our Tours
				</a>
			</div>
		</div>
	);
};

export default Header;
