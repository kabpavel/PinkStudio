import React from 'react'
import { connect } from 'react-redux'
import { loadData, onAddData, onEditData, onRemoveData } from '../store/data.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { TextList } from '../cmps/text-list'

class _VocalCoachApp extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadData()
    }

    vocalCoachAppPage = (data) => {
        console.log(' vocalCoachApp = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'vocalCoach')
        const vocalCoachAppPage = data[idx];
        return vocalCoachAppPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const vocalCoachAppPage = this.vocalCoachAppPage(data)

        return (
            <section>
                <div className='margin-top-60px margin-bottom-100px'>
                <div className='vocal-coach-app app-main-wrapper'>
                        <h2>{vocalCoachAppPage.title}</h2>
                        <div className='app-sub-main-wrapper' >
                            <img className="info-preview-page-image" src={require(`../assets/img/${vocalCoachAppPage.img1Url}`).default} 
                                title={vocalCoachAppPage.title} alt={vocalCoachAppPage.title} style={{ maxWidth: '300px' }} />
                            <div className='vocal-coach-app-about'>
                                {/* <span>{vocalCoachAppPage.description2}</span> */}
                                <TextList textList={vocalCoachAppPage.description2}></TextList>
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


export const VocalCoachApp = connect(mapStateToProps, mapDispatchToProps)(_VocalCoachApp)