#!/usr/bin/env node

import query from './queries/query.js';
import get from './retrievers/get.js';
import getQuery from './queries/getQuery.js';
import post from './retrievers/post.js';
import postQuery from './queries/postQuery.js';

async function main() {
    let ques = await query();
    if (ques.type === 'GET') {
        let reqURL = await getQuery();
        let response = await get(reqURL.url);
        response === undefined ? null : console.log(response);
    } else {
        let postURL = await postQuery();
        let postRes = await post(postURL);
        postRes === undefined ? null : console.log(postRes);
    }
}

main();
