const latestStoriesSlider = document.getElementById("latest-story-slider");
const romanceSlider = document.getElementById("romance-slider");

const comedyGrid = document.getElementById("comedy-grid");
const horrorGrid = document.getElementById("horror-grid");

const handleSliderItem = (story, thumbPrefix) => {
  return `
        <div class="stories-slider__item">
          <a href="#">
            <div class="story-card">
                <div class="story-card__thumbnail">
                    <img
                    src="assets/stories/${thumbPrefix}/${story.thumbnail}"
                    class="story-card__thumbnail-image"
                    loading="lazy"
                    alt="${story.title} thumb"
                    />
                </div>
                <div>
                    <h6 class="story-card__title">${story.title}</h6>
                    <p class="story-card__description">
                    ${story.description}
                    </p>

                    <div class="story-card__info">
                    <div class="story-card__info-author">
                        <div class="story-card__info-author-avatar">
                        <img
                            src="assets/avatars/${story.avatar}"
                            alt="${story.author} avatar"
                            class="story-card__info-author-avatar-image"
                            loading="lazy"
                        />
                        </div>
                        <p class="story-card__info-author-name">
                        ${story.author}
                        </p>
                    </div>
                    
                    <div class="story-card__info-subinfo">
                        <p>${story.date}</p>
                        ${
                          story.category
                            ? ` <div class="story-card__info-subinfo-tag">
                                    <span>${story.category}</span>
                                </div>`
                            : ""
                        }
                    </div>
                </div>
                </div>
            </div>
          </a>
        </div>
    `;
};

const handleGridItem = (story, thumbPrefix) => {
  return `
    <div class="stories-grid__item${story.isHighlight ? "--large" : ""}">
      <a href="#">
        <div class="story-card story-card${
          story.isHighlight ? "--large" : "--small"
        }">
          <div class="story-card__thumbnail">
              <img
              src="assets/stories/${thumbPrefix}/${story.thumbnail}"
              class="story-card__thumbnail-image"
              alt="${story.title} thumb"
              />
              <button class="story-card__bookmark-btn">
              <img
                  class="story-card__bookmark-btn-icon"
                  src="assets/icons/bookmark.svg"
                  loading="lazy"
                  alt=""
              />
              </button>
          </div>
          <div>
              <h6 class="story-card__title">${story.title}</h6>
              <p class="story-card__description">${story.description}</p>

              <div class="story-card__info">
              <div class="story-card__info-author">
                  <div class="story-card__info-author-avatar">
                  <img
                      src="assets/avatars/${story.avatar}"
                      alt="${story.author} avatar"
                      class="story-card__info-author-avatar-image"
                      loading="lazy"
                  />
                  </div>
                  <p class="story-card__info-author-name">
                  ${story.author}
                  </p>
              </div>

              <p>${story.date}</p>
              </div>
          </div>
        </div>
      </a>
    </div>
    `;
};

latestStoriesSlider.innerHTML = latestStories
  .map((i) => handleSliderItem(i, "latest"))
  .join("");
romanceSlider.innerHTML = romanceStories
  .map((i) => handleSliderItem(i, "romance"))
  .join("");

horrorGrid.innerHTML = horrorStories
  .map((i) => handleGridItem(i, "horror"))
  .join("");
comedyGrid.innerHTML = comedyStories
  .map((i) => handleGridItem(i, "comedy"))
  .join("");

const navBtn = document.getElementById("nav-mobile-button");
const navMobileMenu = document.getElementById("nav-mobile-menu");

const handleToggleMenu = ({ fromWindow }) => {
  const isMenuOpen = navMobileMenu.getAttribute("data-open") === "true";
  navMobileMenu.setAttribute("data-open", isMenuOpen ? "false" : "true");

  if (isMenuOpen) {
    navMobileMenu.style.opacity = 0;
    setTimeout(() => {
      navMobileMenu.innerHTML = "";
      navMobileMenu.style.opacity = 1;
    }, 500);
  } else {
    if (!fromWindow) {
      navMobileMenu.innerHTML = `      
          <div class="navbar__actions-mobile-menu">
              <button class="btn btn--primary-outline">Register</button>
              <button class="btn btn--primary">Login</button>
          </div>`;
    }
  }
};

const handleOutsideClick = () => {
  handleToggleMenu({ fromWindow: true });
};

const handleClickMenu = (e) => {
  e.stopPropagation();
  handleToggleMenu({ fromWindow: false });
};

window.addEventListener("click", handleOutsideClick);
navBtn.addEventListener("click", handleClickMenu);

navMobileMenu.addEventListener("click", (e) => e.stopPropagation());

const bookmarkButtons = document.getElementsByClassName(
  "story-card__bookmark-btn"
);

for (let i = 0; i < bookmarkButtons.length; i++) {
  const btn = bookmarkButtons[i];
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
