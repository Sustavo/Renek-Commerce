export function serialize(obj) {
    let queryString = ""
    for (let key in obj) {
        console.log(key)
        queryString += `&${key}=${obj[key]}`;
    }
    return queryString
}