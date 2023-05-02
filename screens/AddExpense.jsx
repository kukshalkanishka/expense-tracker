import {View, Text, TextInput, StyleSheet, Button, Pressable} from "react-native"
import {useContext, useState} from "react";
import uuid from 'react-native-uuid';
import {ExpensesContext} from "../context/ExpenseContext";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const AddExpense = () => {
    const [expense, setExpense] = useState({});
    const [errors, setErrors] = useState({});
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const {dispatch} = useContext(ExpensesContext);

    const handleExpenseUpdate = (key, value) => {
        setExpense(expense => ({...expense, [key]: value}))
    }

    const handleExpenseAdd = () => {
        if (!Object.values(expense).includes(undefined)) {
            return dispatch({type: "ADD", newExpense: {...expense, id: uuid.v4()}});
        }
        setErrors({message: "All properties required"});
    }

    const handleNameChange = (value) => handleExpenseUpdate("name", value);
    const handlePriceChange = (value) => handleExpenseUpdate("price", value);
    const handleDateChange = (value) => handleExpenseUpdate("date", new Date(value.nativeEvent.timestamp));

    return (
        <View style={styles.container}>
            <TextInput style={styles.textField} value={expense.name} placeholder={"Enter name"}
                       onChangeText={handleNameChange}/>
            <TextInput style={styles.textField} value={expense.price} placeholder={"Enter price"}
                       onChangeText={handlePriceChange}/>
            <Pressable onPress={() => setIsDatePickerOpen(true)}>
                <Text
                    style={styles.textField}>{expense.date && expense.date.toLocaleString()}
                </Text>
            </Pressable>
            {isDatePickerOpen && <RNDateTimePicker
                value={new Date()}
                onChange={(date) => {
                    setIsDatePickerOpen(false)
                    handleDateChange(date)
                }}
            />}
            <Text>{errors.message}</Text>
            <Button title={"ADD"} onPress={handleExpenseAdd}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        borderColor: "#7d6bcf",
        borderBottomWidth: 1,
        height: 50,
        width: "40%"
    },
    container: {
        padding: 20
    }
})