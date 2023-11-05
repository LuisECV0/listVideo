document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const videoItems = document.querySelectorAll('.video-item');
    const searchInput = document.getElementById('search');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterBtns.forEach((button) => {
                button.classList.remove('active');
            });
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            videoItems.forEach((item) => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    searchInput.addEventListener('input', (event) => {
        const searchText = event.target.value.toLowerCase();
        videoItems.forEach((item) => {
            const title = item.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const videos = document.querySelectorAll('video');

videos.forEach((video) => {
    const playPauseBtn = video.parentElement.querySelector('.play-pause-button');
    const progress = video.parentElement.querySelector('.video-progress');

    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = '❚❚';
        } else {
            video.pause();
            playPauseBtn.textContent = '▶';
        }
    });

    video.addEventListener('timeupdate', () => {
        const progressValue = (video.currentTime / video.duration) * 100;
        progress.value = progressValue;
    });

    progress.addEventListener('input', () => {
        const seekTime = (progress.value * video.duration) / 100;
        video.currentTime = seekTime;
    });
});

