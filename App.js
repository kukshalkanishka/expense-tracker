import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {RecentScreen} from "./screens/RecentScreen";
import {ExpensesScreen} from "./screens/ExpensesScreen";
import {AddExpense} from "./screens/AddExpense";
import Ionicons from '@expo/vector-icons/Ionicons';
import {useReducer} from "react";
import {ExpensesContext} from "./context/ExpenseContext";
import {reducer} from "./reducers/expensesReducer";

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabNavigator = () => {
    const navigation = useNavigation();

    return (
        <BottomTab.Navigator screenOptions={{
            headerRight: () => {
                return (
                    <Pressable onPress={() => navigation.navigate("addExpense")}>
                        <Ionicons name='add' size={32} color='#a77eee'/>
                    </Pressable>
                )

            }
        }}>
            <BottomTab.Screen name="recent" options={{
                title: "Recent Expenses"
            }} component={RecentScreen}/>
            <BottomTab.Screen name="AllExpenses" component={ExpensesScreen}/>
        </BottomTab.Navigator>
    )
};

export default function App() {
    const [expenses, dispatch] = useReducer(reducer, []);

    return (
        <>
            <ExpensesContext.Provider value={{expenses, dispatch}}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="BottomNavigator" options={{headerShown: false}}
                                      component={BottomTabNavigator}/>
                        <Stack.Screen name="addExpense" component={AddExpense}/>
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto"/>
            </ExpensesContext.Provider>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
