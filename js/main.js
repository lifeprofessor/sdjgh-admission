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
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.classList.remove('hidden');
    
    // BGM 버튼과 가이드 숨기기
    if (bgmButton) {
        bgmButton.classList.add('modal-open');
    }
    if (bgmGuide) {
        bgmGuide.classList.add('modal-open');
    }
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    
    modal.classList.add('hidden');
    
    // BGM 버튼과 가이드 다시 보이기
    if (bgmButton) {
        bgmButton.classList.remove('modal-open');
    }
    if (bgmGuide) {
        bgmGuide.classList.remove('modal-open');
    }
    
    // 스크롤 복원
    document.body.style.overflow = 'auto';
}

// 비디오 모달 기능
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    
    // YouTube 영상 URL 설정
    videoFrame.src = 'https://www.youtube.com/embed/7ISB3-ouMwE?si=a1knpy61DditQ1b8&autoplay=1';
    modal.classList.remove('hidden');
    
    // BGM 버튼과 가이드 숨기기
    if (bgmButton) {
        bgmButton.classList.add('modal-open');
    }
    if (bgmGuide) {
        bgmGuide.classList.add('modal-open');
    }
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    const videoFrame = document.getElementById('videoFrame');
    
    // 영상 정지를 위해 src 제거
    videoFrame.src = '';
    modal.classList.add('hidden');
    
    // BGM 버튼과 가이드 다시 보이기
    if (bgmButton) {
        bgmButton.classList.remove('modal-open');
    }
    if (bgmGuide) {
        bgmGuide.classList.remove('modal-open');
    }
    
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

// BGM 제어 기능
function initBGM() {
    const bgm = document.getElementById('bgm');
    const toggleButton = document.getElementById('bgm-toggle');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const volumeControl = document.getElementById('volume-control');
    const volumeSlider = document.getElementById('volume-slider');
    
    let isPlaying = false;
    let showVolumeControl = false;
    
    // 초기 볼륨 설정 (0.0 ~ 1.0)
    bgm.volume = 0.3;
    
    // 로컬 스토리지에서 사용자 설정 불러오기
    const savedVolume = localStorage.getItem('bgm-volume');
    const savedMuted = localStorage.getItem('bgm-muted') === 'true';
    
    if (savedVolume) {
        bgm.volume = parseFloat(savedVolume);
        volumeSlider.value = bgm.volume * 100;
    }
    
    // 음소거 상태였다면 볼륨을 0으로 설정
    if (savedMuted) {
        bgm.volume = 0;
        volumeSlider.value = 0;
    }
    
    // 토글 버튼 클릭 이벤트
    toggleButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseBGM();
        } else {
            playBGM();
        }
    });
    
    // 토글 버튼 우클릭으로 볼륨 컨트롤 표시/숨김
    toggleButton.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showVolumeControl = !showVolumeControl;
        if (showVolumeControl) {
            volumeControl.classList.remove('hidden');
        } else {
            volumeControl.classList.add('hidden');
        }
    });
    
    // 모바일에서 길게 누르기로 볼륨 컨트롤 표시
    let longPressTimer;
    toggleButton.addEventListener('touchstart', (e) => {
        longPressTimer = setTimeout(() => {
            e.preventDefault();
            showVolumeControl = !showVolumeControl;
            if (showVolumeControl) {
                volumeControl.classList.remove('hidden');
            } else {
                volumeControl.classList.add('hidden');
            }
        }, 500); // 0.5초 길게 누르기
    }, { passive: false });
    
    toggleButton.addEventListener('touchend', () => {
        clearTimeout(longPressTimer);
    });
    
    toggleButton.addEventListener('touchmove', () => {
        clearTimeout(longPressTimer);
    });
    
    // 볼륨 슬라이더 이벤트
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        bgm.volume = volume;
        localStorage.setItem('bgm-volume', volume.toString());
        localStorage.setItem('bgm-muted', volume === 0 ? 'true' : 'false');
    });
    
    // BGM 재생 함수
    function playBGM() {
        // 볼륨이 0이면 재생하지 않음
        if (bgm.volume === 0) {
            showBGMNotification('볼륨이 0입니다. 볼륨을 조절해주세요.');
            return;
        }
        
        // 모바일에서 사용자 제스처 없이 재생 시도 방지
        if (!userInteracted) {
            showBGMNotification('페이지와 상호작용한 후 음악을 재생할 수 있습니다.');
            return;
        }
        
        const playPromise = bgm.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updateButtonState();
                console.log('BGM 재생 시작');
            }).catch(error => {
                console.log('오디오 재생 실패:', error);
                isPlaying = false;
                updateButtonState();
                
                // 에러 타입에 따른 다른 메시지
                if (error.name === 'NotAllowedError') {
                    showBGMNotification('브라우저에서 자동 재생을 차단했습니다. 다시 시도해주세요.');
                } else if (error.name === 'NotSupportedError') {
                    showBGMNotification('이 브라우저에서는 해당 오디오 형식을 지원하지 않습니다.');
                } else {
                    showBGMNotification('음악 재생에 실패했습니다. 다시 시도해주세요.');
                }
            });
        }
    }
    
    // BGM 일시정지 함수
    function pauseBGM() {
        bgm.pause();
        isPlaying = false;
        updateButtonState();
    }
    
    // 버튼 상태 업데이트
    function updateButtonState() {
        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            toggleButton.title = '배경음악 정지 (우클릭: 볼륨 조절)';
            toggleButton.classList.add('animate-pulse');
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            toggleButton.title = '배경음악 재생 (우클릭: 볼륨 조절)';
            toggleButton.classList.remove('animate-pulse');
        }
    }
    
    // BGM 알림 표시
    function showBGMNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translate(-50%, -20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // 오디오 이벤트 리스너
    bgm.addEventListener('play', () => {
        isPlaying = true;
        updateButtonState();
    });
    
    bgm.addEventListener('pause', () => {
        isPlaying = false;
        updateButtonState();
    });
    
    bgm.addEventListener('ended', () => {
        isPlaying = false;
        updateButtonState();
    });
    
    // 페이지 가시성 변경 시 처리 (모바일 최적화)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isPlaying) {
            bgm.pause();
        } else if (!document.hidden && isPlaying && userInteracted) {
            // 모바일에서 백그라운드에서 돌아올 때 재생 재시도
            setTimeout(() => {
                if (isPlaying && !bgm.paused) return; // 이미 재생 중이면 스킵
                bgm.play().catch(() => {
                    // 재생 실패 시 상태 업데이트
                    isPlaying = false;
                    updateButtonState();
                });
            }, 100);
        }
    });
    
    // 모바일 터치 이벤트 최적화
    let touchStarted = false;
    document.addEventListener('touchstart', () => {
        touchStarted = true;
    }, { passive: true });
    
    document.addEventListener('touchend', () => {
        if (touchStarted) {
            touchStarted = false;
            // 터치 종료 후 오디오 컨텍스트 활성화
            if (bgm.paused && isPlaying && userInteracted) {
                bgm.play().catch(() => {
                    console.log('터치 후 재생 실패');
                });
            }
        }
    }, { passive: true });
    
    // iOS Safari 특별 처리
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    
    if (isIOS || isSafari) {
        // iOS에서는 사용자 제스처 후에만 오디오 재생 가능
        bgm.addEventListener('loadstart', () => {
            bgm.load(); // iOS에서 오디오 파일 미리 로드
        });
        
        // iOS에서 오디오 컨텍스트 재개
        const resumeAudioContext = () => {
            if (bgm.paused && isPlaying && userInteracted) {
                bgm.play().catch(error => {
                    console.log('iOS 오디오 재생 실패:', error);
                });
            }
        };
        
        document.addEventListener('touchstart', resumeAudioContext, { once: true, passive: true });
        document.addEventListener('click', resumeAudioContext, { once: true });
    }
    
    // 볼륨 컨트롤 외부 클릭 시 숨김
    document.addEventListener('click', (e) => {
        if (!volumeControl.contains(e.target) && e.target !== toggleButton) {
            volumeControl.classList.add('hidden');
            showVolumeControl = false;
        }
    });
    
    // 초기 버튼 상태 설정
    updateButtonState();
    
    // 모바일 BGM 안내 메시지 자동 숨김 (15초 후)
    const mobileGuide = document.getElementById('mobile-bgm-guide');
    if (mobileGuide) {
        setTimeout(() => {
            mobileGuide.style.opacity = '0';
            mobileGuide.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                mobileGuide.style.display = 'none';
            }, 500);
        }, 15000);
        
        // BGM 재생 시작하면 즉시 숨김
        bgm.addEventListener('play', () => {
            if (mobileGuide && mobileGuide.style.display !== 'none') {
                mobileGuide.style.opacity = '0';
                mobileGuide.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    mobileGuide.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // 사용자 상호작용 감지를 위한 이벤트 리스너
    let userInteracted = false;
    const enableAudioContext = () => {
        if (!userInteracted) {
            userInteracted = true;
            // 사용자가 상호작용한 후 BGM 시작 가능 상태로 설정
            if (!savedMuted && bgm.volume > 0) {
                // showBGMStartNotification();
            }
            // 이벤트 리스너 제거 (한 번만 실행)
            document.removeEventListener('click', enableAudioContext);
            document.removeEventListener('touchstart', enableAudioContext);
            document.removeEventListener('keydown', enableAudioContext);
        }
    };
    
    // 사용자 상호작용 감지
    document.addEventListener('click', enableAudioContext);
    document.addEventListener('touchstart', enableAudioContext);
    document.addEventListener('keydown', enableAudioContext);
    
    // BGM 시작 안내 알림 표시
    function showBGMStartNotification() {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 max-w-sm';
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM16 8a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                </svg>
                <div class="flex-1">
                    <p class="text-sm font-medium">🎵 BGM을 시작하시겠어요?</p>
                    <p class="text-xs opacity-90">우측 상단 버튼을 클릭하세요</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" class="text-white/80 hover:text-white">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        `;
        document.body.appendChild(notification);
        
        // 10초 후 자동으로 사라짐
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentElement) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 10000);
    }
}

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
    initBGM(); // BGM 초기화 추가

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

// AI Video Modal Functions
const aiVideoUrls = {
    'ai-expert': 'https://www.youtube.com/embed/JOCs_yg1wlE?si=ZuLOJidd2-9KDTrM&autoplay=1', // AI 전문가 영상
    'robot-experience': 'https://www.youtube.com/embed/hXpHIEvucs8?si=Q6M-wEhQCiAVDBL9&autoplay=1', // 로봇 체험 영상
    'mechdog-robot': 'https://www.youtube.com/embed/c7XJqjFmjto?si=fOjm9YN5b5aUUyx2&autoplay=1', // 메카독 로봇 영상
    '3d-printer': 'https://www.youtube.com/embed/eBDeHRf8kVY?autoplay=1' // 3D 프린터 영상
};

function openAIVideoModal(videoType) {
    const modal = document.getElementById('aiVideoModal');
    const iframe = document.getElementById('aiVideoFrame');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    
    if (aiVideoUrls[videoType]) {
        iframe.src = aiVideoUrls[videoType];
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // BGM 버튼과 가이드 숨기기
        if (bgmButton) {
            bgmButton.classList.add('modal-open');
        }
        if (bgmGuide) {
            bgmGuide.classList.add('modal-open');
        }
    } else {
        alert('영상 URL이 설정되지 않았습니다. 관리자에게 문의해주세요.');
    }
}

function closeAIVideoModal() {
    const modal = document.getElementById('aiVideoModal');
    const iframe = document.getElementById('aiVideoFrame');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    
    modal.classList.add('hidden');
    iframe.src = '';
    document.body.style.overflow = 'auto';
    
    // BGM 버튼과 가이드 다시 보이기
    if (bgmButton) {
        bgmButton.classList.remove('modal-open');
    }
    if (bgmGuide) {
        bgmGuide.classList.remove('modal-open');
    }
}

// ESC 키로 AI 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
        closeVideoModal();
        closeAIVideoModal();
    }
});

// AI 모달 배경 클릭으로 닫기
document.getElementById('aiVideoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeAIVideoModal();
    }
});

// 캠페인 갤러리 모달 기능
function openCampaign() {
    const modal = document.getElementById('campaignModal');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    const header = document.querySelector('header');
    
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // BGM 버튼과 가이드, 헤더 숨기기
    if (bgmButton) {
        bgmButton.classList.add('modal-open');
        console.log('BGM 버튼 숨김');
    }
    if (bgmGuide) {
        bgmGuide.classList.add('modal-open');
        console.log('BGM 가이드 숨김');
    }
    if (header) {
        header.classList.add('modal-open');
        console.log('헤더 숨김');
    }
    
    // 모바일에서 스크롤 최적화
    const container = modal.querySelector('.overflow-y-auto');
    if (container) {
        container.style.webkitOverflowScrolling = 'touch';
    }
}

function closeCampaign() {
    const modal = document.getElementById('campaignModal');
    const bgmButton = document.getElementById('bgm-toggle');
    const bgmGuide = document.getElementById('mobile-bgm-guide');
    const header = document.querySelector('header');
    
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // BGM 버튼과 가이드, 헤더 다시 보이기
    if (bgmButton) {
        bgmButton.classList.remove('modal-open');
        console.log('BGM 버튼 다시 보임');
    }
    if (bgmGuide) {
        bgmGuide.classList.remove('modal-open');
        console.log('BGM 가이드 다시 보임');
    }
    if (header) {
        header.classList.remove('modal-open');
        console.log('헤더 다시 보임');
    }
}

// ESC 키로 캠페인 갤러리 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
        closeVideoModal();
        closeAIVideoModal();
        closeCampaign();
    }
});

// 캠페인 갤러리 모달 배경 클릭으로 닫기
document.addEventListener('DOMContentLoaded', function() {
    const campaignModal = document.getElementById('campaignModal');
    if (campaignModal) {
        campaignModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCampaign();
            }
        });
    }
});

