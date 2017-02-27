//PASS 1
// src/app.js
// const root = document.querySelector('#root')
// root.innerHTML = `<p>Hello webpack.</p>`


// src/app.js
import {groupBy} from 'lodash/collection'

//IMPORT THIS MODULE TO people.js
import people from './people'

const managerGroups = groupBy(people, 'manager')
debugger;
const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`