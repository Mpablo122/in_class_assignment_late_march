import { getposts } from './api.js';

async function displayposts() {
    const container = document.getElementById('postcontainer');

    try{
      const posts = await getposts();
      posts.slice(0, 5).forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<h3> ${post.title}</h3><p>${post.body}</p>`;
});
    } catch (err){
        container.innerHTML = `<p style = "color:red;"> Failed to load posts:`
    }
}
displayposts();