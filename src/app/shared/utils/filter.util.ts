export function filter(obj: any) {
    if (typeof obj === 'string') {
        obj = JSON.parse(obj);
    }

    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = JSON.stringify(obj[key]);
        }
    }
    return obj;
}
