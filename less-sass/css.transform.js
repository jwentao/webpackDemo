module.exports = function (css) {
	console.log(css)
	if (window.innerWidth >= 500)
	return css.replace('red', 'green')
	else return css.replace('red', 'orange')
}