export const API_URL = "http://localhost:8080/api/todos"

export const fetchData = <T>(url: string): Promise<T> => {
    return fetch(url).then((res) => res.json());
}

export const postData = <T>(url: string, data: T): Promise<T> => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => res.json());
}

export type KwizzApiRes<T> = {
    results: Array<T>;
    count: number;
}