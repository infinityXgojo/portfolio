import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Subhojit</h1>
				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>
					<li>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>
				</ul>
				<div className='footer__social'>
					<a
						href='https://instagram.com/____.subhojit.____?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'
						className='home__social-icon'
						target='_blank'
					>
						<i className='bx bxl-instagram'></i>
					</a>
					<a
						href='https://github.com/Subhojit666'
						className='home__social-icon'
						target='_blank'
					>
						<i className='home__social-icon' target='_blank'>
							<i className='uil uil-github-alt'></i>
						</i>
					</a>
					<a
						href='https://www.linkedin.com/in/subhojitghosh2002'
						className='home__social-icon'
						target='_blank'
					>
						<i className='home__social-icon' target='_blank'>
							<i className='uil uil-linkedin'></i>
						</i>
					</a>
				</div>
				<span className="footer__copy">&#169; Subhojit2023 All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
