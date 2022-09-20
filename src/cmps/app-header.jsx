import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import pink_studio from '../assets/img/pink_studio.png'

import routes from '../routes'

class _AppHeader extends React.Component {

    render() {

        return (
            <header className='app-header'>
                <a href="/" className="app-header__brand">
                    <img src={pink_studio} alt="Logo" />
                </a>
                <nav className='app-nav__items'>
                    {routes.map(route => <NavLink className={'app-nav__item'} exact key={route.path} to={route.path}>{route.label}</NavLink>)}
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.systemModule.isLoading
    }
}
const mapDispatchToProps = {
}



export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)