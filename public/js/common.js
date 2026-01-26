document.addEventListener('DOMContentLoaded', function() {
    const postsGrid = document.getElementById('posts-grid');
    const postCountEl = document.getElementById('post-count');
    const paginationEl = document.getElementById('pagination');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const searchInput = document.querySelector('.search-input input');
    const tagLinks = document.querySelectorAll('.tag-link');
    const allTagLink = document.querySelector('.tag-link[href$="/"]');

    if (!postsGrid) {
        console.error('posts-grid not found');
        return;
    }

    let allPosts = Array.from(postsGrid.querySelectorAll('.post'));
    console.log('Total posts found:', allPosts.length);
    let currentSort = 'newest';
    let selectedTags = [];
    let currentSearch = '';
    let currentPage = 1;

    // URL에서 초기 페이지 번호 읽기
    function getPageFromURL() {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get('page'));
        return page > 0 ? page : 1;
    }

    // URL 업데이트 (히스토리에 추가)
    function updateURL(page) {
        const url = new URL(window.location);
        if (page === 1) {
            url.searchParams.delete('page');
        } else {
            url.searchParams.set('page', page);
        }
        history.pushState({ page: page }, '', url);
    }

    // Sort posts
    function sortPosts(posts, order) {
        return [...posts].sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            return order === 'newest' ? dateB - dateA : dateA - dateB;
        });
    }

    // Filter posts
    function filterPosts() {
        let filtered = allPosts;

        // Tag filter
        if (selectedTags.length > 0) {
            filtered = filtered.filter(post => {
                const postTags = post.dataset.tags.toLowerCase().split(',').map(t => t.trim());
                return selectedTags.some(tag => postTags.includes(tag.toLowerCase()));
            });
        }

        // Search filter
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            filtered = filtered.filter(post => {
                const title = post.dataset.title.toLowerCase();
                const excerpt = post.dataset.excerpt.toLowerCase();
                const tags = post.dataset.tags.toLowerCase();
                return title.includes(searchLower) ||
                    excerpt.includes(searchLower) ||
                    tags.includes(searchLower);
            });
        }

        return filtered;
    }

    // Update "전체" tag state
    function updateAllTagState() {
        if (allTagLink) {
            if (selectedTags.length === 0) {
                allTagLink.classList.add('on');
            } else {
                allTagLink.classList.remove('on');
            }
        }
    }

    // Render pagination
    function renderPagination(totalPosts, postsPerPage) {
        const totalPages = Math.ceil(totalPosts / postsPerPage);
        if (totalPages <= 1) {
            paginationEl.innerHTML = '';
            return;
        }

        let html = '';

        // 1. 화면 너비에 따라 한 번에 보여줄 숫자 개수 결정
        const blockSize = window.innerWidth < 768 ? 5 : 10;

        // 2. 현재 페이지가 속한 숫자 묶음의 시작/끝 계산
        const currentBlock = Math.ceil(currentPage / blockSize);
        const startPage = (currentBlock - 1) * blockSize + 1;
        const endPage = Math.min(startPage + blockSize - 1, totalPages);

        // [맨 처음 «] [이전 페이지 ‹]
        if (currentPage > 1) {
            html += `<a class="pagination-item" href="#" data-page="1" title="맨 처음">«</a>`;
            html += `<a class="pagination-item" href="#" data-page="${currentPage - 1}" title="이전 페이지">‹</a>`;
        } else {
            html += `<span class="pagination-item disabled">«</span>`;
            html += `<span class="pagination-item disabled">‹</span>`;
        }

        // 3. 숫자 페이지 번호들
        for (let i = startPage; i <= endPage; i++) {
            if (i === currentPage) {
                html += `<span class="pagination-item active">${i}</span>`;
            } else {
                html += `<a class="pagination-item" href="#" data-page="${i}">${i}</a>`;
            }
        }

        // [다음 페이지 ›] [맨 끝 »]
        if (currentPage < totalPages) {
            html += `<a class="pagination-item" href="#" data-page="${currentPage + 1}" title="다음 페이지">›</a>`;
            html += `<a class="pagination-item" href="#" data-page="${totalPages}" title="맨 끝">»</a>`;
        } else {
            html += `<span class="pagination-item disabled">›</span>`;
            html += `<span class="pagination-item disabled">»</span>`;
        }

        paginationEl.innerHTML = html;

        // 클릭 이벤트 바인딩
        paginationEl.querySelectorAll('a[data-page]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = parseInt(this.dataset.page);
                updateURL(currentPage); // URL 업데이트 추가
                renderPosts(false); // 스크롤 이동 제거
            });
        });
    }

    function getPostsPerPage() {
        const width = window.innerWidth;
        if (width < 768) { // 모바일
            return 5;
        } else if (width < 1024) { // 태블릿
            return 6;
        } else { // 데스크탑
            return 9;
        }
    }

    // Render posts
    function renderPosts(scrollToTop = false) {
        let filtered = filterPosts();
        filtered = sortPosts(filtered, currentSort);

        const totalPosts = filtered.length;
        const postsPerPage = getPostsPerPage();

        // Update count
        postCountEl.textContent = totalPosts;

        // Pagination
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const paginatedPosts = filtered.slice(startIndex, endIndex);

        // Clear and re-render
        postsGrid.innerHTML = '';

        if (paginatedPosts.length === 0) {
            postsGrid.innerHTML = '<p class="no-posts">검색 결과가 없습니다.</p>';
            paginationEl.innerHTML = '';
            return;
        }

        paginatedPosts.forEach(post => {
            postsGrid.appendChild(post.cloneNode(true));
        });

        renderPagination(totalPosts, postsPerPage);

        // 필요한 경우만 스크롤 이동
        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Reset to page 1 when filter changes
    function resetAndRender() {
        currentPage = 1;
        updateURL(1);
        renderPosts(true);
    }

    // Sort button click
    sortButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return;

            currentSort = this.dataset.sort;

            sortButtons.forEach(b => b.disabled = false);
            this.disabled = true;

            resetAndRender();
        });
    });

    // Tag click
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const tagText = this.textContent.trim();

            if (tagText === '전체') {
                selectedTags = [];
                tagLinks.forEach(l => l.classList.remove('on'));
                this.classList.add('on');
            } else {
                const tagIndex = selectedTags.indexOf(tagText);
                if (tagIndex > -1) {
                    selectedTags.splice(tagIndex, 1);
                    this.classList.remove('on');
                } else {
                    selectedTags.push(tagText);
                    this.classList.add('on');
                }
                updateAllTagState();
            }

            resetAndRender();
        });
    });

    // Search input
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearch = this.value.trim();
                resetAndRender();
            }, 300);
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                currentSearch = this.value.trim();
                resetAndRender();
            }
        });
    }

    // 브라우저 뒤로가기/앞으로가기 처리
    window.addEventListener('popstate', function(e) {
        currentPage = e.state?.page || getPageFromURL();
        renderPosts(false);
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderPosts(false);
        }, 200);
    });

    // Initial render
    currentPage = getPageFromURL(); // URL에서 페이지 번호 읽기
    history.replaceState({ page: currentPage }, '', window.location.href); // 초기 state 설정
    renderPosts(false);
});