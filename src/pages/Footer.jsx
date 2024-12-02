function Footer() {
	return (
		<>
			<footer className="footer-section">
				<div className="container relative">

					<div className="sofa-img">
						<img src="src/assets/images/sofa.png" alt="Image" className="img-fluid" />
					</div>

					<div className="row">
						<div className="col-lg-8">
							<div className="subscription-form">
							</div>
						</div>
					</div>

					<div className="row g-5 mb-5">
						<div className="col-lg-4">
							<div className="mb-4 footer-logo-wrap"><a  className="footer-logo">Furni<span>.</span></a></div>
							<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

							<ul className="list-unstyled custom-social">
								<li><a ><span className="fa fa-brands fa-facebook-f"></span></a></li>
								<li><a ><span className="fa fa-brands fa-twitter"></span></a></li>
								<li><a ><span className="fa fa-brands fa-instagram"></span></a></li>
								<li><a ><span className="fa fa-brands fa-linkedin"></span></a></li>
							</ul>
						</div>

						<div className="col-lg-8">
							<div className="row links-wrap">
								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a >About us</a></li>
										<li><a >Services</a></li>
										<li><a >Blog</a></li>
										<li><a >Contact us</a></li>
									</ul>
								</div>

								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a >Support</a></li>
										<li><a >Knowledge base</a></li>
										<li><a >Live chat</a></li>
									</ul>
								</div>

								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a >Jobs</a></li>
										<li><a >Our team</a></li>
										<li><a >Leadership</a></li>
										<li><a >Privacy Policy</a></li>
									</ul>
								</div>

								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a >Nordic Chair</a></li>
										<li><a >Kruzo Aero</a></li>
										<li><a >Ergonomic Chair</a></li>
									</ul>
								</div>
							</div>
						</div>

					</div>

					<div className="border-top copyright">
						<div className="row pt-4">
							<div className="col-lg-6">
								 
							</div>

							<div className="col-lg-6 text-center text-lg-end">
								<ul className="list-unstyled d-inline-flex ms-auto">
									<li className="me-4"><a >Terms &amp; Conditions</a></li>
									<li><a >Privacy Policy</a></li>
								</ul>
							</div>

						</div>
					</div>

				</div>
			</footer>
		</>
	)
}

export default Footer