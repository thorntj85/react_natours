import React from "react";

import "./Features.styles.scss";
import "../button.styles.scss";

const Features = () => {
	return (
		<div className='section-features'>
			<div className='row'>
				<div className='center'>
					<div className='col-1-of-4 feature-box'>
						<i className='fas fa-globe feature-box__icon'></i>
						<h3 className='heading-tertiary-features u-margin-bottom-small'>
							Explore the world
						</h3>
						<p className='feature-box__text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
							facere aperiam qui. Maxime dolor non consequatur earum pariatur,
							ipsa ipsam.
						</p>
					</div>

					<div className='col-1-of-4 feature-box'>
						<i className='far fa-compass feature-box__icon'></i>
						<h3 className='heading-tertiary-features u-margin-bottom-small'>
							Meet nature
						</h3>
						<p className='feature-box__text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
							facere aperiam qui. Maxime dolor non consequatur earum pariatur,
							ipsa ipsam.
						</p>
					</div>

					<div className='col-1-of-4 feature-box'>
						<i className='fas fa-map-marked feature-box__icon'></i>
						<h3 className='heading-tertiary-features u-margin-bottom-small'>
							Find your way
						</h3>
						<p className='feature-box__text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
							facere aperiam qui. Maxime dolor non consequatur earum pariatur,
							ipsa ipsam.
						</p>
					</div>

					<div className='col-1-of-4 feature-box'>
						<i className='fas fas fa-heartbeat feature-box__icon'></i>
						<h3 className='heading-tertiary-features u-margin-bottom-small'>
							Live a healthier life
						</h3>
						<p className='feature-box__text'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
							facere aperiam qui. Maxime dolor non consequatur earum pariatur,
							ipsa ipsam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
