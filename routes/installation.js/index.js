module.exports.load = async function (app) {

    app.post('/install', async (req, res) => {
        const json_body = JSON.parse(JSON.stringify(req.body));
        const data = JSON.parse(json_body.data);
        process.db.set('settings', data)

        return res.json({
            "sucess": true
        })
    })
}
