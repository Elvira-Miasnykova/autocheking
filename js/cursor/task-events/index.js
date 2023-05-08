// Необхідно написати програму, яка буде зчитувати з клавіатури
// натискання клавіш та відтворювати унікальний звук для кожної
// клавіши (клавіши можуть бути будь-які, звуки можуть бути будь-які,
// тільки вкажіть у верстці – які кнопки натискати).

// function onSoundKeyDown() {
//     onKeyQDown();
//     onKeyWDown();
//     onKeyEDown();
// };

// onSoundKeyDown();

// function onKeyQDown() {
//     const audio1Ref = document.querySelector("#audio1");
//     document.addEventListener('keydown', function (e) {
//     if (e.code === 'KeyQ') {
//         audio1Ref.play();
//     }
//     });
    
// };

// function onKeyWDown() {
//     const audio2Ref = document.querySelector("#audio2");
//     document.addEventListener('keydown', function (e) {
//     if (e.code === 'KeyW') {
//         audio2Ref.play();
//     }
//     });
    
// };

// function onKeyEDown() {
//     const audio3Ref = document.querySelector("#audio3");
//     document.addEventListener('keydown', function (e) {
//     if (e.code === 'KeyE') {
//         audio3Ref.play();
//     }
//     });
    
// };

function stopAllAudio() {
    const allAudio = document.querySelectorAll("audio");
    allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    })
};

function onClickSoundInvoketion(key) {
    const audioRef = document.querySelector(`audio[id="${key}"]`);
    const buttonRef = document.querySelector(`.key[id="${key}"]`);
     if (!audioRef) return;

    stopAllAudio();

    //audioRef.currentTime = 0;
    audioRef.play();
    buttonRef.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", () => onClickSoundInvoketion(key.id));
  key.addEventListener("transitionend", function (event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  });
});