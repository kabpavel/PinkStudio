import React from 'react'
import { connect } from 'react-redux'


import { loadData, onAddData, onEditData, onRemoveData } from '../store/data.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'

class _DisneySongs extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadData()
    }

    disneySongsPage = (data) => {
        console.log(' disneySongs = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'disneySongs')
        const disneySongsPage = data[idx];
        return disneySongsPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const disneySongsPage = this.disneySongsPage(data)

        return (
            <section>
                <div className='app-main-wrapper margin-top-100px margin-bottom-100px'>
                <div className='disney-songs-page app-main-wrapper'>
                        <h2>{disneySongsPage.title}</h2>
                        <div className='flex'>
                            <img className="info-preview-page-image" src={require(`../assets/img/${disneySongsPage.img1Url}`).default} 
                                title={disneySongsPage.title} alt={disneySongsPage.title} style={{ maxWidth: '300px' }} />
                            <div className='disney-songs-page-about'>
                                <span>{disneySongsPage.description2}</span>
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
    loadData,
    onRemoveData,
    onAddData,
    onEditData
}


export const DisneySongs = connect(mapStateToProps, mapDispatchToProps)(_DisneySongs)