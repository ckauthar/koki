import React from 'react'
import './ImagePreview.css'

class ImagePreview extends React.Component {

    constructor() {
        super()
        this.state = {
            imagePath: ''
        }
    }

    handleImage = (e) => {
        e.preventDefault()
        this.setState({
            imagePath: e.target.value
        })
    }

    render() {
        return (
            <div className='ImagePreview'>
                   <img src={this.state.imagePath} alt='image' />
                <form>
                    <input type='text' placeholder='Enter the image url' className='input' onChange={this.handleImage}/>
                </form>
            </div>
        )
    }
}

export default ImagePreview