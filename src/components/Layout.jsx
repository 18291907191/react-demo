import Header from './Header';
import Footer from './Footer';
import { Route } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className="wrap">
      <Header />
        {
          props.routes ? props.routes.map((item,index) => (
            <Route path={item.path} key={index} component={item.component}></Route>
          )) : null
        }
      <Footer />
    </div>
  )
}

export default Layout;
