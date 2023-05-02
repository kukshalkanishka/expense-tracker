import {StyleSheet, Text, View} from "react-native"
import {useContext} from "react";
import {Expenses} from "../components/Expenses";
import {ExpensesContext} from "../context/ExpenseContext";

const RECENT_DAYS = 7;
export const RecentScreen = () => {
    const {expenses} = useContext(ExpensesContext);
    const recentDate = new Date();
    recentDate.setDate(recentDate.getDate() - RECENT_DAYS);

    const recentExpenses = expenses.filter(expense => expense.date.getTime() >= recentDate)

    return (
        <View style={styles.container}>
            <View style={styles.totalContainer}>
                <Text style={styles.header}>Last {RECENT_DAYS} Days</Text>
                <Text style={styles.value}>
                    {recentExpenses.reduce((total, current) => total + Number(current.price), 0)}
                </Text>
            </View>
            <Expenses data={recentExpenses}/>
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