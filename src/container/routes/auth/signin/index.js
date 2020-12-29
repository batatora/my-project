import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux';
// import {connect} from 'react-redux';
// import {connect} from 'react-redux';
// import {connect} from 'react-redux';
// import {connect} from 'react-redux';
import './index.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""

        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSign.bind = this.handleSign.bind(this);

    }
    handleSign(e) {
        e.preventDefault();
        const {
            email,
            password
        } = this.state;
        this.props.Signin({
            email,
            password
        });
    }

    handleClick(event) {  
        var clickedId = event.target.id;
        console.log(clickedId);
        alert("It works! You clicked " + clickedId)
    }

    onChangeInput(e) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        <div id="signin-container" class="">
            <div id="signin-contents" class="">
                <form>
                    <div className="form-group">
                        <label className="control-label">EMAIL</label>
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={this.onChangeInput}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">PASSWORD</label>
                        <input 
                            type="password"
                            name="password" 
                            value={password}
                            onChange={this.onChangeInput}
                            required 
                        />
                    </div>
                    <div>
                        <a className="left" onClick={() => this.props.history.push('/forgotpass')}>Forgot password?</a>
                        <a className="right" onClick={() => this.props.history.push('/signup')}>Create new account</a>
                        <div className="clearfix"></div>
                    </div>

                    <div className="text-center">
                        <button onClick={(e) => this.handleSignIn(e)} >Sign In</button>    
                    </div>
                </form>
            </div>
        </div>
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, {
    signIn
})(Signin));