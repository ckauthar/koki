import React from 'react'
import './Form.css'

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            inputText: ''
        }
    }

    updateInput = (e) => {
        e.preventDefault()
        this.setState({
            inputText: e.target.value
        })
    }

    render() {

        return (
            <div className='Form'>
                <h1>{this.state.inputText}</h1>
                <form>
                    <input type='text' placeholder='Enter anything' className='input' onChange={this.updateInput}/>
                </form>
            </div>
        )
    }
}

export default Form