const { NotImplementedError } = require('../extensions/index.js');
function getDNSStats( domains ) {
  const res = {}
  domains.forEach(domain => {
    const splitted = domain.split('.').reverse()
    splitted.forEach((s, i) => {
      const before = splitted.slice(0, i)
      const value = '.' + [...before, splitted[i]].join('.')
      if (res[value]) res[value]++
      else res[value] = 1
    })
  })
  return res
}
console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))
module.exports = {
  getDNSStats
};