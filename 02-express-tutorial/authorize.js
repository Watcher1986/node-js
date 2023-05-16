const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'john') {
    req.user = { name: 'john', id: 3 };
    return next();
  } else {
    res.status(401).send('Unauthorized');
    return next();
  }
};

module.exports = authorize;
