function Body() {
	return (
		<>
			<main className="home-content__container">
				<section className="home-content">
					<h1 className="home-content-heading">
						Create your own neon induced text
					</h1>

					<h2 className="home-content-subheading">
						Crafted with the artistic insight for you
					</h2>

					<button className="home-content-btn">
						<a href="./ui.html" className="home-content-btn__link-ui">
							Create Text
						</a>
					</button>
				</section>

				<section className="home-content__shapes">
					<div className="home-content__shapes-displayTab"></div>
					<div className="home-content__shapes-ball">
						<div className="home-content__shapes-ball-object"></div>
						<div className="home-content__shapes-ball-shadow"></div>
					</div>
				</section>
			</main>
		</>
	);
}
export default Body;
