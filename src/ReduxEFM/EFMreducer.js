const initialState = {
    nb1: 0,
    nb2: 0,
    result: 0,
    nbrOP: 0,
    OP: ""
};

export const EFMreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return { 
                ...state,
                result: Number(state.nb1) + Number(state.nb2),
                nbrOP: state.nbrOP + 1,
                OP: '+' 
            };
        case 'sub':
            return { 
                ...state,
                result: Number(state.nb1) - Number(state.nb2),
                nbrOP: state.nbrOP + 1,
                OP: '-' 
            };
        case 'mul':
            return { 
                ...state,
                result: Number(state.nb1) * Number(state.nb2),
                nbrOP: state.nbrOP + 1,
                OP: '*' 
            };
        case 'div':
            return { 
                ...state,
                result: Number(state.nb1) / Number(state.nb2),
                nbrOP: state.nbrOP + 1,
                OP: '/' 
            };
        case 'nbr1V':
            return { 
                ...state,
                nb1: action.payload 
            };
        case 'nbr2V':
            return { 
                ...state,
                nb2: action.payload 
            };
        default:
            return state;  // Add default case to return current state
    }
};