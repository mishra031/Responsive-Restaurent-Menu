document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const commentForm = document.getElementById("comment-form");
    const commentsSection = document.getElementById("comments-section");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    // Fetch blog posts from JSON (Simulating API call)
    fetch("blog-posts.json")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("blog-card");
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <img src="${post.image}" alt="${post.title}" class="food-image lazy-load">
                `;
                blogContainer.appendChild(postElement);
            });
            lazyLoadImages();
        });
    
    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
    
    // Comment System
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const comment = document.getElementById("comment").value;
        
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<strong>${username}</strong>: ${comment}`;
        commentsSection.appendChild(commentElement);
        
        commentForm.reset();
    });
    
    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
    
    // Lazy Load Images
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll(".lazy-load");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.getAttribute("data-src");
                    entry.target.classList.add("loaded");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        lazyImages.forEach(img => {
            img.setAttribute("data-src", img.src);
            img.src = "";
            observer.observe(img);
        });
    }
    
    lazyLoadImages();
});
