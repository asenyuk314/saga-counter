const delay = () =>
  new Promise(response => setTimeout(response, 2000))

export default delay
