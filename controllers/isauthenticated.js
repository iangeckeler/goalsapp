const isAuthenticated = (req,res,next) => {
    console.log('hit authetncation middlware')
    console.log(req.session)
    if (req.session.loggedin) {
        return next()
    } else {
        res.redirect('/login')
    }
}

module.exports = isAuthenticated;