import React from 'react';
import PropTypes from 'prop-types';
import {Dot, StyledDotContainer} from '../styles';

const DotContainer = ({data, selectedIndex}) => {
    return (
        <StyledDotContainer>
            {data.map((item, index) => {
                return (
                    selectedIndex === index ? <Dot key={item.id} active/> : <Dot key={item.id}/>
                );
            })}
        </StyledDotContainer>
    );
};

DotContainer.propTypes = {
    data: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number.isRequired,
};

export default DotContainer;
