import { Add_To_Card } from '../Constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = initialState, action) {

    switch (action.type) {
        case Add_To_Card:
            return {
                  ...state,
                cardData: action.data
            }
            break;
        default:
            return state
    }

}