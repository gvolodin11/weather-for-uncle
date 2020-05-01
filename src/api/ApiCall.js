import React, {Component} from 'react'
import axios from 'axios'
import Card from '../weather/Card'
import '../api/ApiCall.scss'

class ApiCall extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        city: '',
        data: null
    }
    //  стрелочные ф-ции чтобы не биндить их в конструкторе
    inputChange = (e) => {
        this.setState({ city: e.target.value }) // обновляю стэйт через setState
        console.log(this.state.data)
        console.log(this.state.city.toLowerCase().trim())
    }

    onClick = () => {
        if (this.state.city.toLowerCase().trim()!=='') {
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${this.props.apiKey}`)
                .then(item => this.setState({data: item}))
                .catch(error => console.log(error))
        } else {
            alert('ERROR')
            console.log('error')
        }
    }

    forecast = () => {
        if (this.state.data !== null) {
            return <Card data={this.state.data}/>
        }
    }

    render() {
        return (
            <>
            <div className="input-id">
                <input type="text" size="50" onChange={this.inputChange}/>
                <button className="btn-id" onClick={this.onClick}>click</button>
                {this.forecast()}
            </div>
                </>
        )
    }
}

export default ApiCall