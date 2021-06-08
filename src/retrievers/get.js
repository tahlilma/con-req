import ora from 'ora';
import axios from 'axios';
import urlTester from '../utils/urlTester.js';

const spinner = ora();

const get = async (url) => {
    if (urlTester(url)) {
        spinner.start('Fetching Data');
        axios.get(url)
            .then((res) => {
                spinner.succeed('SUCCESS');
                console.log(res);
            }).catch((err) => {
                spinner.fail('FAILED');
                console.log(err);
            });
    } else {
        console.log('Please input a proper url');
    }
}

export default get;
