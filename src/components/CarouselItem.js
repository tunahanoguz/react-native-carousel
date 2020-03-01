import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {BlackContainer, Button, ButtonText, Container, Image, Text} from '../styles';

const CarouselItem = ({item, index, selectedIndex}) => {
    return (
        <Fragment key={index}>
            <Image
                source={item.source}
            />

            <BlackContainer/>

            <Container bottom={68}>
                <Text>{item.text}</Text>

                <Container paddingHorizontal={30}>
                    <Text size={14} lineHeight marginTop={10}>{item.description}</Text>
                </Container>

                {selectedIndex === 4 && (
                    <Fragment>
                        <Container row bottom={0}>
                            <Button marginHorizontal={10}>
                                <ButtonText>🤙 LOGIN</ButtonText>
                            </Button>

                            <Button bordered transparent marginHorizontal={10}>
                                <ButtonText>👍 REGISTER</ButtonText>
                            </Button>
                        </Container>
                    </Fragment>
                )}
            </Container>
        </Fragment>
    );
};

CarouselItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired,
};

export default CarouselItem;
