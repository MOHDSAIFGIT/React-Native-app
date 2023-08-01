import { Stack , useRouter } from 'expo-router';
import { useState } from 'react';
import {View , ScrollView,SafeAreaView} from 'react-native';

import {COLORS , icons,images, Sizes} from '../constants' ;
import {Nearbyjobs, Popularjobs , ScreenHeaderBtn , Welcome } from '../components';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite },
            }}
            />
        </SafeAreaView>
    )
}

export default Home;