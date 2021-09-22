

import Home from '../components/HomePage';
import Team from '../components/TeamPage';
import RoadMap from '../components/RoadMap';
import TermsServices from '../components/TermsServices';

let routes = [
	
	
	{
		path: '/home',
		name: 'Home',
		component: Home,
		layout: 'page',
	},
	{
		path: '/terms-services',
		name: 'TermsServices',
		component: TermsServices,
		layout: 'page',
	},
	{
		path: '/road-map',
		name: 'RoadMap',
		component: RoadMap,
		layout: 'page',
	},
	{
		path: '/team',
		name: 'Team',
		component: Team,
		layout: 'page',
	}
];
export default routes;
