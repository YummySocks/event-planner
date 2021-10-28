const withAuth = (req, res, next) => {
    if (!req.session.email) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;