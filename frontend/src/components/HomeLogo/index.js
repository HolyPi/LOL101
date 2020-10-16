import React from 'react'
import logo from '../../static/images/logo1.png'
import ahri from '../../static/images/ahri.png'
import '../../static/css/HomeLogo.css'

export default function HomeLogo() {
    return (
        <header>
            <div>
                <div className="frame"></div>
                <div className="logos-container2">
                <div className="logo"><img src={logo} alt="Logo"/></div>
                    <div className="parall">
                        <div className="squares">
                            <square></square>
                            <square></square>
                            <square></square>
                            <square></square>
                            <square></square>
                            <square></square>
                            <square></square>
                        </div>
                    </div>
                    <div className="logo2"><img src={ahri} alt="Logo"/></div>
                </div>
            </div>
        </header>
    )
}