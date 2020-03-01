import {Dimensions, StatusBar} from 'react-native';
import styled, {css} from 'styled-components';
import FastImage from 'react-native-fast-image';

export const statusBarHeight = StatusBar.currentHeight;
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const BlackContainer = styled.View`
    flex: 1;
    width: ${deviceWidth * 5}px;
    height: ${deviceHeight}px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
`;

export const Image = styled(FastImage)`
    flex: 1;
    width: ${deviceWidth}px;
    height: ${deviceHeight}px;
`;

export const StyledDotContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
`;

export const Dot = styled.View`
    width: ${({active}) => active ? '28' : '8'}px;
    height: 8px;
    margin-horizontal: 8px;
    background-color: white;
    opacity: 0.8;
    border-radius: 100px;
`;

export const Container = styled.View`
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

export const Text = styled.Text`
    font-family: Montserrat-Medium;
    font-size: ${({size}) => size ? size : 36}px;
    text-align: center;
    color: white;
    ${({lineHeight}) => lineHeight && css`
        line-height: 24px;
    `};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 0}px;
`;

export const Button = styled.TouchableOpacity`
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

export const ButtonText = styled.Text`
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    font-weight: 500;
    color: white;
`;
