// ========== GLOBAL VARIABLES ========== //
const postText = document.getElementById("postText");
const mediaPreview = document.getElementById("mediaPreview");
const imageInput = document.getElementById("imageInput");
const videoInput = document.getElementById("videoInput");
const audioInput = document.getElementById("audioInput");
const postArea = document.getElementById("postArea");
const emojiContainer = document.querySelector(".emoji-picker-container");

// Initialize Bootstrap modal
const recordingModal = new bootstrap.Modal(document.getElementById('recordingModal'));

// ========== MEDIA PREVIEW =================== //

function previewMedia(files, type) {
    for(let file of files) {
        const url = URL.createObjectURL(file);
        let element;

        if(type === "image") {
            element = document.createElement("img");
            element.src = url;
            element.className = "img-fluid rounded mb-2 me-2";
            element.style.maxWidth = "100%";
        } else if (type === "video") {
            element = document.createElement("video");
            element.src = url;
            element.controls = true;
            element.className = "mb-2 me-2";
            element.style.maxWidth = "100%";
        } else if (type === "audio") {
            element = document.createElement("audio");
            element.src = url;
            element.controls = true;
            element.className = "mb-2 me-2";
        }

        mediaPreview.appendChild(element);
    }
}

imageInput.addEventListener("change", () => {
    previewMedia(imageInput.files, "image");
});

videoInput.addEventListener("change", () => {
    previewMedia(videoInput.files, "video");
});

audioInput.addEventListener("change", () => {
    previewMedia(audioInput.files, "audio");
});



// ================= POST CREATION ===================== //
let allPosts = JSON.parse(localStorage.getItem('allPosts')) || [];

function createPost(content = null, mediaHTML = null, postId = null , isFromStorage = false) {
    const inputContent = content || postText.value.trim();
    if (!inputContent && mediaPreview.children.length === 0 && !mediaHTML) {
        alert("Please write something or add media.");
        return;
    }

    const id = postId || 'post-' + Date.now();

    const postDiv = document.createElement("div");
    postDiv.className = "post-card";
    postDiv.id = id;

    postDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
                <img src="./images/user female.jpg" class="user-avatar me-3" alt="User">
                <div>
                    <h6 class="mb-0 text-white">You</h6>
                    <small class="text-danger fw-bold">Just Now</small>
                </div>
            </div>
            <button class="btn btn-sm btn-danger delete-post" data-post-id="${id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="post-content">
            <p>${inputContent}</p>
        </div>
        <div class="post-actions">
            <button class="btn btn-sm btn-outline-light like-btn" data-post-id="${id}">
                <i class="far fa-heart"></i> <span class="like-count">0 Likes</span>
            </button>
            <button class="btn btn-sm btn-outline-light comment-btn" data-post-id="${id}">
                <i class="far fa-comment"></i> Comment
            </button>
        </div>
        <div class="comments-section d-none" id="comments-${id}">
            <div class="comment-form mt-2">
                <input type="text" class="form-control comment-input" placeholder="Write a comment..." data-post-id="${id}">
                <button class="btn btn-sm btn-primary mt-2 add-comment" data-post-id="${id}">Post</button>
            </div>
            <div class="comments-list"></div>
        </div>
    `;

    if (!mediaHTML && mediaPreview.children.length > 0) {
        const media = mediaPreview.cloneNode(true);
        postDiv.querySelector('.post-content').appendChild(media);
        mediaHTML = postDiv.querySelector('.post-content').innerHTML;
    } else if (mediaHTML) {
        postDiv.querySelector('.post-content').innerHTML = mediaHTML;
    }

    postArea.prepend(postDiv);
    setupPostInteractions(id);

     if (!isFromStorage) {
        allPosts.push({ id, content: inputContent, media: postDiv.querySelector('.post-content').innerHTML });
        localStorage.setItem("allPosts", JSON.stringify(allPosts));

        // Reset fields
        postText.value = "";
        mediaPreview.innerHTML = "";
        imageInput.value = "";
        videoInput.value = "";
        audioInput.value = "";
    }
};

window.addEventListener("DOMContentLoaded", () => {
    if (allPosts.length > 0) {
        allPosts.forEach(post => {
            createPost(post.content, post.media, post.id, true);
        });
    }
});


function setupPostInteractions(postId) {
    // Delete Post
    document.querySelector(`.delete-post[data-post-id="${postId}"]`).addEventListener('click', function () {
        document.getElementById(postId).remove();
        allPosts = allPosts.filter(p => p.id !== postId);
        localStorage.setItem("allPosts", JSON.stringify(allPosts));
    });

    // Like Button
    const likeBtn = document.querySelector(`.like-btn[data-post-id="${postId}"]`);
    let isLiked = false;

    likeBtn.addEventListener('click', function () {
        isLiked = !isLiked;
        if (isLiked) {
            likeBtn.innerHTML = '<i class="fas fa-heart text-danger"></i> <span class="like-count">1 Like</span>';
        } else {
            likeBtn.innerHTML = '<i class="far fa-heart"></i> <span class="like-count">0 Likes</span>';
        }
    });

    // Toggle Comments
    const commentBtn = document.querySelector(`.comment-btn[data-post-id="${postId}"]`);
    const commentsSection = document.getElementById(`comments-${postId}`);

    commentBtn.addEventListener('click', function () {
        commentsSection.classList.toggle('d-none');
    });

    // Add Comment
    const addCommentBtn = document.querySelector(`.add-comment[data-post-id="${postId}"]`);
    const commentInput = document.querySelector(`.comment-input[data-post-id="${postId}"]`);
    const commentsList = document.querySelector(`#comments-${postId} .comments-list`);

    commentInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addComment(postId, commentInput, commentsList);
        }
    });

    addCommentBtn.addEventListener('click', function () {
        addComment(postId, commentInput, commentsList);
    });
};


function addComment(postId, commentInput, commentsList) {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment mb-2';
        commentDiv.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="./images/user female.jpg" class="user-avatar-sm me-2">
                <div class="comment-content bg-dark p-2 rounded">
                    <strong>You</strong>: ${commentText}
                </div>
            </div>`;
        commentsList.prepend(commentDiv);
        commentInput.value = '';
    }
}

// ==================== VOICE RECORDING ===================== //

let mediaRecorder;
let recordedChunks = [];

function startRecording() {
    recordingModal.show();
}

function toggleRecording() {
    if(!mediaRecorder || mediaRecorder.state === "inactive") {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                recordedChunks = [];
                mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.ondataavailable = event => {
                    if(event.data.size > 0) recordedChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(recordedChunks, {
                        type: "audio/webm"
                    });
                    const audioURL = URL.createObjectURL(audioBlob);

                    const preview = document.getElementById("audioPreview");
                    preview.src = audioURL;
                    preview.classList.remove("d-none");
                    document.getElementById("saveRecordBtn").classList.remove("d-none");
                };

                mediaRecorder.start();
                document.getElementById("recordingStatus").innerText = "Recording...";
                document.getElementById("startRecordBtn").classList.add("d-none");
                document.getElementById("stopRecordBtn").classList.remove("d-none");
            })
            .catch(err => {
                console.error("Error accessing microphone:", err);
                alert("Could not access microphone. Please check permissions.");
            });
    } else {
        mediaRecorder.stop();
        document.getElementById("recordingStatus").innerText = "Recording Stopped";
        document.getElementById("stopRecordBtn").classList.add("d-none");
    }
}

function saveRecording() {
    const audioPreview = document.getElementById("audioPreview");
    if(audioPreview.src) {
        const audio = document.createElement("audio");
        audio.src = audioPreview.src;
        audio.controls = true;
        audio.className = "mb-2 me-2";
        mediaPreview.appendChild(audio);
    }

    // Reset modal
    recordingModal.hide();
    document.getElementById("audioPreview").classList.add("d-none");
    document.getElementById("saveRecordBtn").classList.add("d-none");
    document.getElementById("startRecordBtn").classList.remove("d-none");
    document.getElementById("recordingStatus").innerText = "Ready to record";
    
    // Stop all tracks
    if(mediaRecorder && mediaRecorder.stream) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
}