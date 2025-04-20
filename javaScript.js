
        // কার্ড অ্যানিমেশন ট্রিগার
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.tournament-card');
            
            // স্ক্রোল ইভেন্ট লিসেনার
            window.addEventListener('scroll', function() {
                cards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(cardPosition < screenPosition) {
                        card.style.animation = `cardAppear 0.5s ease-out forwards`;
                    }
                });
            });

            // প্রি-লোড কার্ডগুলিকে দেখান
            setTimeout(() => {
                cards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(cardPosition < screenPosition) {
                        card.style.animation = `cardAppear 0.5s ease-out forwards`;
                    }
                });
            }, 500);

            // CTA বাটন ক্লিক ইভেন্ট
            const ctaButtons = document.querySelectorAll('.cta-button, .join-button');
            ctaButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // এখানে আপনি রেজিস্ট্রেশন লজিক যোগ করতে পারেন
                    alert('টুর্নামেন্টে যোগদানের জন্য ধন্যবাদ! শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।');
                });
            });

            // ফ্লোটিং এলিমেন্টস ক্রিয়েট
            function createFloatingElements() {
                const heroSection = document.querySelector('.hero');
                for(let i = 0; i < 8; i++) {
                    const floating = document.createElement('div');
                    floating.classList.add('floating');
                    
                    // র্যান্ডম পজিশন এবং সাইজ
                    const size = Math.random() * 50 + 20;
                    const left = Math.random() * 100;
                    const top = Math.random() * 100;
                    const delay = Math.random() * 2;
                    const duration = Math.random() * 3 + 2;
                    
                    floating.style.width = `${size}px`;
                    floating.style.height = `${size}px`;
                    floating.style.left = `${left}%`;
                    floating.style.top = `${top}%`;
                    floating.style.animationDelay = `${delay}s`;
                    floating.style.animationDuration = `${duration}s`;
                    
                    // র্যান্ডম কালার
                    const colors = ['#00dbde', '#fc00ff', '#4e54c8', '#f1c40f'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    floating.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
                    
                    heroSection.appendChild(floating);
                }
            }

            createFloatingElements();
        });