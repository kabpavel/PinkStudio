import React from 'react'

export class TextPreview extends React.Component {

    render() {
        const { text } = this.props
        console.log('text',text)
        return (
            <section className='text-preview'>
                <p>{text}</p>
            </section>
        )
    }
}