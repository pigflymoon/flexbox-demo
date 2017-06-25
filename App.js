import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import VerticalStackLayoutManual from './components/layouts/VerticalStackLayoutManual';
import VerticalStackLayoutFlex from './components/layouts/VerticalStackLayoutFlex';
import VerticalStackLayoutHeaderContentFooter from './components/layouts/VerticalStackLayoutHeaderContentFooter';

 import HorizontalStackLayout from './components/layouts/HorizontalStackLayout';
 import JustifyContent from './components/layouts/JustifyContent';
 import AlignItems from './components/layouts/AlignItems';
 import AlignItemsStretch from './components/layouts/AlignItemsStretch';
 import GridLayout from './components/layouts/GridLayout';
 import GridLayoutWithSpaceBetween from './components/layouts/GridLayoutWithSpaceBetween';
 import Positioning from './components/layouts/Positioning';
 import FixedHeaderFooter from './components/layouts/FixedHeaderFooter';
 import FlexboxGridLibrary from './components/layouts/FlexboxGridLibrary';


export default class App extends React.Component {
    render() {
        return (
            <FlexboxGridLibrary/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
