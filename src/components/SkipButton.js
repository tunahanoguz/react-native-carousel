import React from 'react';
import {Button, Container, Text} from '../styles';

const SkipButton = () => {
    return (
        <Container alignItems='flex-end' top={10}>
            <Button bordered transparent paddingVertical={6} paddingHorizontal={12}>
                <Text size={16}>Skip 👉</Text>
            </Button>
        </Container>
    );
};

export default SkipButton;
