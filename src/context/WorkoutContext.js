import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();
// the state is the previous state and the action is the type of the action
// we check the action type to see what we wan to do with the data.
//the action type would be different, use switch case.
export const workoutsReducer = (state, action) => {
    switch (action.type){
        case 'SET_WORKOUTS':
        return {
            workouts: action.payload
        }
        case 'CREATE_WORKOUT':
        return {
            workouts: [action.payload, ...state.workouts]
        }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null,
    });

    // dispatch({type: 'SET_WORKOUTS', payload: [{},{}]})

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}