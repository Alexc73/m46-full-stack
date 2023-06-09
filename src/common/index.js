export const writeCookie = (key, value, days) => {
    // key = name
    // value = jwt_token
    // days = when the cookie will expire

    let date = new Date ()
    days = days || 365
    date.setDate(date.getDate() + days)

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"

    return cookie

}   

export const getCookie = (cookieName) => {
    // the ppatern we want to find our cookie
    // find the cookie with name we pass to the function
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)
    console.log("regular expression")
    console.log(re)
    try {
        let cookie = document.cookie.match(re)[0] // will raise a typeError if the cookie isn't found
        return cookie
    } catch (error) {
        console.log(error)
        console.log("cookie not found")
        return false
    }
}