import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
	return (
		<>
			<Navbar />
			<div className="App">
				<h1>CS 230L</h1>
				<h2>Section - 002</h2>
				<p>WVU ID: 800353206</p>
				<p>Hi I am Cayden</p>
			</div>
			<Card />
		</>
	);
}

export default App;
