// 스크롤 시 네비게이션 바 스타일 변경
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.padding = '15px 0';
        nav.style.boxShadow = 'none';
    }
});

// 모바일 메뉴 토글
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// 모바일 메뉴 항목 클릭 시 메뉴 닫기
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 요소 애니메이션
const revealElements = () => {
    const revealTextElements = document.querySelectorAll('.reveal-text');
    const revealItemElements = document.querySelectorAll('.reveal-item');
    
    const elementInView = (el, offset = 150) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight - offset;
    };
    
    revealTextElements.forEach(element => {
        if (elementInView(element)) {
            element.classList.add('visible');
        }
    });
    
    revealItemElements.forEach(element => {
        if (elementInView(element)) {
            element.classList.add('visible');
        }
    });
};

// 페이지 로드 시 애니메이션 적용
window.addEventListener('DOMContentLoaded', () => {
    revealElements();
});

// 스크롤 시 애니메이션 적용
window.addEventListener('scroll', () => {
    revealElements();
});


// 프로젝트 아이템 클릭 이벤트 (상세 내용 표시)
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        // 프로젝트 상세 페이지로 이동하거나 모달 표시 등의 기능을 추가할 수 있습니다.
        // 해당 기능이 필요하면 구현해주세요.
    });
});

// 스크롤 애니메이션 개선 (지연 로딩)
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-text, .reveal-item');
    elements.forEach(element => {
        observer.observe(element);
    });
};

// IntersectionObserver API가 지원되는 경우에만 실행
if ('IntersectionObserver' in window) {
    observeElements();
} else {
    // 폴백: 스크롤 이벤트 사용
    window.addEventListener('scroll', revealElements);
}