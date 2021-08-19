/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Password from '../Screens/Password';
import BottomTabNavigation from './BottomTabNavigation';
import Airtime from '../Screens/Airtime';
import Transfer from '../Screens/Transfer';
import Bills from '../Screens/Bills';
import Cash from '../Screens/Cash';
import QuickPay from '../Screens/QuickPay';
import Split from '../Screens/Split';
import ScreenHeader from '../components/ScreenHeader';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator()
const screens = [
    {
        name: 'home',
        component: BottomTabNavigation 
    },
    {
        name: 'password',
        component: Password 
    },
    {
        name: 'Airtime',
        component: Airtime, 
    },
    {
        name: 'profile',
        component: Profile, 
    },
    {
        name: 'Transfer',
        component: Transfer, 
    },
    {
        name: 'Bills',
        component: Bills, 
    },
    {
        name: 'Cash',
        component: Cash, 
    },
    {
        name: 'QuickPay',
        component: QuickPay, 
    },
    {
        name: 'Split',
        component: Split, 
    },
]
const noHeaderArray = ['home', 'password', 'profile'];
export default function MainStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions = {()=>({
                headerShown:true,
            })}
        >
            {
                screens.map(screen => 
                    <Stack.Screen 
                        key={screen.name}
                        name={screen.name}
                        component= {screen.component}
                        options={{
                            headerShown:true,
                            header:({route})=>{
                                const showHeader = !noHeaderArray.includes(route.name);
                                return showHeader && <ScreenHeader heading={route.name} />
                            },
                        }}
                    />
                    )
            }
        </Stack.Navigator>
    )
}
