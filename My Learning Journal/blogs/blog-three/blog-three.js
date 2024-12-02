import { blogs } from "../../scripts/articles.mjs"

const recentPostsDiv = document.querySelector(".recent-blogs");

 
for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i]
    if (i === 3) {
        break;
    }
    renderRecentPosts(blog)
};


function renderRecentPosts(blog) {
    recentPostsDiv.innerHTML += `
        <div class="blog">
            <a href="../${blog.href}">
                <div class="img-container">
                    <img src="../../${blog.img}" alt="${blog.alt}">
                </div>
                <p class="blog-date">${blog.date}</p>
                <h2>${blog.title}</h2>
                <p class="blog-text">${blog.blog}</p>
            </a>
        </div>
        
    `;
};

