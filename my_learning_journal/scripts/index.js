import { blogs } from "./articles.mjs";

const mainSection = document.querySelector(".main-section");
const viewMoreBtn = document.querySelector(".view-more-btn");

for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i]
    if (i === 3) {
        break;
    }
    renderArticles(blog)
};

viewMoreBtn.addEventListener("click", function() {
    for (let i = 3; i < blogs.length; i++) {
        let blog = blogs[i];
        renderArticles(blog);
    }
    viewMoreBtn.remove(); // remove button after click
});


function renderArticles(blog) {
    mainSection.innerHTML += `
        <div class="blog">
            <a href="../blogs/${blog.href}">
                <div class="img-container">
                    <img src="${blog.img}" alt="${blog.alt}">
                </div>
                <p class="blog-date">${blog.date}</p>
                <h2>${blog.title}</h2>
                <p class="blog-text">${blog.blog}</p>
            </a>
        </div>
        
    `;
};

// don't forget to add lazy loading