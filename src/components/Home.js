
import image from '../assets/vecteezy_web-analysis-and-development-team_.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Home.css'
import '../App.css';

const Home = () =>{
	return(
		<div className='home'>
				<div className="home-text">
				<h1>Web Development</h1>
				<p className="home-p">
					

freestar
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa consequat, iaculis dui vitae, feugiat magna. Sed pellentesque libero sem, aliquet dapibus justo ma
				</p>
				<Button className='btn'>Button</Button>
				</div>

				
				
			
			<img className='home-img' src={image} alt="Imagem representando o desenvolvimento web"></img>
			
		</div>
	)
}

export default Home;