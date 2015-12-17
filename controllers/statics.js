// GET /
function home(req, res) {
  res.render('index');
}

module.exports = {
  home: home,
}

// jsm: looks good - this is a small enough function we could just use an anonymous function in the router this works here and you're ready to go if you add more static routes
