// Simple stub for an auto-translate generator. Replace with real translation API.
const fs = require('fs')
const enPath = './src/i18n/en.json'
const arPath = './src/i18n/ar.json'

function load(file) {
  try { return JSON.parse(fs.readFileSync(file,'utf8')) } catch(e){ return {} }
}

const en = load(enPath)
// no explicit ar var needed here

function translate(obj){
  if(typeof obj === 'string'){
    return '[AUTOT] '+obj
  }
  if(Array.isArray(obj)) return obj.map(translate)
  if(typeof obj === 'object'){
    const out = {}
    for(const k of Object.keys(obj)) out[k] = translate(obj[k])
    return out
  }
  return obj
}

const newAr = translate(en)
fs.writeFileSync(arPath, JSON.stringify(newAr, null, 2))
console.log('Wrote', arPath, ' — Please QA and update. Add label i18n-review')
