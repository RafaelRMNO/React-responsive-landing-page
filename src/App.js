import {Link} from 'react-scroll'
import {useState} from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';




function App() {

	const [isActive, setIsActive] = useState(false)

	const menuHandler=()=>{
		
		setIsActive(!isActive);

	} 
  return (
    <div className="App" >
      <nav className="navi">
			<i className="icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  				<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
				</svg>
			</i>
		  <ul className="standart-ul">
			  <Link className='nav-item'  activeClass='active' smooth spy to="home">Home</Link>
			  <Link className='nav-item'  offset={-55} activeClass='active' smooth spy to="projects">Projects</Link>
			  <Link className='nav-item' activeClass='active' smooth spy to="about">About</Link>			  
		  </ul>

		  <div id="mobile-icon" >
		  	<svg onClick={menuHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
 		 		<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
			</svg>
		  </div>

		  <div className="mobile-div" style={{display:isActive?"block":"none"}}>
		  <ul className="mobile-ul" onClick={menuHandler} >
			  <Link className='mobile-item' onClick={menuHandler} offset={-300} activeClass='active' smooth spy to="home">Home</Link>
			  <Link className='mobile-item'  onClick={menuHandler} offset={-320} activeClass='active' smooth spy to="projects">Projects</Link>
			  <Link className='mobile-item' onClick={menuHandler} offset={-300} activeClass='active' smooth spy to="about">About</Link>			  
		  </ul>
		  </div>
	  </nav>

	  

	  <section id='home'><Home/></section>
	  <section id='projects'><Projects/></section>
	  <section id='about'><About/></section>
	  <section id='contact'><Contact/></section>

    </div>
  );
}

export default App;
