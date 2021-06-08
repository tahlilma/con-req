import axios from 'axios';
import ora from 'ora';
import urlTester from '../utils/urlTester.js';

const spinner = ora();

const post = async ({ url, body }) => {
    try {
        let parsed = JSON.parse(body);
        if (urlTester(url)) {
            spinner.start('Getting Data');
            axios.post(url, parsed)
                .then(res => {
                    spinner.succeed('SUCCESS');
                    console.log(res);
                })
                .catch(err => {
                    spinner.fail('FAILED');
                    console.log(err);
                })
        } else {
            console.log('Please Input A Proper URL or Body'); 
        }
    } catch {
        console.log('Invalid Body');
    }
}

export default post;
