function Contact() {
	return (
		<div>
			<h1 class="m-4">Contact</h1>
			<form class="container text-start">
				<div class="form-group mb-2">
					<label for="firstName">First Name</label>
					<input type="text" class="form-control w-25" id="firstName" placeholder="Enter your first name" />
				</div>
				<div class="form-group mb-2">
					<label for="lastName">Last Name</label>
					<input type="text" class="form-control w-25" id="lastName" placeholder="Enter your last name" />
				</div>
				<div class="form-group mb-2">
					<label for="emailAddress">Email Address</label>
					<input type="email" class="form-control w-25" id="emailAddress" placeholder="Enter your email address" />
				</div>
				<div class="form-group mb-2">
					<label for="phoneNumber">Phone Number</label>
					<input type="tel" class="form-control w-25" id="phoneNumber" placeholder="Enter your phone number" />
				</div>
				<div class="form-group mb-2">
					<label for="country">Country</label>
					<input type="text" class="form-control w-25" id="country" placeholder="Enter your country" />
				</div>
				<div class="form-group mb-2">
					<label for="message">Message</label>
					<textarea type="text" class="form-control w-50" id="message" placeholder="Enter your message"></textarea>
				</div>
				<button type="submit" class="btn btn-primary mt-2">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
