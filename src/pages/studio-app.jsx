import React from 'react'
import { connect } from 'react-redux'
import { loadData, onAddData, onEditData, onRemoveData } from '../store/data.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import my_studio_image from '../assets/img/my_studio_image.png'
import { TextList } from '../cmps/text-list'

class _StudioApp extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadData()
    }

    studioAppPage = (data) => {
        console.log(' studioApp = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'studio')
        const studioAppPage = data[idx];
        return studioAppPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const studioAppPage = this.studioAppPage(data)

        return (
            <section>
                <div className='margin-top-60px margin-bottom-100px'>
                <div className='studio-app-page app-main-wrapper'>
                        <h2>{studioAppPage.title}</h2>
                        <div className='app-sub-main-wrapper'>
                            <img className="info-preview-page-image" src={require(`../assets/img/${studioAppPage.img1Url}`).default} 
                                title={studioAppPage.title} alt={studioAppPage.title} style={{ maxWidth: '300px' }} />
                            <div className='studio-app-page-about'>
                                <TextList textList={studioAppPage.description2}></TextList>
                                {/* <span>{studioAppPage.description2}</span> */}
                            </div>
                        </div>
                        <img className="my-studio-image" src={my_studio_image} />
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


export const StudioApp = connect(mapStateToProps, mapDispatchToProps)(_StudioApp)