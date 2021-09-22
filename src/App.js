import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Page from './components/Layout';
import routes from './routes';
import store from './store';

function App() {
	
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						{routes.map(route => {
							switch (route.layout) {
								
								
								case 'page':
									return (
										<Route exact path={route.path}>
											<Page>
												<route.component />
											</Page>
										</Route>
									);
							}
						})}
						<Redirect to="/home"/>
					</Switch>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
