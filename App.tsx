import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import UserHomeScreen from './screens/inner-elements/user/UserHomeScreen.tsx';
import UserPaymentsScreen from './screens/inner-elements/user/UserPaymentsScreen.tsx';
import UserSubjectsScreen from './screens/inner-elements/user/UserSubjectsScreen.tsx';
import UserMyProgramsScreen from './screens/inner-elements/user/UserMyProgramsScreen.tsx';
import UserAllProgramsScreen from './screens/inner-elements/user/UserAllProgramsScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen.tsx';
import SignupScreen from './screens/SignupScreen.tsx';
import AdminDashboardScreen from './screens/AdminDashboardScreen.tsx';
import AdminAllProgramsScreen from './screens/inner-elements/admin/AdminAllProgramsScreen.tsx';
import AdminSubjectScreen from './screens/inner-elements/admin/AdminSubjectScreen.tsx';
import AdminPaymentsScreen from './screens/inner-elements/admin/AdminPaymentsScreen.tsx';
import AdminHomeScreen from "./screens/inner-elements/admin/AdminHomeScreen.tsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const UserTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Programs':
                iconName = focused ? 'home' : 'home';
                break;
              case 'My Programs':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Subjects':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Payments':
                iconName = focused ? 'home' : 'home';
                break;
            }
            return <Icon size={22} color={color} source={iconName} />;
          },
          tabBarActiveTintColor: '#d35400',
          tabBarInactiveTintColor: '#bdc3c7',
        })}>
        <Tab.Screen
          name="Home"
          component={UserHomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Programs"
          component={UserAllProgramsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="My Programs"
          component={UserMyProgramsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Subjects"
          component={UserSubjectsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Payments"
          component={UserPaymentsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  const AdminTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Programs':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Subjects':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Payments':
                iconName = focused ? 'home' : 'home';
                break;
            }
            return <Icon size={22} color={color} source={iconName} />;
          },
          tabBarActiveTintColor: '#d35400',
          tabBarInactiveTintColor: '#bdc3c7',
        })}>
        <Tab.Screen
          name="Home"
          component={AdminHomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Programs"
          component={AdminAllProgramsScreen}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name="Subjects"
          component={AdminSubjectScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Payments"
          component={AdminPaymentsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserDashboard"
          component={UserTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
