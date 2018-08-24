const host = 'https://api.douban.com/v2/'

const book = `${host}book/user/Yalii1006/collections`
const movie = `${host}movie/top250?start=0&count=250`
const active = `${host}event/list?loc=118267`

export default { book, movie, active }
