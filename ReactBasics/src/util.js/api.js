const host = 'https://api.douban.com/v2/'

const book = `${host}book/user/Yalii1006/collections`
const movie = `${host}movie/top250?start=0&count=20`
const movieOn = `${host}movie/in_theaters` //正在上映
const movieSoon = `${host}movie/weekly` //即将上映
const active = `${host}event/list?loc=118267`

export default { book, movie, active, movieOn, movieSoon }
