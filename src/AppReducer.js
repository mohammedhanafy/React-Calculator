export default (state, action) => {
    switch(action.type) {
        case 'OUTPUT':
            return {
                ...state,
                displayValue: action.payload
            }
        case 'UNSET_DISPLAY_VALUE':
            return {
                ...state,
                displayValue: ''
            }
        default:
            return state;
    }
}