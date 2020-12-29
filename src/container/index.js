import React from 'react'
import { withRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import loadable from '@loadable/component'

const Routes = loadable(() => import('./routes'))

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Switch>
                <Route path='/' component = {Routes}/>
            </Switch>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.load.loading
})

export default withRouter(connect(mapStateToProps, {
    
})(Container));