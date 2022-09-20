import React from 'react'
import { connect } from 'react-redux'


import { loadData, onAddData, onEditData, onRemoveData } from '../store/data.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import flayer from '../assets/img/flayer-little-ones.jpeg'

class _MusicLittleOnesApp extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadData()
    }

    musicLittleOnesAppPage = (data) => {
        console.log(' musicLittleOnesApp = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'musicLittleOnes')
        const musicLittleOnesAppPage = data[idx];
        return musicLittleOnesAppPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const musicLittleOnesAppPage = this.musicLittleOnesAppPage(data)

        return (
            <section>
                <div className='app-main-wrapper margin-top-100px margin-bottom-100px'>
                <div className='music-little-ones-app-page app-main-wrapper'>
                        <h2>{musicLittleOnesAppPage.title}</h2>
                        <div className='flex'>
                            <img className="info-preview-page-image" src={require(`../assets/img/${musicLittleOnesAppPage.img1Url}`).default} 
                                title={musicLittleOnesAppPage.title} alt={musicLittleOnesAppPage.title} style={{ maxWidth: '300px' }} />
                            <div className='music-little-ones-app-page-about'>
                                <span>{musicLittleOnesAppPage.description2}</span>
                            </div>
                        </div>
                        <img className="flayer-image" src={flayer} />
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
    loadData,
    onRemoveData,
    onAddData,
    onEditData
}


export const MusicLittleOnesApp = connect(mapStateToProps, mapDispatchToProps)(_MusicLittleOnesApp)