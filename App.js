import React, {Fragment, useState, useEffect} from 'react';
import {
    FlatList,
    StatusBar,
} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {images} from './src/constants';
import CarouselItem from './src/components/CarouselItem';
import DotContainer from './src/components/DotContainer';
import SkipButton from './src/components/SkipButton';

const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        changeNavigationBarColor('#4b0082');
    });

    const setItem = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        setSelectedIndex(selectedIndex);
    };

    return (
        <Fragment>
            <StatusBar backgroundColor='transparent' translucent={true}/>

            <FlatList horizontal pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={setItem}
                      data={images} renderItem={({item, index}) => <CarouselItem item={item} index={index}
                                                                                 selectedIndex={selectedIndex}/>}/>

            <SkipButton/>

            <DotContainer data={images} selectedIndex={selectedIndex}/>
        </Fragment>
    );
};


export default App;
