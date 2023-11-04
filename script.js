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
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
