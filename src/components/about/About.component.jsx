import React from "react";

import "./About.styles.scss";
import "../button.styles.scss";

const About = () => {
	return (
		<div className='section-about'>
			<div className='u-center-text u-margin-bottom-small'>
				<h2 className='heading-secondary'>
					Excting tours for adventurous people
				</h2>
			</div>

			<div className='row'>
				<div className='col-1-of-2'>
					<h3 className='heading-tertiary u-margin-bottom-small u-center-text'>
						You're going to fall in love with nature
					</h3>
					<p className='paragraph'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
						tenetur, nesciunt inventore laboriosam vitae dicta, facilis quis
						repellat sed porro dolor eos nemo at sapiente tempora tempore
						accusantium quas esse?
					</p>

					<h3 className='heading-tertiary u-margin-bottom-small u-center-text'>
						Live adventures like you never have before
					</h3>
					<p className='paragraph'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
						tenetur, nesciunt inventore laboriosam vitae. Lorem ipsum dolor sit
						amet.
					</p>
					<a href='#' className='btn-text'>
						Learn more &rarr;
					</a>
				</div>
				<div className='col-1-of-2'>
					<div className='composition'>
						<img
							alt='Nature 1'
							className='composition__photo composition__photo--p1'
							src='../../images/nat-1-large.jpg'
						/>

						<img
							alt='Nature 2'
							className='composition__photo composition__photo--p2'
							src='../../images/nat-2-large.jpg'
						/>

						<img
							alt='Nature 3'
							className='composition__photo composition__photo--p3'
							src='../../images/nat-3-large.jpg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
