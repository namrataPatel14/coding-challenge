
const transformValue = obj => {
    // Write your solution here. You can create any number of helper functions
    const keys = Object.keys(obj);
    keys.forEach((key, index) => {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] + 1;
        } else if (typeof obj[key] === 'string') {
            obj[key] = obj[key] + ' AI';
        } else if (Array.isArray(obj[key])) {
            obj[key] = obj[key].map((item) => {
                if (typeof item === 'number') {
                    return item += 1;
                } else {
                    return item += ' AI'
                }
            });
        } else {
            transformValue(obj[key]);
        }
    })
    return obj
};

const sampleValue = {
    a: 123,
    b: 'hero',
    c: [1, 2, 3],
    d: {
        e: 3,
        f: ['abc', 'def'],
        h: { i: 5, j: 'hello' }
    }
}
console.log(transformValue(sampleValue));