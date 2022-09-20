import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export class InfoPreview extends React.Component {

    render() {
        const { entity } = this.props
        console.log('entity',entity)
        return (
            <section className='info-preview'>
                <NavLink className={'app-nav__item'} exact key={entity.routePath} to={entity.routePath}>
                <div className="info-preview-wrap">
                        <img className="info-preview-image" src={require(`../assets/img/${entity.img1Url}`).default} title={entity.title} alt={entity.title}/>
                        <div className="info-preview-title">{entity.title}</div>                
                        <div className="info-preview-description1"><p>{entity.description1}</p></div>
                </div>
                </NavLink>
            </section>
        )
    }
}