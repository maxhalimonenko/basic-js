function getEmailDomain(gmail) {
  return gmail.slice(gmail.lastIndexOf('@') + 1);
}
module.exports = {
  getEmailDomain
};