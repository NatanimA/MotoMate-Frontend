import renderer from 'react-test-renderer'

import { BrowserRouter } from 'react-router-dom'

import SocialLinks from '../Components/Navbar/SocialLinks'

describe("Tests Navbar component",() => {
    it("Should render Navbar Component",()=>{
        const tree = renderer.create(<BrowserRouter>
            <SocialLinks />
        </BrowserRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
