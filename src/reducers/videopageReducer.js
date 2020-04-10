export const videopageReducer = (state, action) => {
  switch (action.type) {

    case 'plusright': {
      if (state.right != 1200) {
        return {
          ...state,
          right: state.right + 400, 
          mobile:false
        }
      }
      else return state
    }
    case 'minusrigh': {
      if (state.right != 0) {
        return {
          ...state,
          right: state.right - 400,
          mobile:false
        }
      }
      else return state
    }
    case 'tostart': {

        return {
          ...state,
          right: 0
        }
    }
    case 'plusrightMobile': {
      if (state.right != 5*85) {
      return {
        ...state,
        right: state.right+85,
        mobile:true
      }
    }
      else return state
    }
    case 'minusrighMobile': {
      if (state.right != 0) {
      return {
        ...state,
        right: state.right-85,
        mobile:true
      }
    }

  else return state
    }
    case 'shortcut': {
      return {
        ...state, 
        right: action.value,
        mobile:true
      }
    }
    case 'toend': {

      return {
        ...state,
        right: 1200,
        mobile:false
      }
  }
  }
}