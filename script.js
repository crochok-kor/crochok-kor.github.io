document.addEventListener('DOMContentLoaded', () => {

    // Gallery Data (Real Assets)
    const galleryData = [
        {
            id: 1,
            title: "풍경",
            author: "안재섭 교수님",
            desc: "동국대학교 지리교육과 안재섭 교수님의 찬조 작품입니다.",
            src: "assets/교수님 및 동문 찬조 사진/안재섭 교수님.JPG"
        },
        {
            id: 2,
            title: "풍경",
            author: "이승철 교수님",
            desc: "동국대학교 지리교육과 이승철 교수님의 찬조 작품입니다.",
            src: "assets/교수님 및 동문 찬조 사진/이승철 교수님.jpg"
        },
        {
            id: 3,
            title: "풍경",
            author: "안유순 교수님",
            desc: "동국대학교 지리교육과 안유순 교수님의 찬조 작품입니다.",
            src: "assets/교수님 및 동문 찬조 사진/안유순 교수님 (2).jpg"
        },
        {
            id: 4,
            title: "풍경",
            author: "82 최원석 선배님",
            desc: "82학번 최원석 선배님의 찬조 작품입니다.",
            src: "assets/교수님 및 동문 찬조 사진/82 최원석 선배님.jpg"
        },
        {
            id: 5,
            title: "풍경",
            author: "85 김원섭 선배님",
            desc: "85학번 김원섭 선배님의 찬조 작품입니다.",
            src: "assets/교수님 및 동문 찬조 사진/85 김원섭 선배님.jpg"
        },
        {
            id: 6,
            title: "풍경",
            author: "02 김현모 선배님",
            desc: "02학번 김현모 선배님의 찬조 작품입니다.",
            src: "assets/교수님 및 동문 찬조 사진/02 김현모 선배님.jpg"
        }
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDesc = document.getElementById('modalDesc');
    const closeModal = document.querySelector('.close-modal');

    // Populate Gallery
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        // Create image element
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.className = 'gallery-img';

        // Add error handling for images
        img.onerror = function () {
            this.style.display = 'none';
            this.parentElement.style.backgroundColor = '#ccc'; // Fallback color
            console.error(`Failed to load image: ${item.src}`);
        };

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-author">${item.author}</p>
        `;

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        // Click Event for Modal
        galleryItem.addEventListener('click', () => {
            modalImage.src = item.src;
            modalImage.style.backgroundColor = 'transparent'; // Reset fallback
            modalTitle.textContent = item.title;
            modalAuthor.textContent = `Artist: ${item.author}`;
            modalDesc.textContent = item.desc;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        galleryGrid.appendChild(galleryItem);
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
