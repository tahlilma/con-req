import prompts from 'prompts';

const postQuery = async () => {
    return await prompts([
        {
            type: 'text',
            name: 'url',
            message: 'Enter URL'
        },
        {
            type: 'text',
            name: 'body',
            message: 'Enter body (Example: { "name": "Josh" })'
        }
    ])
}

export default postQuery;
