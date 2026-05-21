const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

// Khi chúng nó bấm vào nút TẤT NHIÊN RỒI
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Ok cưng, sáng suốt quá. Ta cho ngươi lui 🥰";
    // Ẩn cả hai nút và dòng nhắc nhở đi cho đẹp màn hình
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    if(questionPrompt) questionPrompt.style.display = "none";
});

// Khi chúng nó di chuột định bấm vào nút Không mđ (Nút này sẽ tự chạy trốn)
noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
