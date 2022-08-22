import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, useLocation, useNavigate, useParams, HashRouter,} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

/*import DialogsContainer from './components/Dialogs/DialogsContainer';*/
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))

const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }


        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId?/*" element={ <ProfileContainer />}/>
                        <Route path='dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>);
    }
}



const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }}/>
        );
    }

    return ComponentWithRouterProp;
}




let AppContainer = compose (
    withRouter,
    connect(mapStateToProps, { initializeApp})) (App);

let SamuraiJSApp = (props) => {
  return  <HashRouter >
        <Provider store={store}>
                <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp

