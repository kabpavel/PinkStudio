import React from 'react'
import { connect } from 'react-redux'
import { loadData, onAddData, onEditData, onRemoveData } from '../store/data.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { TextList } from '../cmps/text-list'

class _LadinoPerformanceApp extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadData()
    }

    ladinoPerformanceAppPage = (data) => {
        console.log(' ladinoPerformanceApp = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'ladino')
        const ladinoPerformanceAppPage = data[idx];
        return ladinoPerformanceAppPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const ladinoPerformanceAppPage = this.ladinoPerformanceAppPage(data)

        return (
            <section>
                <div className='margin-top-60px margin-bottom-100px'>
                <div className='ladino-performance-app-page app-main-wrapper'>
                        <h2>{ladinoPerformanceAppPage.title}</h2>
                        <div className='app-sub-main-wrapper'>
                            <img className="info-preview-page-image" src={require(`../assets/img/${ladinoPerformanceAppPage.img1Url}`).default} 
                                title={ladinoPerformanceAppPage.title} alt={ladinoPerformanceAppPage.title} style={{ maxWidth: '300px' }} />
                            <div className='ladino-performance-app-page-about'>
                                {/* <span>{ladinoPerformanceAppPage.description2}</span> */}
                                <TextList textList={ladinoPerformanceAppPage.description2}></TextList>
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


export const LadinoPerformanceApp = connect(mapStateToProps, mapDispatchToProps)(_LadinoPerformanceApp)