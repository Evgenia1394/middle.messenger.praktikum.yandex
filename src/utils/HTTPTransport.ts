function fetchWithRetry(url, options={ retries: 1 }) {
    const {retries} = options;
    let errorsCount = 0;
    return new HTTPTransport().get(url)
        .then(response => {
            return response})
        .catch(error => {
            errorsCount+=1
            if (errorsCount>retries) {
                throw new Error();
            } else {
                fetchWithRetry(url, options={ retries: retries })
            }
        })
}

const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
};
function queryStringify(data) {
    const res = [];
    for (const [key, value] of Object.entries(data)) {
        if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
        ) {
            res.push(`${key}=${value}`);
        }
        if (typeof value === "object" && !Array.isArray(value)) {
            res.push(`${key}=[object Object]`);
        }
        if (Array.isArray(value)) {
            res.push(`${key}=${value.join()}`);
        }
    }
    return `${res.join("&").trim()}`;
}

class HTTPTransport {
    get = (url, options={timeout: 5000, headers: {}, data: {}}, method?) => {
        return this.request(url, options, METHODS.GET, options.timeout);
    };
    put = (url, options={timeout: 5000, headers: {}, data: {}}, method) => {
        return this.request(url, options, METHODS.PUT, options.timeout);
    };
    post = (url, options={timeout: 5000, headers: {}, data: {}}, method) => {
        return this.request(url, options, METHODS.POST, options.timeout);
    };
    delete = (url, options={timeout: 5000, headers: {}, data: {}}, method) => {
        return this.request(url, options, METHODS.DELETE, options.timeout);
    };

    request = (url, options, method, timeout = 5000) => {
        const {headers, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.timeout = timeout;
            if (method === METHODS.GET || !data) {
                url = `${url}?${queryStringify(data)}`
            }
            xhr.open(method, url);
            xhr.onload = function() {
                resolve(xhr);
            }

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        })
    }
}
