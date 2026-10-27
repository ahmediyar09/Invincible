"use strict";

/* =========================================
   INVINCIBLE — CONFIGURATION
========================================= */

const CONFIG = {
    brand: "Invincible",

    // Автоматическая смена главного баннера
    heroAutoplay: true,
    heroInterval: 7000,

    // Количество карточек в основном каталоге
    initialMoviesToShow: 12,

    // Ключи локального хранилища
    favoritesKey: "invincible_favorites_v1"
};


/* =========================================
   MOVIE DATABASE
========================================= */

/*
    Чтобы добавить фильм, скопируй один объект и измени его поля.

    poster  — URL постера.
    backdrop — URL фонового изображения.
    video   — прямая ссылка на видеофайл MP4/WebM.
    trailer — ссылка на трейлер на YouTube.
    type    — movie или series.
    genres  — массив жанров.
    category — sci-fi, action, drama, animation и т. д.

    ВАЖНО:
    Для воспроизведения в <video> нужна прямая ссылка
    на видеофайл, а не ссылка на страницу YouTube.
*/

const movies = [
    {
        id: 1,
        title: "Дюна: Часть вторая",
        originalTitle: "Dune: Part Two",
        year: 2024,
        rating: 8.5,
        type: "movie",
        genres: ["Фантастика", "Приключения"],
        category: ["sci-fi"],
        duration: "166 мин.",
        description:
            "Пол Атрейдес объединяется с Чани и фременами, вступая на путь мести заговорщикам, уничтожившим его семью. Перед ним стоит выбор между любовью и судьбой целой вселенной.",
        poster:
            "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Dune+Part+Two+official+trailer",
        featured: true,
        popular: true,
        isNew: false
    },

    {
        id: 2,
        title: "Интерстеллар",
        originalTitle: "Interstellar",
        year: 2014,
        rating: 8.7,
        type: "movie",
        genres: ["Фантастика", "Драма"],
        category: ["sci-fi", "drama"],
        duration: "169 мин.",
        description:
            "Когда Земля оказывается на грани катастрофы, группа исследователей отправляется через космическую аномалию на поиски нового дома для человечества.",
        poster:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Interstellar+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 3,
        title: "Начало",
        originalTitle: "Inception",
        year: 2010,
        rating: 8.8,
        type: "movie",
        genres: ["Фантастика", "Триллер"],
        category: ["sci-fi", "action"],
        duration: "148 мин.",
        description:
            "Профессионал, способный проникать в чужие сны, получает необычное задание: не украсть идею, а внедрить её в сознание человека.",
        poster:
            "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Inception+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 4,
        title: "Бегущий по лезвию 2049",
        originalTitle: "Blade Runner 2049",
        year: 2017,
        rating: 8.0,
        type: "movie",
        genres: ["Фантастика", "Драма"],
        category: ["sci-fi", "drama"],
        duration: "164 мин.",
        description:
            "Офицер полиции раскрывает тайну, способную изменить будущее человечества, и отправляется на поиски давно исчезнувшего охотника за репликантами.",
        poster:
            "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Blade+Runner+2049+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 5,
        title: "Оппенгеймер",
        originalTitle: "Oppenheimer",
        year: 2023,
        rating: 8.3,
        type: "movie",
        genres: ["Драма", "История"],
        category: ["drama"],
        duration: "180 мин.",
        description:
            "История учёного, чьи открытия изменили ход мировой истории. Фильм исследует цену научного прогресса и ответственность за его последствия.",
        poster:
            "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Oppenheimer+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 6,
        title: "Дэдпул и Росомаха",
        originalTitle: "Deadpool & Wolverine",
        year: 2024,
        rating: 7.5,
        type: "movie",
        genres: ["Боевик", "Комедия"],
        category: ["action"],
        duration: "128 мин.",
        description:
            "Необычный дуэт отправляется в приключение, где сталкиваются супергеройский хаос, неожиданные союзники и судьба целой реальности.",
        poster:
            "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Deadpool+and+Wolverine+official+trailer",
        popular: true,
        isNew: true
    },

    {
        id: 7,
        title: "Грань будущего",
        originalTitle: "Edge of Tomorrow",
        year: 2014,
        rating: 7.9,
        type: "movie",
        genres: ["Фантастика", "Боевик"],
        category: ["sci-fi", "action"],
        duration: "113 мин.",
        description:
            "Военный оказывается во временной петле во время вторжения инопланетян. Каждый новый день даёт ему шанс изменить ход войны.",
        poster:
            "https://image.tmdb.org/t/p/w500/xjw5trHV7Mwo61P0kCTy8paEkgO.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/7mgKeg18Qml5nJQa56RBZO7dIu0.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Edge+of+Tomorrow+official+trailer",
        popular: false,
        isNew: false
    },

    {
        id: 8,
        title: "Тёмный рыцарь",
        originalTitle: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        type: "movie",
        genres: ["Боевик", "Криминал"],
        category: ["action", "drama"],
        duration: "152 мин.",
        description:
            "Готэм сталкивается с противником, который стремится разрушить привычные правила. Бэтмену предстоит испытание собственных принципов.",
        poster:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 9,
        title: "Человек-паук: Через вселенные",
        originalTitle: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        rating: 8.4,
        type: "movie",
        genres: ["Анимация", "Фантастика"],
        category: ["sci-fi", "animation"],
        duration: "117 мин.",
        description:
            "Майлз Моралес открывает для себя мир параллельных вселенных и встречает других людей-пауков, которые помогают ему найти собственный путь.",
        poster:
            "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Into+the+Spider-Verse+official+trailer",
        popular: false,
        isNew: false
    },

    {
        id: 10,
        title: "Аркейн",
        originalTitle: "Arcane",
        year: 2021,
        rating: 9.0,
        type: "series",
        genres: ["Анимация", "Фантастика"],
        category: ["sci-fi", "animation", "drama"],
        duration: "2 сезона",
        description:
            "На фоне конфликта двух городов судьбы сестёр переплетаются с технологиями, политическими интригами и борьбой за власть.",
        poster:
            "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/9yTjM3jZl9Z0K8X7X5vQZxV6v0Q.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=Arcane+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 11,
        title: "Пацаны",
        originalTitle: "The Boys",
        year: 2019,
        rating: 8.6,
        type: "series",
        genres: ["Боевик", "Драма"],
        category: ["action", "drama"],
        duration: "Сериал",
        description:
            "В мире, где супергерои превратились в знаменитостей и корпорации, небольшая группа решает раскрыть правду об их настоящей природе.",
        poster:
            "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=The+Boys+official+trailer",
        popular: true,
        isNew: false
    },

    {
        id: 12,
        title: "Создатель",
        originalTitle: "The Creator",
        year: 2023,
        rating: 7.0,
        type: "movie",
        genres: ["Фантастика", "Боевик"],
        category: ["sci-fi", "action"],
        duration: "133 мин.",
        description:
            "В мире войны между человечеством и искусственным интеллектом бывший солдат получает задание, способное изменить будущее обеих сторон.",
        poster:
            "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/original/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
        video: "",
        trailer: "https://www.youtube.com/results?search_query=The+Creator+2023+official+trailer",
        popular: false,
        isNew: true
    }
];


/* =========================================
   DOM ELEMENTS
========================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const elements = {
    header: $("#header"),

    navigation: $("#navigation"),
    menuToggle: $("#menuToggle"),

    searchForm: $("#searchForm"),
    searchInput: $("#searchInput"),
    clearSearch: $("#clearSearch"),

    heroBackground: $("#heroBackground"),
    heroTitle: $("#heroTitle"),
    heroRating: $("#heroRating"),
    heroYear: $("#heroYear"),
    heroType: $("#heroType"),
    heroDuration: $("#heroDuration"),
    heroDescription: $("#heroDescription"),
    heroWatch: $("#heroWatch"),
    heroDetails: $("#heroDetails"),
    heroPagination: $("#heroPagination"),

    categoryTabs: $("#categoryTabs"),
    catalogTitle: $("#catalogTitle"),
    catalogDescription: $("#catalogDescription"),
    catalogCount: $("#catalogCount"),
    movieGrid: $("#movieGrid"),
    searchStatus: $("#searchStatus"),
    emptyState: $("#emptyState"),
    resultsInfo: $("#resultsInfo"),
    showAllButton: $("#showAllButton"),
    resetFilters: $("#resetFilters"),

    popularRow: $("#popularRow"),
    newRow: $("#newRow"),
    sciFiRow: $("#sciFiRow"),

    videoModal: $("#videoModal"),
    closeModal: $("#closeModal"),
    videoPlayer: $("#videoPlayer"),
    playerPlaceholder: $("#playerPlaceholder"),
    placeholderTitle: $("#placeholderTitle"),
    placeholderMessage: $("#placeholderMessage"),
    placeholderAction: $("#placeholderAction"),

    modalTitle: $("#modalTitle"),
    modalRating: $("#modalRating"),
    modalYear: $("#modalYear"),
    modalType: $("#modalType"),
    modalGenre: $("#modalGenre"),
    modalDescription: $("#modalDescription"),
    modalFavorite: $("#modalFavorite"),
    modalNotice: $("#modalNotice"),

    profileButton: $("#profileButton"),
    infoModal: $("#infoModal"),
    closeInfoModal: $("#closeInfoModal"),
    closeInfoAction: $("#closeInfoAction"),
    infoModalTitle: $("#infoModalTitle"),
    infoModalContent: $("#infoModalContent"),

    promoButton: $("#promoButton"),

    toast: $("#toast")
};


/* =========================================
   APPLICATION STATE
========================================= */

let activeCategory = "all";
let searchQuery = "";
let currentHeroIndex = 0;
let currentMovie = null;
let visibleMovieLimit = CONFIG.initialMoviesToShow;
let heroTimer = null;
let toastTimer = null;

let favorites = loadFavorites();


/* =========================================
   STORAGE
========================================= */

function loadFavorites() {
    try {
        const saved = localStorage.getItem(CONFIG.favoritesKey);

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return [];
        }

        // Оставляем только идентификаторы существующих фильмов.
        return [...new Set(
            parsed.filter(id =>
                Number.isInteger(id) &&
                movies.some(movie => movie.id === id)
            )
        )];

    } catch (error) {
        console.warn("Не удалось загрузить избранное:", error);
        return [];
    }
}


function saveFavorites() {
    try {
        localStorage.setItem(
            CONFIG.favoritesKey,
            JSON.stringify(favorites)
        );

        return true;

    } catch (error) {
        console.warn("Не удалось сохранить избранное:", error);
        showToast("Не удалось сохранить избранное в браузере.");
        return false;
    }
}


function isFavorite(movieId) {
    return favorites.includes(movieId);
}


/* =========================================
   HELPERS
========================================= */

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[char];
    });
}


function getMovieById(id) {
    return movies.find(movie => movie.id === Number(id)) || null;
}


function getTypeLabel(type) {
    return type === "series" ? "Сериал" : "Фильм";
}


function getMovieDuration(movie) {
    return movie.duration || "Не указано";
}


function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("visible");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        elements.toast.classList.remove("visible");
    }, 2600);
}


/* =========================================
   MOVIE CARD TEMPLATE
========================================= */

function createMovieCard(movie) {
    const favorite = isFavorite(movie.id);

    const badge = movie.isNew
        ? '<span class="movie-badge new">НОВИНКА</span>'
        : movie.type === "series"
            ? '<span class="movie-badge series">СЕРИАЛ</span>'
            : "";

    return `
        <article class="movie-card" data-movie-id="${movie.id}">

            <div class="movie-poster">

                <img
                    src="${escapeHTML(movie.poster)}"
                    alt="${escapeHTML(movie.title)}"
                    loading="lazy"
                    decoding="async"
                >

                ${badge}

                <button
                    class="favorite-button ${favorite ? "is-favorite" : ""}"
                    data-favorite-id="${movie.id}"
                    aria-label="${favorite ? "Убрать из избранного" : "Добавить в избранное"}"
                    aria-pressed="${favorite}"
                    title="${favorite ? "Убрать из избранного" : "Добавить в избранное"}"
                >${favorite ? "♥" : "♡"}</button>

                <button
                    class="play-overlay"
                    data-play-id="${movie.id}"
                    aria-label="Открыть ${escapeHTML(movie.title)}"
                    title="Смотреть"
                >▶</button>

                <div class="movie-rating">
                    <span>★</span> ${Number(movie.rating).toFixed(1)}
                </div>

            </div>

            <div class="movie-card-info">

                <h3 class="movie-card-title" title="${escapeHTML(movie.title)}">
                    ${escapeHTML(movie.title)}
                </h3>

                <div class="movie-card-meta">
                    <span>${movie.year}</span>
                    <span class="meta-dot"></span>
                    <span>${getTypeLabel(movie.type)}</span>
                </div>

                <p class="movie-card-genre">
                    ${escapeHTML(movie.genres.join(" · "))}
                </p>

                <button
                    class="card-watch"
                    data-play-id="${movie.id}"
                >▶ Смотреть подробнее</button>

            </div>

        </article>
    `;
}


/* =========================================
   FILTERING
========================================= */

function getFilteredMovies() {
    let result = [...movies];

    if (activeCategory === "movie") {
        result = result.filter(movie => movie.type === "movie");

    } else if (activeCategory === "series") {
        result = result.filter(movie => movie.type === "series");

    } else if (activeCategory === "sci-fi") {
        result = result.filter(movie =>
            movie.category.includes("sci-fi")
        );

    } else if (activeCategory === "action") {
        result = result.filter(movie =>
            movie.category.includes("action")
        );

    } else if (activeCategory === "favorites") {
        result = result.filter(movie => isFavorite(movie.id));
    }

    if (searchQuery) {
        const query = searchQuery.toLocaleLowerCase("ru");

        result = result.filter(movie => {
            const searchableText = [
                movie.title,
                movie.originalTitle,
                movie.year,
                ...movie.genres
            ].join(" ").toLocaleLowerCase("ru");

            return searchableText.includes(query);
        });
    }

    return result;
}


function renderCatalog() {
    const filteredMovies = getFilteredMovies();

    const displayedMovies = filteredMovies.slice(0, visibleMovieLimit);

    elements.movieGrid.innerHTML = displayedMovies
        .map(createMovieCard)
        .join("");

    elements.catalogCount.textContent =
        `${filteredMovies.length} ${getTitleWord(filteredMovies.length)}`;

    elements.emptyState.classList.toggle(
        "hidden",
        filteredMovies.length > 0
    );

    elements.movieGrid.classList.toggle(
        "hidden",
        filteredMovies.length === 0
    );

    elements.searchStatus.textContent = searchQuery
        ? `Результаты поиска: ${filteredMovies.length}`
        : "";

    elements.resultsInfo.textContent =
        `Показано ${displayedMovies.length} из ${filteredMovies.length}`;

    elements.showAllButton.classList.toggle(
        "hidden",
        filteredMovies.length <= visibleMovieLimit
    );

    elements.showAllButton.innerHTML =
        '<span>Показать всё ↓</span>';

    updateCategoryTabs();
}


function getTitleWord(count) {
    const lastTwo = count % 100;
    const last = count % 10;

    if (lastTwo >= 11 && lastTwo <= 14) {
        return "TITLES";
    }

    if (last === 1) {
        return "TITLE";
    }

    return "TITLES";
}


function updateCategoryTabs() {
    $$(".category-tab").forEach(button => {
        const isActive = button.dataset.category === activeCategory;

        button.classList.toggle("active", isActive);

        if (isActive) {
            button.setAttribute("aria-current", "true");
        } else {
            button.removeAttribute("aria-current");
        }
    });
}


function setCategory(category) {
    activeCategory = category;
    visibleMovieLimit = CONFIG.initialMoviesToShow;

    const titles = {
        all: {
            title: "Исследуй каталог",
            description: "Найди историю, которая захватит тебя с первой минуты."
        },
        movie: {
            title: "Фильмы",
            description: "Полнометражные истории на любой вкус."
        },
        series: {
            title: "Сериалы",
            description: "Истории, к которым хочется возвращаться."
        },
        "sci-fi": {
            title: "Фантастика",
            description: "Другие миры, технологии и невероятные открытия."
        },
        action: {
            title: "Боевики",
            description: "Динамичные истории и захватывающие приключения."
        },
        favorites: {
            title: "Избранное",
            description: "Твоя личная коллекция любимых историй."
        }
    };

    const selected = titles[category] || titles.all;

    elements.catalogTitle.textContent = selected.title;
    elements.catalogDescription.textContent = selected.description;

    renderCatalog();
}


function resetFilters() {
    searchQuery = "";
    activeCategory = "all";
    visibleMovieLimit = CONFIG.initialMoviesToShow;

    elements.searchInput.value = "";
    elements.clearSearch.classList.remove("visible");

    setCategory("all");
}


/* =========================================
   SEARCH
========================================= */

elements.searchForm.addEventListener("submit", event => {
    event.preventDefault();

    searchQuery = elements.searchInput.value.trim();
    visibleMovieLimit = CONFIG.initialMoviesToShow;

    renderCatalog();

    $("#catalog").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


elements.searchInput.addEventListener("input", () => {
    searchQuery = elements.searchInput.value.trim();
    visibleMovieLimit = CONFIG.initialMoviesToShow;

    elements.clearSearch.classList.toggle(
        "visible",
        elements.searchInput.value.length > 0
    );

    renderCatalog();
});


elements.clearSearch.addEventListener("click", () => {
    elements.searchInput.value = "";
    searchQuery = "";

    elements.clearSearch.classList.remove("visible");

    renderCatalog();
    elements.searchInput.focus();
});


elements.categoryTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");

    if (!button) {
        return;
    }

    setCategory(button.dataset.category);
});


elements.resetFilters.addEventListener("click", resetFilters);


elements.showAllButton.addEventListener("click", () => {
    visibleMovieLimit = getFilteredMovies().length;
    renderCatalog();
});


/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(movieId) {
    const movie = getMovieById(movieId);

    if (!movie) {
        return;
    }

    const alreadyFavorite = isFavorite(movieId);

    if (alreadyFavorite) {
        favorites = favorites.filter(id => id !== movieId);
        showToast(`«${movie.title}» удалён из избранного.`);
    } else {
        favorites.push(movieId);
        showToast(`«${movie.title}» добавлен в избранное.`);
    }

    saveFavorites();

    // Обновляем карточки и кнопку внутри модального окна.
    renderCatalog();
    renderSliderRows();

    if (currentMovie && currentMovie.id === movieId) {
        updateModalFavoriteButton();
    }
}


/*
    Один обработчик обслуживает все карточки.
    Это работает и после повторной отрисовки каталога.
*/

document.addEventListener("click", event => {
    const favoriteButton = event.target.closest("[data-favorite-id]");

    if (!favoriteButton) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(Number(favoriteButton.dataset.favoriteId));
});


/* =========================================
   SLIDER ROWS
========================================= */

function renderSliderRows() {
    const popular = movies
        .filter(movie => movie.popular)
        .sort((a, b) => b.rating - a.rating);

    const newReleases = movies
        .filter(movie => movie.isNew)
        .sort((a, b) => b.year - a.year);

    const sciFi = movies
        .filter(movie => movie.category.includes("sci-fi"))
        .sort((a, b) => b.rating - a.rating);

    elements.popularRow.innerHTML = popular
        .map(createMovieCard)
        .join("");

    elements.newRow.innerHTML = newReleases
        .map(createMovieCard)
        .join("");

    elements.sciFiRow.innerHTML = sciFi
        .map(createMovieCard)
        .join("");
}


$$("[data-scroll]").forEach(button => {
    button.addEventListener("click", () => {
        const row = document.getElementById(button.dataset.scroll);

        if (!row) {
            return;
        }

        const direction = Number(button.dataset.direction) || 1;

        row.scrollBy({
            left: direction * row.clientWidth * 0.8,
            behavior: "smooth"
        });
    });
});


/* =========================================
   HERO CAROUSEL
========================================= */

const heroMovies = movies.filter(movie => movie.featured);

function renderHeroPagination() {
    elements.heroPagination.innerHTML = heroMovies
        .map((movie, index) => `
            <button
                class="hero-dot ${index === currentHeroIndex ? "active" : ""}"
                data-hero-index="${index}"
                aria-label="Показать ${escapeHTML(movie.title)}"
                aria-pressed="${index === currentHeroIndex}"
            ></button>
        `)
        .join("");
}


function setHero(index) {
    if (!heroMovies.length) {
        return;
    }

    currentHeroIndex =
        (index + heroMovies.length) % heroMovies.length;

    const movie = heroMovies[currentHeroIndex];

    elements.heroTitle.textContent = movie.title;
    elements.heroRating.textContent = movie.rating.toFixed(1);
    elements.heroYear.textContent = movie.year;
    elements.heroType.textContent = getTypeLabel(movie.type);
    elements.heroDuration.textContent = getMovieDuration(movie);
    elements.heroDescription.textContent = movie.description;

    elements.heroBackground.style.backgroundImage =
        `url("${movie.backdrop || movie.poster}")`;

    elements.heroWatch.dataset.playId = movie.id;
    elements.heroDetails.dataset.detailsId = movie.id;

    renderHeroPagination();
}


elements.heroPagination.addEventListener("click", event => {
    const button = event.target.closest("[data-hero-index]");

    if (!button) {
        return;
    }

    setHero(Number(button.dataset.heroIndex));
    restartHeroTimer();
});


function restartHeroTimer() {
    clearInterval(heroTimer);

    if (!CONFIG.heroAutoplay || heroMovies.length < 2) {
        return;
    }

    heroTimer = setInterval(() => {
        setHero(currentHeroIndex + 1);
    }, CONFIG.heroInterval);
}


/* =========================================
   VIDEO MODAL
========================================= */

function openMovieModal(movieId) {
    const movie = getMovieById(movieId);

    if (!movie) {
        showToast("Фильм не найден.");
        return;
    }

    currentMovie = movie;

    elements.modalTitle.textContent = movie.title;
    elements.modalRating.textContent = movie.rating.toFixed(1);
    elements.modalYear.textContent = movie.year;
    elements.modalType.textContent = getTypeLabel(movie.type);
    elements.modalGenre.textContent = movie.genres.join(" · ");
    elements.modalDescription.textContent = movie.description;

    updateModalFavoriteButton();

    // Сначала останавливаем предыдущий фильм.
    elements.videoPlayer.pause();
    elements.videoPlayer.removeAttribute("src");
    elements.videoPlayer.load();
    elements.videoPlayer.classList.remove("is-active");

    elements.playerPlaceholder.classList.remove("hidden");

    if (movie.video) {
        // Прямая ссылка на MP4/WebM.
        elements.placeholderTitle.textContent = movie.title;
        elements.placeholderMessage.textContent =
            "Нажми кнопку ниже, чтобы начать просмотр.";

        elements.placeholderAction.textContent = "▶ Смотреть";

        elements.placeholderAction.onclick = () => {
            playMovieVideo(movie.video);
        };

        elements.modalNotice.textContent =
            "Воспроизведение видеофайла из указанного источника.";

    } else {
        // Если файла нет, предлагаем открыть трейлер.
        elements.placeholderTitle.textContent = movie.title;

        elements.placeholderMessage.textContent =
            "Полная версия видео пока не подключена. Можно открыть поиск официального трейлера.";

        elements.placeholderAction.textContent = "Открыть трейлер ↗";

        elements.placeholderAction.onclick = () => {
            if (movie.trailer) {
                window.open(
                    movie.trailer,
                    "_blank",
                    "noopener,noreferrer"
                );
            } else {
                showToast("Ссылка на трейлер пока не добавлена.");
            }
        };

        elements.modalNotice.textContent =
            "Демонстрационный плеер. Добавь прямую ссылку на видеофайл в базу фильмов для воспроизведения внутри сайта.";
    }

    elements.videoModal.classList.add("open");
    elements.videoModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    clearInterval(heroTimer);

    elements.closeModal.focus();
}


function playMovieVideo(videoUrl) {
    if (!currentMovie || !videoUrl) {
        return;
    }

    try {
        const url = new URL(videoUrl, window.location.href);

        if (!["http:", "https:", "file:"].includes(url.protocol)) {
            showToast("Неподдерживаемый адрес видео.");
            return;
        }

        elements.videoPlayer.src = url.href;
        elements.videoPlayer.classList.add("is-active");

        elements.playerPlaceholder.classList.add("hidden");

        elements.videoPlayer.load();

        const playPromise = elements.videoPlayer.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(error => {
                console.warn("Автовоспроизведение не началось:", error);

                showToast(
                    "Нажми Play в видеоплеере, чтобы начать просмотр."
                );
            });
        }

    } catch (error) {
        console.error("Ошибка воспроизведения:", error);
        showToast("Не удалось открыть видео.");
    }
}


function closeMovieModal() {
    elements.videoPlayer.pause();
    elements.videoPlayer.removeAttribute("src");
    elements.videoPlayer.load();

    elements.videoPlayer.classList.remove("is-active");
    elements.playerPlaceholder.classList.remove("hidden");

    elements.videoModal.classList.remove("open");
    elements.videoModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    currentMovie = null;

    restartHeroTimer();
}


function updateModalFavoriteButton() {
    if (!currentMovie) {
        return;
    }

    const favorite = isFavorite(currentMovie.id);

    elements.modalFavorite.classList.toggle(
        "is-favorite",
        favorite
    );

    elements.modalFavorite.innerHTML = favorite
        ? "♥ <span>В избранном</span>"
        : "♡ <span>В избранное</span>";
}


elements.closeModal.addEventListener("click", closeMovieModal);


elements.videoModal.addEventListener("click", event => {
    if (event.target.matches("[data-close-modal]")) {
        closeMovieModal();
    }
});


elements.modalFavorite.addEventListener("click", () => {
    if (currentMovie) {
        toggleFavorite(currentMovie.id);
    }
});


/*
    Обработчик для кнопок воспроизведения.
    Используется делегирование событий.
*/

document.addEventListener("click", event => {
    const playButton = event.target.closest("[data-play-id]");

    if (!playButton) {
        return;
    }

    event.preventDefault();

    openMovieModal(Number(playButton.dataset.playId));
});


/* =========================================
   HERO BUTTONS
========================================= */

elements.heroWatch.addEventListener("click", () => {
    const movieId = elements.heroWatch.dataset.playId;

    if (movieId) {
        openMovieModal(Number(movieId));
    }
});


elements.heroDetails.addEventListener("click", () => {
    const movieId = elements.heroDetails.dataset.detailsId;

    if (movieId) {
        openMovieModal(Number(movieId));
    }
});


/* =========================================
   MOBILE NAVIGATION
========================================= */

function closeNavigation() {
    elements.navigation.classList.remove("open");

    elements.menuToggle.setAttribute("aria-expanded", "false");
    elements.menuToggle.setAttribute("aria-label", "Открыть меню");
}


elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.navigation.classList.toggle("open");

    elements.menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    elements.menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Закрыть меню" : "Открыть меню"
    );
});


elements.navigation.addEventListener("click", event => {
    const link = event.target.closest(".nav-link");

    if (!link) {
        return;
    }

    closeNavigation();

    const category = link.dataset.nav;

    if (category === "all") {
        setCategory("movie");

    } else if (category === "series") {
        setCategory("series");

    } else if (category === "favorites") {
        setCategory("favorites");

    } else if (category === "home") {
        setCategory("all");
    }

    $$(".nav-link").forEach(item => {
        item.classList.toggle("active", item === link);
    });

    if (category !== "home") {
        $("#catalog").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

function updateHeader() {
    elements.header.classList.toggle(
        "scrolled",
        window.scrollY > 25
    );
}

window.addEventListener("scroll", updateHeader, {
    passive: true
});


/* =========================================
   PROFILE & INFORMATION WINDOWS
========================================= */

function openInfoModal(title, content) {
    elements.infoModalTitle.textContent = title;
    elements.infoModalContent.replaceChildren();

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    elements.infoModalContent.appendChild(paragraph);

    elements.infoModal.classList.add("open");
    elements.infoModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    elements.closeInfoModal.focus();
}


function closeInfoModal() {
    elements.infoModal.classList.remove("open");
    elements.infoModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}


elements.profileButton.addEventListener("click", () => {
    openInfoModal(
        "Твой профиль",
        "Это демонстрационный шаблон Invincible. Сейчас регистрация и авторизация не подключены. Избранное сохраняется в локальном хранилище твоего браузера."
    );
});


elements.closeInfoModal.addEventListener("click", closeInfoModal);
elements.closeInfoAction.addEventListener("click", closeInfoModal);


elements.infoModal.addEventListener("click", event => {
    if (event.target.matches("[data-close-info]")) {
        closeInfoModal();
    }
});


$("#aboutLink").addEventListener("click", event => {
    event.preventDefault();

    openInfoModal(
        "О проекте Invincible",
        "Invincible — демонстрационный интерфейс онлайн-кинотеатра, созданный с использованием HTML, CSS и Vanilla JavaScript."
    );
});


$("#privacyLink").addEventListener("click", event => {
    event.preventDefault();

    openInfoModal(
        "Конфиденциальность",
        "Этот демонстрационный шаблон сохраняет список избранного в localStorage браузера. Серверная обработка данных и полноценная политика конфиденциальности не реализованы."
    );
});


$("#termsLink").addEventListener("click", event => {
    event.preventDefault();

    openInfoModal(
        "Условия использования",
        "Шаблон предоставлен в демонстрационных целях. Перед публикацией добавь собственные юридические документы и используй только видео и изображения, на которые у тебя есть соответствующие права."
    );
});


/* =========================================
   FOOTER CATEGORY LINKS
========================================= */

$$("[data-footer-category]").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        setCategory(link.dataset.footerCategory);

        $("#catalog").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/* =========================================
   PROMO BUTTON
========================================= */

elements.promoButton.addEventListener("click", () => {
    resetFilters();

    $("#catalog").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (elements.videoModal.classList.contains("open")) {
            closeMovieModal();

        } else if (elements.infoModal.classList.contains("open")) {
            closeInfoModal();

        } else {
            closeNavigation();
        }
    }

    // "/" — быстрый переход к поиску.
    if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
    ) {
        event.preventDefault();
        elements.searchInput.focus();
    }
});


/* =========================================
   PAGE INITIALIZATION
========================================= */

function initApp() {
    // Текущий год в подвале.
    $("#currentYear").textContent = new Date().getFullYear();

    // Отрисовываем карточки.
    renderCatalog();

    // Заполняем горизонтальные подборки.
    renderSliderRows();

    // Инициализируем главный баннер.
    setHero(0);

    // Запускаем автоматическую смену баннера.
    restartHeroTimer();

    // Устанавливаем правильное состояние шапки.
    updateHeader();

    console.log(
        `%c${CONFIG.brand}`,
        "color: #ff6b00; font-size: 24px; font-weight: 900;"
    );

    console.log(
        "Invincible Cinema успешно запущен."
    );
}


initApp();