export default function manageBand(state = {
  bands: [],
}, action) {

  if(action.type === 'ADD_BAND') {
    return {
      bands: [...state.bands, action.payload.name]
    }
  }

  console.log(state)
  return state
};
