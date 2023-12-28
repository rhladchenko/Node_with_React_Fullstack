import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path='/' component={Landing} exact />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/survey' component={SurveyNew} />
					<Route path='/header' component={Header} />
				</div>
			</BrowserRouter>
		</div>
	);
}
