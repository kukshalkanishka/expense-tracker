import {FlatList} from "react-native";
import {Expense} from "./Expense";

export const Expenses = ({data}) => {
    return (
        <FlatList
            data={data}
            renderItem={({item}) => <Expense details={item}/>}
        />
    );
};