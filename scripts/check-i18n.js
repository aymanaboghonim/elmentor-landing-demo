const fs = require('fs')
const en = JSON.parse(fs.readFileSync('./src/i18n/en.json','utf8'))
const ar = JSON.parse(fs.readFileSync('./src/i18n/ar.json','utf8'))

function flatten(obj, prefix=''){
  const res = {}
  for(const k of Object.keys(obj)){
    const val = obj[k]
    const key = prefix? prefix + '.' + k : k
    if(typeof val === 'object' && !Array.isArray(val)){
      Object.assign(res, flatten(val, key))
    } else {
      res[key] = val
    }
  }
  return res
}

const enFlat = flatten(en)
const arFlat = flatten(ar)

const missing = []
for(const key of Object.keys(enFlat)){
  if(!(key in arFlat)) missing.push(key)
}

if(missing.length){
  console.warn('Missing translation keys in ar.json:')
  for(const k of missing) console.warn('-', k)
  process.exit(1)
}else{
  console.log('All i18n keys present in ar.json')
  process.exit(0)
}
