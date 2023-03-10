import renderer from 'react-test-renderer'

import { BrowserRouter } from 'react-router-dom'

import NavLinks from '../Components/Navbar/NavLinks'

import userEvent from '@testing-library/user-event';
// eslint-disable-next-line
import { render, screen } from '@testing-library/react';

describe("Tests Navbar component",() => {
    it("Should render Navbar Component",()=>{
        const tree = renderer.create(<BrowserRouter>
            <NavLinks />
        </BrowserRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    const list = screen.getByRole('list',{
        hidden:true
    }).childElementCount;
    expect(list).toEqual(5);
    const link = screen.getByText('Motorcycle');
    userEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('class', 'active');
})
