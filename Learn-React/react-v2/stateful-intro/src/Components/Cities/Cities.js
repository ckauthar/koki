import React from 'react'
import City from './../City/City'
import './Cities.css'

let RandomImage = 'https://source.unsplash.com/random'
class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [
                {name: 'Rob Allen', age: 32 , city: 'Spain', userImage: 'james' },
                {name: 'Stric Jeroge', age: 24 , city: 'Italy', userImage: 'mark' },
                {name: 'Mike Selder', age: 67 , city: 'USA', userImage: 'sellen' },
                {name: 'Balmger Loder', age: 53 , city: 'Turkey', userImage: 'john' },
                {name: 'Selmmer Othmandi', age: 49 , city: 'Japan', userImage: 'rob' }
            ]
        }
    }

    render() {
        return (
            <div className='Cities'>
                {
                    this.state.cities.map(city => {
                        return (
                            <City name={city.name} age={city.age} city={city.city} userImage={`${RandomImage}/${city.user}`}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Cities