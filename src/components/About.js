import me from '../assets/me.jpg'
import '../App.css';
import astronaut from '../assets/astronaut.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import './About.css'

const About = () =>{
	return(
		<div className='about'>
			<Container>
			<div className="about-text">
				<h1 className='about-h1'>About me    <img src={astronaut} className="astronaut"/></h1>
				<p className="about-p">
					fsdfasdfasdssdfsfd,
					sdfsdfsdfsdfsdf,
					sdfsdfsdfsdfsdfsdfsd,
					fsdfasdfasdssdfsfdsdfsdf,
					sdfsdfsdfsd
				</p>
				</div>
			<div className='img-div'>
			<div className='img-overlay'></div>
			<img src={me} className="about-img" />
			
			
			</div>
			</Container>
			
		</div>
	)
}

export default About;