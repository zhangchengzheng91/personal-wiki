function parseSearchToObj(url) {
  const queryString = url.split('?')[1] || ''
  const queryArray = queryString.split('&') || []
  const query = {}
  queryArray.forEach(value => {
    const array = value.split('=')
    query[array[0]] = decodeURI(array[1])
  })
  return query
}

function parseSearchToObj2(url) {
  let search = url
  if (/^\?/.test(search)) {
    search = url.split['?'][1] || []
  }
  return JSON.parse("{\"".concat(decodeURIComponent(search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"'), "\"}"))
}

const url2 = 'https://www.baidu.com?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=js&rsv_pq=a86b5e5f0007bceb&rsv_t=1e1fAVan%2BVlnkhJHFB0BIGLdLM2slszYMJBTTfFkmyyBUzBpw0ggeuVDE50&rqlang=cn&rsv_enter=0&inputT=1287&rsv_sug3=5&rsv_sug1=3&rsv_sug7=101&rsv_sug2=0&rsv_sug4=1907'

const url = `https://www.baidu.com
  ?ie=utf-8
  &f=8
  &rsv_bp=1
  &rsv_idx=1
  &tn=baidu
  &wd=js
  &rsv_pq=a86b5e5f0007bceb
  &rsv_t=1e1fAVan%2BVlnkhJHFB0BIGLdLM2slszYMJBTTfFkmyyBUzBpw0ggeuVDE50
  &rqlang=cn
  &rsv_enter=0
  &inputT=1287
  &rsv_sug3=5
  &rsv_sug1=3
  &rsv_sug7=101
  &rsv_sug2=0
  &rsv_sug4=1907
  `

console.log(parseSearchToObj(url2))
console.log(parseSearchToObj2(url2))
