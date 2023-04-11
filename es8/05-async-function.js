const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Async!"), 2000)
            : reject(new Error("Error!"));
    })
}