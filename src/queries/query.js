import prompts from 'prompts';

const query = async () => {
    const schema = {
        type: 'select',
        name: 'type',
        message: 'What kind of request do you wish to make ?',
        choices: [
            { title: 'GET', value: 'GET' },
            { title: 'POST', value: 'POST' }
        ]
    }

    const query = await prompts(schema);
    return query;
}

export default query;
