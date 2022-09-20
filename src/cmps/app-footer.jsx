
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../store/data.actions.js'

import iconFacebook from '../assets/img/icons/icon-facebook.png'
import iconInstagram from '../assets/img/icons/icon-instagram.png'
import iconTwitter from '../assets/img/icons/icon-twitter.png'
import iconWhatsApp from '../assets/img/icons/icon-whatsapp.png'
import iconYoutube from '../assets/img/icons/icon-youtube.png'
import imageLogo from '../assets/img/logo2-564x477.png'


import { addToDatat, removeFromDatat, checkout } from '../store/data.actions'


class _AppFooter extends React.Component {

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data) return <div>Loading data...</div>


        return (
            <footer className="app-footer flex flex-column align-center">
                <img className="footer-image-logo" src={imageLogo}
                    alt="" srcSet="" />
                <div className="flex column align-center justify-center">
                    <div className="flex row align-center justify-center">
                        <p>יפעת גולן זמרת ומורה מוסמכת לפיתוח קול</p>
                    </div>

                    <ul className="social-nav flex">
                        <li className="flex align-center justify-center social">
                            <a className="social-facebook" href="https://www.facebook.com/110751131526565/posts/110827544852257/">
                                <img className="social-icon" src={iconFacebook}
                                    alt="" srcSet="" />
                            </a>
                        </li>
                        <li className="flex align-center justify-center social">
                            <a className="social-twitter" href="social-twitter">
                                <img className="social-icon" src={iconInstagram}
                                    alt="" srcSet="" />
                            </a>
                        </li>
                        <li className="flex align-center justify-center social">
                            <a className="social-blogger" href="https://twitter.com/HilaYifat?t=gQqK9wOGqQ6yQQL5q-Gqjg&s=08">
                                <img className="social-icon" src={iconTwitter}
                                    alt="" srcSet="" />
                            </a>
                        </li>
                        <li className="flex align-center justify-center social">
                            <a className="social-whats-app" href="whatsapp://send?text=שלום יפעת מעוניין לפתח קול&phone=+972523573983">
                                <img className="social-icon" src={iconWhatsApp}
                                    alt="" srcSet="" />
                            </a>
                        </li>
                        <li className="flex align-center justify-center social">
                            <a className="social-youtube" href="https://www.youtube.com/channel/UC5-nx5JoHHEb2kQFCLTI4eQ"  >
                                <img className="social-icon" src={iconYoutube}
                                    alt="" srcSet="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.dataModule.data
    }
}
const mapDispatchToProps = {
    loadData
}

export const AppFooter = connect(mapStateToProps, mapDispatchToProps)(_AppFooter)