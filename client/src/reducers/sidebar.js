const initialState = {
  leftSidebarIsVisible: false,
  rightSidebarIsVisible: false
}

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR_VISIBILITY':
      const changedVisibility =
        action.sidebar === 'left'
          ? { leftSidebarIsVisible: !state.leftSidebarIsVisible }
          : { rightSidebarIsVisible: !state.rightSidebarIsVisible }
      return {
        ...state,
        ...changedVisibility
      }
    default:
      return state
  }
}

export default sidebar
