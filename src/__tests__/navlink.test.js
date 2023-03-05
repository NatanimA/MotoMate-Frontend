import renderer from 'react-test-renderer'

import { BrowserRouter } from 'react-router-dom'

import NavLinks from '../Components/Navbar/NavLinks'

describe("Tests Navbar component",() => {
    it("Should render Navbar Component",()=>{
        const tree = renderer.create(<BrowserRouter>
            <NavLinks />
        </BrowserRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
