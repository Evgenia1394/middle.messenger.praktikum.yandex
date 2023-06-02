function merge(lhs: any, rhs: any) {
    for (let p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p], rhs[p]);
            } else {
                lhs[p] = rhs[p];
            }
        } catch(e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

export function set(object: unknown, path: string, value: unknown): unknown {
    let newObj = {}
    newObj[path]=value;
    return merge(object, newObj)
}

export default set
