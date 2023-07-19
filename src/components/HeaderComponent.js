import React from "react";
import Image from "next/image";
import icon from "../assets/calculator1.png";
import styles from "../styles/styles.module.css";

const HeaderComponent = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 mb-4 ">
				<div className="container d-flex justify-content-center">
					<Image src={icon} height={30} width={30} className="me-3" />
					<span
						id="title"
						className={`${styles.title} text-light fs-5`}>
						ReactJS Calculator
					</span>
				</div>
			</nav>
		</>
	);
};

export default HeaderComponent;
