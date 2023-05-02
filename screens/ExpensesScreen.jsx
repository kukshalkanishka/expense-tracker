import {StyleSheet, Text, View} from "react-native"
import {useContext} from "react";
import {ExpensesContext} from "../context/ExpenseContext";
import {Expenses} from "../components/Expenses";

export const ExpensesScreen = () => {
    const {expenses} = useContext(ExpensesContext);

    return (
        <View style={styles.container}>
            <View style={styles.totalContainer}>
                <Text style={styles.header}>Total</Text>
                <Text style={styles.value}>
                    {expenses.reduce((total, current) => total + Number(current.price), 0)}
                </Text>
            </View>
            <Expenses data={expenses}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    totalContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#e0d5fd",
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 8
    },
    header: {
        color: "#9b89d2"
    },
    value: {
        color: "#7d6bcf",
        fontWeight: "bold"
    },
})