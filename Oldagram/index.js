const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]




function createPost(posts) {
    const featuresContainer = document.querySelector(".features")
    featuresContainer.innerHTML = ""

    posts.forEach(card => {
        let friendInfo = document.createElement("section")
        friendInfo.className = "user-post-info"
        let userInfoDivTag = document.createElement("div")
        let postImage = document.createElement("section")
        let postBase = document.createElement("div")
        let iconsDivTag = document.createElement("div")
        iconsDivTag.className = "icons"
    
    
        let friendProfilePicture = document.createElement("img")
        friendProfilePicture.className = "friend-dp"
        let friendName = document.createElement("p")
        friendName.className = "friend-name"
        let friendCountry = document.createElement("p")
        friendCountry.className = "friend-city"
        let mediaPost = document.createElement("img")
        
        // Icons
        let heartIcon = document.createElement("img")
        heartIcon.src = "images/icon-heart.png"
        heartIcon.className = "like-button"
        let commentIcon = document.createElement("img")
        commentIcon.src = "images/icon-comment.png"
        let messageIcon = document.createElement("img")
        messageIcon.src = "images/icon-dm.png"
        
        let totalLikes = document.createElement("p")
        totalLikes.className = "total-likes"
        let postComment = document.createElement("p")
        postComment.className = "comment"
    
    
        // Set Content and Attributes
        friendName.innerHTML = card.name
        friendCountry.innerHTML = card.location
        friendProfilePicture.src = card.avatar
        mediaPost.src = card.post
        postComment.innerHTML = `<strong>${card.username}</strong> ${card.comment}`
        totalLikes.textContent = `${card.likes} likes`
    
    
        // append the elements together
    
            //1st section
        userInfoDivTag.appendChild(friendName)
        userInfoDivTag.appendChild(friendCountry)
        
        friendInfo.appendChild(friendProfilePicture)
        friendInfo.appendChild(userInfoDivTag)
    
            // 2nd section
        postImage.appendChild(mediaPost)
    
            // footer
        iconsDivTag.appendChild(heartIcon)
        iconsDivTag.appendChild(commentIcon)
        iconsDivTag.appendChild(messageIcon)
    
        postBase.appendChild(iconsDivTag)
        postBase.appendChild(totalLikes)
        postBase.appendChild(postComment)


        // adding some styles
        postBase.style.borderBottom = "30px solid #EDEDED"
    
        featuresContainer.appendChild(friendInfo)
        featuresContainer.appendChild(postImage)
        featuresContainer.appendChild(postBase)

        
        // Attach event listener to each like button
        heartIcon.addEventListener("dblclick", () => {
            card.likes += 1
            totalLikes.textContent = `${card.likes} likes`
        })
        
    })

    
}

createPost(posts)