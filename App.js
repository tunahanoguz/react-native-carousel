import React, {Fragment, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    StatusBar,
    Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled, {css} from 'styled-components';

const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        {
            id: 'team',
            source: require('./assets/team.jpg'),
            text: 'Create team',
            description: 'Start by creating a team. Assign the teams you have created to the project you want.',
        },
        {
            id: 'project',
            source: require('./assets/project.jpg'),
            text: 'Set up project',
            description: 'Create a project and assign a team to it. Then start creating a worklist for this project.',
        },
        {
            id: 'kanban-board',
            source: require('./assets/kanban-board.jpg'),
            text: 'Manage works',
            description: 'Manage that you created works. Assign works to sprints from project worklist.',
        },
        {
            id: 'sprint',
            source: require('./assets/sprint.jpg'),
            text: 'Create sprints',
            description: 'Create sprints for projects. Sprints include worklist that assigned from project worklist.',
        },
        {
            id: 'meeting',
            source: require('./assets/meeting.jpg'),
            text: 'Create Meetings',
            description: 'Create meetings for sprints. These meetings includes different types of meetings like daily scrum meeting.',
        },
    ];

    const setItem = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        setSelectedIndex(selectedIndex);
    };

    const renderItem = (item, index) => {
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

    return (
        <Fragment>
            <StatusBar backgroundColor='transparent' translucent={true}/>

            <FlatList horizontal pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={setItem} data={images} renderItem={({item, index}) => renderItem(item, index)} />

            <Container alignItems='flex-end' top={10}>
                <Button bordered transparent paddingVertical={6} paddingHorizontal={12}>
                    <Text size={16}>Skip 👉</Text>
                </Button>
            </Container>

            <DotContainer>
                {images.map((image, index) => {
                    return (
                        selectedIndex === index ? <Dot key={image.id} active/> : <Dot key={image.id}/>
                    );
                })}
            </DotContainer>
        </Fragment>
    );
};

const statusBarHeight = StatusBar.currentHeight;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const BlackContainer = styled.View`
    flex: 1;
    width: ${deviceWidth * 5}px;
    height: ${deviceHeight}px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
`;

const Image = styled(FastImage)`
    flex: 1;
    width: ${deviceWidth}px;
    height: ${deviceHeight}px;
`;

const DotContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
`;

const Dot = styled.View`
    width: ${({active}) => active ? '28' : '8'}px;
    height: 8px;
    margin-horizontal: 8px;
    background-color: white;
    opacity: 0.8;
    border-radius: 100px;
`;

const Container = styled.View`
    width: ${deviceWidth}px;
    justify-content: center;
    align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
    ${({top}) => top && css`
        position: absolute;
        top: ${top + statusBarHeight}px;
    `};
    ${({bottom}) => bottom && css`
        position: absolute;
        bottom: ${bottom}px;
    `};
    ${({right}) => right && css`
        position: absolute;
        right: ${right}px;
    `};
    ${({row}) => row && css`
        flex-direction: row;
    `};
    padding-horizontal: ${({paddingHorizontal}) => paddingHorizontal ? paddingHorizontal : 0}px;
`;

const Text = styled.Text`
    font-family: Montserrat-Medium;
    font-size: ${({size}) => size ? size : 36}px;
    text-align: center;
    color: white;
    ${({lineHeight}) => lineHeight && css`
        line-height: 24px;
    `};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 0}px;
`;

const Button = styled.TouchableOpacity`
    margin-vertical: 10px;
    margin-horizontal: ${({marginHorizontal}) => marginHorizontal ? marginHorizontal : 30}px;
    padding-vertical: ${({paddingVertical}) => paddingVertical ? paddingVertical : 12}px;
    padding-horizontal: ${({paddingHorizontal}) => paddingHorizontal ? paddingHorizontal : 30}px;
    background-color: indigo;
    border-radius: 30px;
    ${({bordered}) => bordered && css`
        border-width: 1px;
        border-color: white;
    `};
    ${({transparent}) => transparent && css`
        background-color: transparent;
    `};
`;

const ButtonText = styled.Text`
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    font-weight: 500;
    color: white;
`;

export default App;
