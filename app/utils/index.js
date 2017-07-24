var path = require('path');

module.exports = {
  respond,
  respondOrRedirect
};

function respond (res, tpl, obj, status) {
  res.sendfile(path.resolve('app/views/dist/index.html'));
  // res.format({
  //   html: () => res.sendfile('../views/dist/index.html'),
  //   // html: () => res.render(tpl, obj),
  //   json: () => {
  //     if (status) return res.status(status).json(obj);
  //     res.json(obj);
  //   }
  // });
}

function respondOrRedirect ({ req, res }, url = '/', obj = {}, flash) {
  res.format({
    html: () => {
      if (req && flash) req.flash(flash.type, flash.text);
      res.redirect(url);
    },
    json: () => res.json(obj)
  });
}
