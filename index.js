module.exports.userId = function(req){
  if(req && req.user && req.user.sub) return 'UserId: ' + req.user.sub;
};

module.exports.user = function(req){
  if(req && req.user) return JSON.stringify(req.user);
};

module.exports.url = function (req) {
  if(req) return `${req.method} ${req.originalUrl}`;
};

module.exports.body = function (req) {
  if(req) return JSON.stringify(req.body);
};

module.exports.headers = {};
module.exports.headers.authorization = function (req) {
  if(req && req.headers && req.headers.authorization) return `Authorization: ${req.headers.authorization}`;
};

module.exports.params = function (req) {
  if(req) return JSON.stringify(req.params);
};

module.exports.query = function (req) {
  if(req) return JSON.stringify(req.query);
};