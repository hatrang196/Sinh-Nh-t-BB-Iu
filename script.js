// script.js


document.addEventListener('DOMContentLoaded', () => {
    const countdownText = document.getElementById('countdown-text');
    const countdown = document.getElementById('countdown');
    const wishText = document.getElementById('wish-text');
    const cakeText = document.getElementById('cake-text');
    const cakeFireContainer = document.getElementById('cake-fire-container');
    const fireImg = document.getElementById('fire-img');
    const videoContainer = document.getElementById('video-container');
    const birthdayVideo = document.getElementById('birthday-video');
    
    let timeLeft = 10;

    const countdownInterval = setInterval(() => {
        countdown.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdownInterval);

		//ẩn 
		countdown.classList.add('hidden');
		countdownText.classList.add('hidden');
		wishText.classList.add('hidden');

		//bánh + lửa sau 1 s
            setTimeout(() => {
                document.getElementById('countdown-container').classList.add('hidden');
                cakeFireContainer.classList.remove('hidden');

		//ẩn lửa
                setTimeout(() => {
                    fireImg.style.display = 'none';
                }, 4000);

		//hiện video
                setTimeout(() => {
                    cakeFireContainer.classList.add('hidden');
                    videoContainer.classList.remove('hidden');
                }, 6000); // Để đồng bộ với thời gian fire biến mất
            }, 2000);
        }
        timeLeft--;
    }, 1000);

    // Thiết lập video
    birthdayVideo.src = 'birthday.mp4';
});
