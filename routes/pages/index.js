const express = require('express')

module.exports.load = async function (app) {

    app.get('/', async (req, res) => {
        if (!req.session.data) return res.redirect('/auth/login')
        res.sendFile('../themes/pages/index.html')
    })

    app.get('/auth/login', async (req, res) => {
        if (req.session.data) return res.redirect('/')
        res.sendFile('../themes/pages/auth.html')
    })
}