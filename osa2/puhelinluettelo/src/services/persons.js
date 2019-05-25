import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const r =  axios.get(baseUrl)
  const ret = r.then(
    //node backend returns data in different format
      response => response.data[0].persons
  )
  return ret
}

const create = newObject => {
    const r = axios.post(baseUrl, newObject)
    return r.then(
        response => response.data
    )
}

const update = (id, newObject) => {
  const r = axios.put(`${baseUrl}/${id}`, newObject)
  return r.then(
    response => response.data
    )
}

const remove = (id) => {
    const r =  axios.delete(`${baseUrl}/${id}`)
    return r.then(
        response => response.data
    )
}


export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  remove: remove,
}