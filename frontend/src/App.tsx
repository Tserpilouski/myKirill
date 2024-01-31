import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<div>
				<nav>
					<ul>
						<li>
							<Link to={'account'}>Account</Link>
						</li>
						<li>
							<Link to={'home'}>Home</Link>
						</li>
						<li>
							<Link to={'today'}>Today</Link>
						</li>
						<li>
							<Link to={'my-riceps'}>My riceps</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Container>
				<Outlet />
			</Container>
		</>
	);
}

export default App;
