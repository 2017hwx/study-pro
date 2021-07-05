function timedCount() {
    for (let index = 0; index < 100000000; index++) {
        postMessage(index);
    }
}
timedCount()