const app = require('./app/server');
const port = app.get('port')

app.listen(app.get('port'), () => {
	console.log(`Server running at http://localhost:${port}`)
})