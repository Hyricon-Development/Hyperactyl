module.exports.load = async function (app) {

    app.post('/login', async (req, res) => {

        const data = req.body;
        const users = process.db.get('users');
        
        if (!users[data.email]) return res.redirect('/auth/login?error=UNKNOWN_USER');

        if (data.password !== users[data.email].password) return res.redirect('/auth/login?error=INCORRECT_PASSWORD');

        req.session.data = data;

        return res.redirect('/');
    });

    app.get('/logout', async (req, res) => {

        if (!req.session.data) return res.send('<br> You are not logged in </br>');

        req.session.destroy();

        return res.redirect('/auth/login');
    })
}