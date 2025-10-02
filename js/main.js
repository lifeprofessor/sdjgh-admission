// 서대전여자고등학교 홍보 페이지 - JavaScript

// 대학 합격 현황 데이터
const chartData = {
    all: {
        labels: ['2023년', '2024년', '2025년'],
        datasets: [{
            label: '수도권 주요대학',
            data: [85, 92, 105],
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 1
        }, {
            label: '의·치·약·한·수',
            data: [15, 18, 22],
            backgroundColor: 'rgba(245, 158, 11, 0.7)',
            borderColor: 'rgba(245, 158, 11, 1)',
            borderWidth: 1
        }, {
            label: '주요 국립대학',
            data: [60, 65, 70],
            backgroundColor: 'rgba(59, 130, 246, 0.7)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1
        }]
    },
    seoul: {
        labels: ['2023년', '2024년', '2025년'],
        datasets: [{
            label: '수도권 주요대학',
            data: [85, 92, 105],
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 1
        }]
    },
    medical: {
        labels: ['2023년', '2024년', '2025년'],
        datasets: [{
            label: '의·치·약·한·수',
            data: [15, 18, 22],
            backgroundColor: 'rgba(245, 158, 11, 0.7)',
            borderColor: 'rgba(245, 158, 11, 1)',
            borderWidth: 1
        }]
    },
    national: {
        labels: ['2023년', '2024년', '2025년'],
        datasets: [{
            label: '주요 국립대학',
            data: [60, 65, 70],
            backgroundColor: 'rgba(59, 130, 246, 0.7)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1
        }]
    }
};

// Chart.js 초기화
let admissionsChart;

function initChart() {
    const ctx = document.getElementById('admissionsChart').getContext('2d');
    admissionsChart = new Chart(ctx, {
        type: 'bar',
        data: chartData.all,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '최근 3년간 주요 대학 합격자 현황 (단위: 명)',
                    font: {
                        size: 16,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            family: "'Noto Sans KR', sans-serif"
                        },
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '명';
                            }
                            return label;
                        }
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        family: "'Noto Sans KR', sans-serif"
                    },
                    bodyFont: {
                        family: "'Noto Sans KR', sans-serif"
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '합격자 수 (명)',
                        font: {
                            family: "'Noto Sans KR', sans-serif",
                            size: 12
                        }
                    },
                    ticks: {
                        font: {
                            family: "'Noto Sans KR', sans-serif"
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '연도',
                        font: {
                            family: "'Noto Sans KR', sans-serif",
                            size: 12
                        }
                    },
                    ticks: {
                        font: {
                            family: "'Noto Sans KR', sans-serif"
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// 필터 버튼 이벤트
function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            
            // 차트 데이터 업데이트
            admissionsChart.data = chartData[target];
            admissionsChart.update();

            // 버튼 스타일 업데이트
            filterBtns.forEach(b => {
                b.classList.remove('bg-red-500', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            btn.classList.add('bg-red-500', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-700');
        });
    });
}

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

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 모든 기능 초기화
    initChart();
    initFilterButtons();
    initFAQ();
    initMobileMenu();
    initScrollAnimation();
    initNavigation();
    initHeaderScroll();

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

