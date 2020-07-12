import { AppStyleTypes } from '../Actions/AppStyles'

import Colors from '../Styles/Colors'

const initialState = {
  backgroundColor: Colors.default
}

const AppStyles = (state = initialState, action: any) => {
  switch(action.type) {

    case AppStyleTypes.SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.color
      }

    default:
      return state
  }
}

export default AppStyles