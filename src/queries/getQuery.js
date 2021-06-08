import prompts from 'prompts';

const getQuery = async () => {
    return await prompts({
        type: 'text',
        name: 'url',
        message: 'Enter the url you wish to GET from'
    })
}

export default getQuery;
