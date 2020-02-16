import React from "react";

import "./Footer.styles.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__logo-box'>
				<picture className='footer__logo'>
					{/* <source
						src='../../images/logo-green-small-2x.png'
						media='(max-width: 37.5em)'
					/> */}
					<img src='../../images/logo-green-1x.png' alt='Full Logo' />
				</picture>
			</div>
			<div className='row-footer'>
				<div className='col-1-of-2'>
					<div className='footer__navigation'>
						<ul className='footer__list' style={{ marginLeft: "-2.2rem" }}>
							<li className='footer__item '>
								<a href='#' className='footer__link'>
									Company
								</a>
							</li>
							<li className='footer__item'>
								<a href='#' className='footer__link'>
									Contact us
								</a>
							</li>
							<li className='footer__item'>
								<a href='#' className='footer__link'>
									Careers
								</a>
							</li>
							<li className='footer__item'>
								<a href='#' className='footer__link'>
									Privacy
								</a>
							</li>
							<li className='footer__item'>
								<a href='#' className='footer__link'>
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-1-of-2'>
					<p className='footer__copyright'>
						Built by{" "}
						<a href='#' className='footer__link'>
							John Thornton
						</a>{" "}
						for his online course
						<a href='#' className='footer__link'>
							Advanced CSS and SASS
						</a>
						. Copyright &copy; by Harry Houdini. You are 100% allowed to use
						this webpage for both personal and commercial use, but NOT to claim
						it as your own design. A credit to the original author, Jonas
						Schmedtmann, is of course highly appreciated.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
