let URLs = {};

if (process.env.NODE_ENV === "production") {
    URLs = {
        baseURL: "/api",
        socketURL:"https://fooodtruck.herokuapp.com/api"
        // socketURL:"http://localhost/api"

    };
} else {
    URLs = {
        baseURL: "https://fooodtruck.herokuapp.com/api",
        socketURL: "https://fooodtruck.herokuapp.com/api",
        // baseURL: "http://localhost/api",
        // socketURL: "http://localhost/api",

    };
}
export default URLs;