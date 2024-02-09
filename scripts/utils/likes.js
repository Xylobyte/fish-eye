const likeSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heart\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/></svg>";
const likedSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-heart\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/></svg>";

function useLikes() {
    calculateTotalLikes();

    const likeBtns = document.getElementsByClassName("like_btn");
    for (const likeBtn of likeBtns) {
        const mediaId = parseInt(likeBtn.getAttribute("data-media-id"));
        const media = mediaList.find(m => m.id === mediaId);

        likeBtn.addEventListener("click", () => {
            media.like();
            likeBtn.innerHTML = `${media.likes} ${media.liked ? likedSvg : likeSvg}`;
            likeBtn.setAttribute('aria-label', `${media.liked ? 'Unlike' : 'Like'} ${media.title}`);
            calculateTotalLikes();
        });
    }
}

function calculateTotalLikes() {
    document.getElementById("total_likes").textContent = mediaList.reduce((a, b) => a + b.likes, 0);
}