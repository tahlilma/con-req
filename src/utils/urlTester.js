const urlTester = (url) => {
    try {
        new URL(url);
    } catch (err) {
        return false;
    }
    return true;
}

export default urlTester;
