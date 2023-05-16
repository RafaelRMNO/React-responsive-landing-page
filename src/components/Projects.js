import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Projects.css';
import '../App.css';

const Projects = () =>{
	return(
		<div className='projects'>
			<div className="projects-header">
				
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  					<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
				</svg>

				<h1 className="projects-h1">Projects</h1>

			</div>
			

		<Container className='cards-container'>

			<Card className="card">
				<Card.Img src='https://placehold.co/200x200'/>
				<Card.Body className="card-body" >
					<Card.Text>Lorem ipsum dolor sit amet</Card.Text>
				</Card.Body>
			</Card>

			<Card className="card">
				<Card.Img src='https://placehold.co/200x200'/>
				<Card.Body className="card-body" >
					<Card.Text className="card-text">Lorem ipsum dolor sit amet</Card.Text>
				</Card.Body>
			</Card>

			<Card className="card">
				<Card.Img src='https://placehold.co/200x200'/>
				<Card.Body className="card-body" >
					<Card.Text>Lorem ipsum dolor sit amet</Card.Text>
				</Card.Body>
			</Card>
			</Container>
			
		</div>
	)
}

export default Projects;