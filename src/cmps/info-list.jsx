import { Component } from 'react'
import { InfoPreview } from './info-preview'

export class InfoList extends Component {

    render() {
        const { infoList } = this.props

        return (
            <section className='info-list'>
                {infoList && infoList?.length > 0 ?
                    infoList.map((entity, idx) => <InfoPreview key={entity._id} entity={entity}> </InfoPreview>)
                    : <div>empty</div>}
            </section>
        )
    }
}