export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            return [...state, action.newExpense];
        }
        default:
            return state;
    }
};
