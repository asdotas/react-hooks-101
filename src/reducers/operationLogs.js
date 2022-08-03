import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions";

const oprationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = { description: action.description, oprationAt: action.operateAt }
            return [operationLog, ...state];
        case DELETE_ALL_OPERATION_LOGS:
            return [];
        default:
            return state;
    }

}

export default oprationLogs