export const checkResponse = (response: any) =>
  new Promise((resolve, reject) => {
    response.ok ? response.json().then((json: any) => resolve(json)) : response.json().then((json: any) => reject(json))
  })