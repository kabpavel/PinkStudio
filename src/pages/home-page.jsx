import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../store/data.actions.js'
import { InfoList } from '../cmps/info-list'

class _HomePage extends React.Component {

    state = {
        homePage: null
    }

    componentDidMount() {
        this.props.loadData()
    }

    homePage = (data) => {
        
        console.log(' homePage = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'homePage')
        const homePage = data[idx];
        return homePage;
    }

    infoListOnly = (data) => {
        
        console.log(' infoListDataOnly = (data) ')
        const infoList = data.filter(entity => entity.isInfoList === true)
        console.log(' infoList = (infoList) ', infoList)
        return infoList;
    }

    render() {
        
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const homePage = this.homePage(data)
        const infoList = this.infoListOnly(data)
        
        return (
            <section>
                <div className='margin-top-90px margin-bottom-50px'>
                    <div className='home-page home-page-about app-main-wrapper'>
                        <h2>{homePage.title}</h2>
                        <div className='home-page-about'>
                            <p>{homePage.description1}</p>
                        </div>
                    </div>
                    <div>
                        <InfoList infoList={infoList}></InfoList>
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)