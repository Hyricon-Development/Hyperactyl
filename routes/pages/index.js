module.exports.load = async function (app) {

    app.get('/', async (req, res) => {
        if (!req.session.data) return res.redirect('/auth/login')
        return res.sendFile('../themes/pages/index.html')
    })

    app.get('/auth/login', async (req, res) => {
        if (req.session.data) return res.redirect('/')
        return res.sendFile(__dirname, '../themes/pages', 'auth.html')
    })
}