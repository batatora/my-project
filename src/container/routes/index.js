import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadalbe/component';
//import {} from 'store/action/auth';
import { connect } from 'react-redux';


const Landing = loadable(() => import('./landing'))
const Signin = loadable(() => import('./auth/signin'))
const Signup = loadable(() => import('./auth/signup'))
const Forgotpass = loadable(() => import('./auth/forgotpass'))

const RedirectRoute = loadable(() => import('./redirect_route'))


class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    render() {
        <div id="route-container" class="">
            <div id="route-content">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/forgotpass" component={Forgotpass}/>
                    {/* <Route exact path="/" component={Landing}/> */}
                </Switch>
            </div>
            
        </div>
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default withRouter(connect(mapStateToProps, {

})(Route));