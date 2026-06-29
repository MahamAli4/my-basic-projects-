const prompt = document.querySelector('#prompt');
const submit = document.querySelector('#submit');
const chatContainer = document.querySelector('.chat-container');
const imgBtn = document.querySelector('#image');
const image = document.querySelector('#image i');
const imageInput = document.querySelector('#image input')


const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAMN70mC7mrAEF9LZLo9c2R1p1Sm2Z6IY0";

let user = {
  message: null,
  file: {
    mime_type: null,
    data: null
  }
};

async function generateResponse(aiChatBox) {

  let text = aiChatBox.querySelector(".aiChatBox");


  let requestOption = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "contents": [{
        "parts": [
          { "text": user.message },
          ...(user.file.data ? [{
            "inline_data": {
              "mimeType": user.file.mime_type,
              "data": user.file.data
            }
          }] : [])
        ]
      }]
    })
  };

  try {
    let response = await fetch(Api_Url, requestOption);
    let data = await response.json();
    console.log(data);

    let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
    console.log(apiResponse);

    // //  Show AI response
    aiChatBox.querySelector(".ai-chat-area").innerHTML = apiResponse;

  } catch (error) {
    console.error(error);
    aiChatBox.querySelector(".ai-chat-area").innerHTML = "Something went wrong. Please try again.";
  }
  finally {
    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })
if (imgBtn.querySelector('img.preview')) {
    imgBtn.querySelector('img.preview').remove();
  }
  image.style.display = 'inline-block';
  imageInput.value = ''; // Clear file input
  user.file = { mime_type: null, data: null };
  }
};

function createChatBox(html, classes) {
  let div = document.createElement('div');
  div.innerHTML = html;
  div.classList.add(classes);
  return div;
}

function handleChatResponse(userMessage) {
  user.message = userMessage;

  let html = `
    <img src="./images/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.avif"
    alt="" id="userImage" width="8%">
    <div class="user-chat-area">${user.message}
   ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg">` : ""}
    </div>`;

  prompt.value = "";
  let userChatBox = createChatBox(html, "user-chat-box");
  chatContainer.appendChild(userChatBox);
  chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })

  setTimeout(() => {
    let html = `
      <img src="./images/view-graphic-3d-robot_23-2150849173.avif" alt="" id="aiImage" width="8%">
      <div class="ai-chat-area">
        <img src="./images/download.png" alt="" class="loading" width="20">
      </div>`;

    let aiChatBox = createChatBox(html, "ai-chat-box");
    chatContainer.appendChild(aiChatBox);
    generateResponse(aiChatBox);
  }, 600);
}

prompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleChatResponse(prompt.value);
    // console.log(prompt.value);
  }
});
submit.addEventListener("click", () => {
  handleChatResponse(prompt.value);
})


imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  let reader = new FileReader();
  reader.onload = (e) => {
    user.file = {
      mime_type: file.type,
      data: e.target.result.split(",")[1]
    };

    // Create preview element if not exists
    if (!imgBtn.querySelector('img.preview')) {
      const previewImg = document.createElement('img');
      previewImg.className = 'preview';
      previewImg.style.maxWidth = '30px';
      previewImg.style.maxHeight = '30px';
      imgBtn.appendChild(previewImg);
    }

    // Update preview
    const preview = imgBtn.querySelector('img.preview');
    preview.src = `data:${user.file.mime_type};base64,${user.file.data}`;
    image.style.display = 'none'; // Hide icon
  };
  reader.readAsDataURL(file);
});

imgBtn.addEventListener("click", () => {
  imgBtn.querySelector('input').click()
});
