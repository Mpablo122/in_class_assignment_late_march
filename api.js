const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getposts() {
    try {
const res = await fetch(BASE_URL);
if (!res.ok){
    throw new Error(`Error: ${res.status}`);
}
return await res.json();
} catch(err){
    console.error('API Catch Failed', err.message);
    throw err;
 };
};



