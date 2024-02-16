import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="WORK EXPERIENCE"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Atos.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Atos</div>
							<div className="work-subtitle">
								Associate Software Developer
							</div>
							<div className="work-duration">March 2021 - June 2023</div>
						</div>

						<div className="work">
							<img
								src="./Scrobits.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Scrobits Technologies </div>
							<div className="work-subtitle">
								Full Stack Developer Intern
							</div>
							<div className="work-duration">January 2020 - May 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
