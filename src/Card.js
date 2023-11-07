function Card() {
	return (
		<div>
			<h1 class="m-4">Card Components</h1>
			<div class="d-flex justify-content-center">
				<div class="card bg-primary ms-5">
					<div class="card-body text-white text-center">
						<h3 class="card-title pb-2 border-bottom">Card 01</h3>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				<div class="card bg-danger ms-4 me-4">
					<div class="card-body text-white text-center">
						<h3 class="card-title pb-2 border-bottom">Card 02</h3>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				<div class="card bg-success me-5">
					<div class="card-body text-white text-center">
						<h3 class="card-title pb-2 border-bottom">Card 03</h3>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;