import {View, Text, StyleSheet} from "react-native";

export const Expense = ({details}) => {
    return (
        <View style={styles.expense}>
            <View>
                <Text style={styles.expenseText}>{details.name}</Text>
                <Text style={styles.expenseText}>{details.date.toLocaleString()}</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>{details.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    expense: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        backgroundColor: "#4005c5",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    expenseText: {
        color: "#977df1",
        fontWeight: "bold"
    },
    priceText: {
        color: "#977df1",
        fontSize: 14,
        fontWeight: "bold"
    },
    price:{
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "center"
    }
})
