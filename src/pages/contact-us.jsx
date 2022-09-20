import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loadData } from '../store/data.actions.js'

class _ContactUs extends React.Component {

    componentDidMount() {
        this.props.loadData()
    }

    contactUsPage = (data) => {
        console.log(' contactUs = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'contactUs')
        const contactUsPage = data[idx];
        return contactUsPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const contactUsPage = this.contactUsPage(data)

        return (
            <section>
                <div className='app-main-wrapper margin-top-100px margin-bottom-100px'>
                    <div className='contact-us-page contact-us-page-about app-main-wrapper'>
                        <h2>{contactUsPage.title}</h2>
                        <div className='app-sub-main-wrapper'>
                            <img className="info-preview-page-image" src={require(`../assets/img/${contactUsPage.img1Url}`).default}
                                title={contactUsPage.title} alt={contactUsPage.title} style={{ maxWidth: '300px' }} />
                            <div className='contact-us-page-about'>
                                <span>{contactUsPage.description1}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

export const ContactUs = connect(mapStateToProps, mapDispatchToProps)(_ContactUs)