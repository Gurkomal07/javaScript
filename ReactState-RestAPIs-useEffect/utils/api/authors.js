
import {BASE_URL } from './base.js'
//https://openlibrary.org/authors/OL23919A.json
const getAuthorData = (Key) => {
  return fetch(`${BASE_URL}authors/${Key}.json`)
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })    
}





const getBooksList = (authorKey) => {
    return fetch(`https://openlibrary.org/authors/${authorKey}/works.json?limit=100`)
      .then((response)=> {
        return response.json()
      }).then((data)=> {
        return Promise.resolve(data)
    
      })    
  }


export { getAuthorData, getBooksList}
