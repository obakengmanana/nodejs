const middleware = {}

middleware['dataservice'] = require('..\\middleware\\dataservice.js')
middleware['dataservice'] = middleware['dataservice'].default || middleware['dataservice']

export default middleware
