const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')
// const EmailTemplate = require('email-templates').EmailTemplate;
// length either 8 or 15

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
	res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
	const attributes = { ...req.body }
	// [
	// 	'name', // String
	// 	'vorname', // String
	// 	'strasse', // String
	// 	'nr', // String
	// 	'plz', // String
	// 	'ort', // String
	// 	'geburtstag', // String
	// 	'email', // String
	// 	'telefon', // String
	// 	'seminars', // Array []
	// ]
	// const sanitizedAttributes = attributes.map((n) => validateAndSanitize(n, req.body[n]))
	// console.log(sanitizedAttributes)

	// const someInvalid = sanitizedAttributes.some((r) => !r)

	// if (someInvalid) {
	// 	return res.status(422).json({ error: 'Ugh.. That looks unprocessable!' })
	// }

	res.status(200).json({ message: 'OH YEAH' })
	sendMail(attributes)
})

module.exports = {
	path: '/api/contact',
	handler: app,
}

const sendMail = ({ vorname, nachname, email, anliegen, nachricht }) => {
	let text = `${vorname}, ${nachname}, ${email}, ${anliegen}, ${nachricht}`
	let html = 'test'
	let transporter = nodemailer.createTransport({
		host: 'smtp.office365.com',
		port: 587,
		secure: false,
		auth: {
			user: 'info@kv-informatik.ch',
			pass: 'Nk8~c]w2nC<LSR#',
		},
	})

	// let transporter = createTransport({
	// 	host: 'dali.sui-inter.net',
	// 	port: 465,
	// 	secure: true,
	// 	auth: {
	// 		user: 'info@rechtwinklig.ch',
	// 		pass: '!ml18Py3',
	// 	},
	// })
	transporter.verify(function (error, success) {
		if (error) {
			console.log(error)
		} else {
			console.log('Server is ready to take our messages')
		}
	})
	// let transporter = nodemailer.createTransport('smtps://info@rechtwinklig.ch:!ml18Py3@dali.sui-inter.net')
	transporter.sendMail({
		from: 'KV Winterthur <admin@rechtwinklig.ch>',
		to: email,
		subject: 'Anmeldung erfolgreich!',
		text: text,
		html: html1,
	})
	// transporter.sendMail({
	// 	from: 'info@rechtwinklig.ch',
	// 	to: email, //,
	// 	subject: 'Anmeldung erfolgreich!',
	// 	text: text,
	// 	html: html + text,
	// })
}
