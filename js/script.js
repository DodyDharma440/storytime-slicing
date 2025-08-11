const latestStoriesSlider = document.getElementById("latest-story-slider");
const romanceSlider = document.getElementById("romance-slider");

const comedyGrid = document.getElementById("comedy-grid");
const horrorGrid = document.getElementById("horror-grid");

const handleSliderItem = (story, thumbPrefix) => {
  return `
        <div class="stories-slider__item">
            <div class="story-card">
                <div class="story-card__thumbnail">
                    <img
                    src="assets/stories/${thumbPrefix}/${story.thumbnail}"
                    class="story-card__thumbnail-image"
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
                            alt="Author Avatar"
                            class="story-card__info-author-avatar-image"
                        />
                        </div>
                        <p class="story-card__info-author-name">
                        ${story.author}
                        </p>
                    </div>

                    <p>${story.date}</p>
                    ${
                      story.category
                        ? ` <div class="story-card__info-tag">
                                <span>${story.category}</span>
                            </div>`
                        : ""
                    }
                
                    </div>
                </div>
            </div>
        </div>
    `;
};

const handleGridItem = (story, thumbPrefix) => {
  return `
    <div class="stories-grid__item${story.isHighlight ? "--large" : ""}">
        <div class="story-card story-card${
          story.isHighlight ? "--large" : "--small"
        }">
        <div class="story-card__thumbnail">
            <img
            src="assets/stories/${thumbPrefix}/${story.thumbnail}"
            class="story-card__thumbnail-image"
            />
            <button class="story-card__bookmark-btn">
            <img
                class="story-card__bookmark-btn-icon"
                src="assets/icons/bookmark.svg"
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
                    alt="Author Avatar"
                    class="story-card__info-author-avatar-image"
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
