import React from 'react'
import { Container } from 'reactstrap'
import '../../Styles/common-section.css'

const CommonSection = ({title}) => {
    return (
        <section className='common_section'>
            <Container className='text-ceneter'>
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

export default CommonSection
