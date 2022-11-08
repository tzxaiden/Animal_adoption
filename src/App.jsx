import React from 'react'
import { createRoot } from 'react-dom/client'
import Pet from './Pet'
import SearchParams from './SearchParams'

const App = () => {
    // return React.createElement('div', {}, [
    //     React.createElement('h1', {}, 'Adopt me!'),
    //     React.createElement(Pet, {
    //         animal: 'Dog',
    //         name: 'Coco',
    //         breed: 'Terrier',
    //     }),
    //     React.createElement(Pet, {
    //         animal: 'Dog',
    //         name: 'Rex',
    //         breed: 'Shepherd',
    //     }),
    //     React.createElement(Pet, {
    //         animal: 'Dog',
    //         name: 'Pushok',
    //         breed: 'Shepherd',
    //     }),
    // ])

    return (
        <div>
            <h1>Adopt Me</h1>
            <SearchParams />
            {/* <h1>Adopt Me!</h1>
            <Pet name="Coco" animal="dog" breed="Terrier Mix" />
            <Pet name="Rex" animal="dog" breed="German Shephard" />
            <Pet name="Pushok" animal="cat" breed="Wichien Maat" /> */}
        </div>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
