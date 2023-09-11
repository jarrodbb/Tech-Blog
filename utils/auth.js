const withAuth = (req, res, next) => {
  // Check if user is logged in. If not, redirect to login
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
