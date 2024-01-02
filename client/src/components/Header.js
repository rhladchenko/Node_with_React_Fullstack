import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<Link to='/' className='left brand-logo'>
						Emaly
					</Link>
					<ul className='right'>
						<li>
							<a href='sass.html'>Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
