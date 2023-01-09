import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';

import CounterDemo from './Pages/CounterDemo';
import SecondPage from './Pages/SecondPage';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="CounterPage">
      <Drawer.Screen
        name="CounterPage"
        component={CounterDemo}
        options={{ drawerLabel: 'FirstPage' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'SecondPage' }}
      />
      <Drawer.Screen
        name="MaterialTabbedPage"
        component={MaterialTabbedPageNavigator}
        options={{ drawerLabel: 'Material Tab' }}
      />
    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="CounterPage">
          <Stack.Screen name="CounterPage" component={CounterDemo} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="MaterialTabbedPage" component={MaterialTabbedPageNavigator} />
          {/* <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="TabbedPageNavigator" component={TabbedPageNavigator} />
        <Stack.Screen name="MaterialTabbedPage" component={MaterialTabbedPage} /> */}
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}

export default App;
