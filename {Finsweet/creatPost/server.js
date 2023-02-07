const ENDPOINTS = "https://blog-backend.up.railway.app/api/v1/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDVjOGViZGU4NmEwMGViMGIwNzRiNSIsImlhdCI6MTY3NTIzNzM2NCwiZXhwIjoxNjc3ODI5MzY0fQ.SpQJixNgg0dYW75Q3ohS091CyrM80V6QYZ6T2lLxa1A";

const request = axios.create({
  baseURL: ENDPOINTS,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem(TOKEN)
  }
});
