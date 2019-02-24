export function changeState(state, payload) {
  console.log('state', state);
  console.log('payload', payload);
  const text = payload.text[0].split(',');
  state.name = text[0];
  state.weather[0].description = text[1];
  return state;
}
