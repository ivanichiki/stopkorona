export const videopageReducer = (state, action) => {
  switch (action.type) {

    case 'plusright': {
      if (state.right != 1200) {
        return {
          ...state,
          right: state.right + 400
        }
      }
      else return state
    }
    case 'minusrigh': {
      if (state.right != 0) {
        return {
          ...state,
          right: state.right - 400
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
    case 'toend': {

      return {
        ...state,
        right: 1200
      }
  }
  }
}