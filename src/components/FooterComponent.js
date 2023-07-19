import React from "react";

const FooterComponent = (props) => {
	return (
		<div id="footer" className="bg-black mt-5 navbar-fixed-bottom">
			<div className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
					<div className="col-md-4 d-flex align-items-center">
						<div className="text-white">{props.name}</div>
					</div>

					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
						<li className="ms-3">
							<a
								className="text-white-50 icon-link"
								href={props.fbLink}
								target="_blank">
								<i className="bi bi-facebook"></i>
							</a>
						</li>
						<li className="ms-3">
							<a
								className="text-white-50 icon-link"
								href={props.igLink}
								target="_blank">
								<i className="bi bi-instagram"></i>
							</a>
						</li>
						<li className="ms-3">
							<a
								className="text-white-50 icon-link"
								href={props.githubLink}
								target="_blank">
								<i className="bi bi-github"></i>
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default FooterComponent;
