import React from "react";
import "./qualification.css";

const qualification = () => {
	return (
		<section className='qualification section'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personal journey </span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div className='qualification__button qualification__active button--flex'>
						<i className='uil uil-graduation-cap  qualification__icon'></i>
						Education
					</div>

					<div className='qualification__button button--flex'>
						<i className='uil uil-briefcase-alt qualification__icon'></i>
						Experience
					</div>
				</div>
				<div className='qualification__sections'>
					<div className='qualification__content'>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>Schooling</h3>
								<span className='qualification__subtitle'>
									South Point School
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2007-2021
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>Open Source Contributor</h3>
								<span className='qualification__subtitle'>GSSOC</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>Jun 2021 - Jul 2022
								</div>
							</div>
							
						</div>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Computer Science Engineering
								</h3>
								<span className='qualification__subtitle'>Institute of  Engineering & Management, Kolkata</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2021 - 2025
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>Information Technology Intern</h3>
								<span className='qualification__subtitle'>Medica Superspeciality Hospital</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>5th June 2023 - 5th August 2023
								</div>
							</div>
							
						</div>
					</div>
					<div className='qualification__content'></div>
				</div>
			</div>
		</section>
	);
};

export default qualification;
