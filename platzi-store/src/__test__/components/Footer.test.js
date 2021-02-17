import React from 'react';
import {mount} from 'enzyme';
import {create} from 'react-test-renderer'
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
    const footer = mount(<Footer/>);
    
    test('Render del componente foter', ()=>{
        expect(footer.length).toEqual(1);
    });

    test('Render del titulo', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
    })
})

describe('Footer Snapshot', () => {
    test('comprobar la UI del componente footer', () => {
        const footer = create(<Footer/>);
        expect(footer.toJSON()).toMatchSnapshot();
    })
});