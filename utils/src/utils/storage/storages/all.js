module.exports = [
	// Listed in order of usage preference
	require('./localStorage'),
	require('./oldFF-globalStorage'),
	require('./oldIE-userDataStorage'),
	require('./sessionStorage'),
	require('./cookieStorage'),
	require('./memoryStorage')
]
