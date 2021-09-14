
import Header from './Header';
import Footer from './Footer';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import '../assets/responsive.css';

const Layout = props => {
    return (
        <div id="wrapper">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;