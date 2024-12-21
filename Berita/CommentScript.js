        // Menangani form submission dengan JavaScript
        document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form secara default

            // Mendapatkan nilai dari input form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;

            // Validasi sederhana
            if (name === '' || email === '' || comment === '') {
                document.getElementById('error-message').style.display = 'block';
                return;
            } else {
                document.getElementById('error-message').style.display = 'none';
            }

            // Membuat elemen komentar baru
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');

            // Menambahkan konten ke dalam elemen komentar
            commentItem.innerHTML = `
                <div class="author">${name}</div>
                <div class="email">${email}</div>
                <div class="content">${comment}</div>
            `;

            // Menambahkan komentar di bagian atas daftar komentar
            const commentsList = document.getElementById('commentsList');
            commentsList.insertBefore(commentItem, commentsList.firstChild);

            // Mengosongkan form setelah mengirim komentar
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('comment').value = '';
        });
