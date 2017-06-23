import createHistory from 'history/createHashHistory'
const history = createHistory()
// Get the current location.
history.listen((location, action) => {
// location is an object like window.location
	console.log(action, location.pathname, location.state)
})
export default history
