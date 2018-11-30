const isAuthenticated = (req,res,next) => {
    console.log(req.originalUrl)
    //console.log(req.session)
    let s1=req.originalUrl;
    if (s1.includes('login') || req.originalUrl=='/login/' || req.originalUrl == '/login/signup'||req.originalUrl == '/sms') {
        return next()
    } else if (req.session.loggedIn) {
        return next()
    } else {
        console.log(req.originalUrl)
        console.log('request not validated')
        res.redirect('/login')
    }
}

module.exports = isAuthenticated;