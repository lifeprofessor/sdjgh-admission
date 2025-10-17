// 서대전여자고등학교 홍보 페이지 - JavaScript


// FAQ 아코디언
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.faq-arrow');
        
        question.addEventListener('click', () => {
            const isHidden = answer.classList.contains('hidden');
            
            // 모든 FAQ 닫기
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-answer').classList.add('hidden');
                otherItem.querySelector('.faq-arrow').textContent = '+';
                otherItem.querySelector('.faq-arrow').classList.remove('rotate-45');
            });

            // 클릭한 FAQ 열기/닫기
            if (isHidden) {
                answer.classList.remove('hidden');
                arrow.innerHTML = '&times;';
                arrow.classList.add('rotate-45');
            }
        });
    });
}

// 모바일 메뉴
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 메뉴 항목 클릭 시 메뉴 닫기
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 스크롤 애니메이션 (Intersection Observer)
function initScrollAnimation() {
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}

// 네비게이션 활성화 상태
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.href.includes(current) && current !== '') {
                link.classList.add('active-nav');
            }
        });
    });
}

// 헤더 스크롤 효과
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 이미지 로딩 처리
function initImageLoading() {
    const foodImages = document.querySelectorAll('.food-item img');
    
    foodImages.forEach(img => {
        // 이미지 로딩 시작 시 로딩 애니메이션 추가
        img.addEventListener('loadstart', () => {
            img.style.opacity = '0.7';
        });
        
        // 이미지 로딩 완료 시
        img.addEventListener('load', () => {
            img.style.opacity = '1';
            img.style.background = 'none';
            img.style.animation = 'none';
        });
        
        // 이미지 로딩 실패 시
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const fallback = img.nextElementSibling;
            if (fallback) {
                fallback.style.display = 'flex';
            }
        });
    });
}

// 동아리 탭 필터링
function initClubTabs() {
    const clubTabs = document.querySelectorAll('.club-tab');
    const clubCards = document.querySelectorAll('.club-card');
    
    // 초기 로드 시 이과/과학 카테고리만 표시
    function showCategory(category) {
        clubCards.forEach(card => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // 페이지 로드 시 이과/과학만 표시
    showCategory('science');
    
    clubTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // 탭 스타일 업데이트
            clubTabs.forEach(t => {
                t.classList.remove('active', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'shadow-lg');
                t.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'shadow-md');
            });
            
            tab.classList.add('active', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'shadow-lg');
            tab.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'shadow-md');
            
            // 카드 필터링
            showCategory(category);
        });
    });
}

// 이미지 모달 기능
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.classList.remove('hidden');
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    
    // 스크롤 복원
    document.body.style.overflow = 'auto';
}

// 비디오 모달 기능
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // YouTube 영상 URL 설정
    videoFrame.src = 'https://www.youtube.com/embed/7ISB3-ouMwE?si=a1knpy61DditQ1b8&autoplay=1';
    modal.classList.remove('hidden');
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // 영상 정지를 위해 src 제거
    videoFrame.src = '';
    modal.classList.add('hidden');
    
    // 스크롤 복원
    document.body.style.overflow = 'auto';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageModal();
        closeVideoModal();
    }
});

// 모달 배경 클릭 시 닫기
document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
        closeImageModal();
    }
});

document.getElementById('videoModal').addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
        closeVideoModal();
    }
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 모든 기능 초기화
    initFAQ();
    initMobileMenu();
    initScrollAnimation();
    initNavigation();
    initHeaderScroll();
    initImageLoading();
    initClubTabs();

    // Hero 섹션 즉시 표시
    const heroElements = document.querySelector('.hero-bg').querySelectorAll('.fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});

// 부드러운 스크롤 (IE 대응)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

