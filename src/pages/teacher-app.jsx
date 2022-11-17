import React from 'react'
import { connect } from 'react-redux'
import teacher_img1 from '../assets/img/teacher_img1.png'
import { loadData, onAddData, onEditData, onRemoveData } from '../store/data.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { TextList } from '../cmps/text-list'

class _TeacherApp extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadData()
    }

    teacherAppPage = (data) => {
        console.log(' teacherApp = (data) ')
        const idx = data.findIndex(entity => entity.entityType === 'teacher')
        const teacherAppPage = data[idx];
        return teacherAppPage;
    }

    render() {
        const { data } = this.props
        console.log('data', data)
        if (!data || data?.length === 0) return <div>Loading data...</div>

        const teacherAppPage = this.teacherAppPage(data)

        return (
            <section>
                <div className='margin-top-60px margin-bottom-100px'>
                    <div className='teacher-app-page app-main-wrapper'>
                        <h2>{teacherAppPage.title}</h2>
                        <div className='app-sub-main-wrapper' >
                            <img className="info-preview-page-image" src={require(`../assets/img/${teacherAppPage.img1Url}`).default}
                                title={teacherAppPage.title} alt={teacherAppPage.title} style={{ maxWidth: '300px' }} />
                            <div className='teacher-app-page-about'>
                                {/* <span>{teacherAppPage.description2}</span> */}
                                <TextList textList={teacherAppPage.description2}></TextList>
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


export const TeacherApp = connect(mapStateToProps, mapDispatchToProps)(_TeacherApp)