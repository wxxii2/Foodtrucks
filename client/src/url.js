let URLs = {};

if (process.env.NODE_ENV === "production") {
    URLs = {
        baseURL: "/api",
        socketURL: "https://snacksinavan2021.herokuapp.com/api",
    };
} else {
    URLs = {
        baseURL: "http://localhost:8080/api",
        socketURL: "http://localhost:8080/api",

    };
}
export default URLs;