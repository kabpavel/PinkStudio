import { Component } from 'react'
import { TextPreview } from './text-preview'

export class TextList extends Component {

    render() {
        const { textList } = this.props

        return (
            <section className='text-list'>
                {textList && textList?.length > 0
                    ? textList.map((text, idx) => <TextPreview key={idx} text={text}> </TextPreview>)
                    : <div>empty</div>}
            </section>
        )
    }
}