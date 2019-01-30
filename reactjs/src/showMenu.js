import React, { Component } from 'react'

import './assets/css/navbar.css'

class ShowMenu extends Component {
    render() {
        return (
            <div className="loginSignupMenu" id="loginSignup">
                <div>
                    <button className="guestLogin">ورود</button>
                </div>
                <div>
                    <button className="guestSignUp">ثبت‌نام</button>
                </div>
            </div>
        )
    }
}

export default ShowMenu;