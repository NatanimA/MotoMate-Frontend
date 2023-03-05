import renderer from 'react-test-renderer'

import { BrowserRouter } from 'react-router-dom'

import userEvent from '@testing-library/user-event'

import { render, screen } from '@testing-library/react';

import Navbar from '../Components/Navbar/Navbar';

describe("Tests Navbar component",() => {
    it("Should render Navbar Component",()=>{
        const tree = renderer.create(<BrowserRouter>
            <Navbar />
        </BrowserRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
