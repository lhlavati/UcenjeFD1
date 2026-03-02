document.addEventListener('DOMContentLoaded', () => {
    const students = [
        { name: 'Tomislav Jakopec', video: 'video_20260302182840.webm' },
        { name: 'Luka Hlavati', video: 'video_20260302182925.webm' },
        { name: 'Roberto Perković', video: 'video_20260302183005.webm' },
        { name: 'Maja Šnalcer', video: 'video_20260302183017.webm' },
        { name: 'Tankred Kralj', video: 'video_20260302183102.webm' },
        { name: 'Rudolf Gergelj', video: 'video_20260302183401.webm' },
        { name: 'Hrvoje Mitrić', video: 'video_20260302190249.webm' }
    ];

    const studentListContainer = document.getElementById('student-list');
    const videoModal = document.getElementById('video-modal');
    const galleryModal = document.getElementById('gallery-modal');
    const modalVideo = document.getElementById('modal-video');
    const videoSource = modalVideo.getElementsByTagName('source')[0];
    const closeModalBtn = document.querySelector('.close-btn');
    const closeGalleryBtn = document.querySelector('.close-gallery-btn');
    const showAllBtn = document.getElementById('show-all-btn');
    const videoGallery = document.getElementById('video-gallery');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };

    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';

        const initialsCircle = document.createElement('div');
        initialsCircle.className = 'initials-circle';
        initialsCircle.textContent = getInitials(student.name);
        initialsCircle.style.backgroundColor = getRandomColor();
        
        const name = document.createElement('h3');
        name.textContent = student.name;

        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = 'Prikaži video';
        button.addEventListener('click', () => {
            videoSource.setAttribute('src', `video/${student.video}`);
            modalVideo.load();
            videoModal.style.display = 'block';
            modalVideo.play();
        });

        studentCard.appendChild(initialsCircle);
        studentCard.appendChild(name);
        studentCard.appendChild(button);
        studentListContainer.appendChild(studentCard);
    });

    closeModalBtn.addEventListener('click', () => {
        videoModal.style.display = 'none';
        modalVideo.pause();
    });

    closeGalleryBtn.addEventListener('click', () => {
        galleryModal.style.display = 'none';
        // Pause all videos in gallery
        videoGallery.querySelectorAll('video').forEach(v => v.pause());
    });

    showAllBtn.addEventListener('click', () => {
        videoGallery.innerHTML = ''; // Clear previous items
        students.forEach(student => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const video = document.createElement('video');
            video.controls = true;
            const source = document.createElement('source');
            source.src = `video/${student.video}`;
            source.type = 'video/webm';
            video.appendChild(source);
            
            const name = document.createElement('h4');
            name.textContent = student.name;

            galleryItem.appendChild(video);
            galleryItem.appendChild(name);
            videoGallery.appendChild(galleryItem);
        });
        galleryModal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target == videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
        if (event.target == galleryModal) {
            galleryModal.style.display = 'none';
            videoGallery.querySelectorAll('video').forEach(v => v.pause());
        }
    });
});
