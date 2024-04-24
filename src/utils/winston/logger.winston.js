const winston = require('winston')

const serverLogger = winston.createLogger({
	transports: [
		new winston.transports.Console({level: 'http'}),
        new winston.transports.File({filename: './errors.log', level:'warn'})
    ]
})



module.exports = serverLogger


