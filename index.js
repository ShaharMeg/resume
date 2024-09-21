const START_SCROLL_ANIMATION = 0;
const END_SCROLL_ANIMATION = 175;
const HEADER_MIN_HEIGHT = 100;
const HEADER_ORIGINAL_MARGIN_TOP = 5;

const init = async () => {
  const mainContainer = document.querySelector(".main-container");
  const header = mainContainer.querySelector(".header");
  const picture = header.querySelector(".picture");
  const summaryContainer = header.querySelector(".summary-container");

  // Init animation
  let headerOriginalHeight = header.getBoundingClientRect().height;
  const differenceBetweenMaxAndMinHeight =
    headerOriginalHeight - HEADER_MIN_HEIGHT;

  const changeHeaderStyling = () => {
    const currentScroll = window.scrollY;
    const animationStage = currentScroll / END_SCROLL_ANIMATION;

    // Picture animation
    picture.style.transform = `scale(${1 + animationStage * 0.3}) rotate(${
      20 * animationStage
    }deg)`;
    picture.style.opacity = 1 - animationStage;

    // Summary animation
    summaryContainer.style.opacity = 1 - animationStage;
    summaryContainer.style.transform = `translateX(${100 * animationStage}px)`;

    // Header animation
    let newHeight =
      headerOriginalHeight - differenceBetweenMaxAndMinHeight * animationStage;
    newHeight = newHeight > HEADER_MIN_HEIGHT ? newHeight : HEADER_MIN_HEIGHT;
    header.style.height = `${newHeight}px`;
    let newMarginTop =
      HEADER_ORIGINAL_MARGIN_TOP - HEADER_ORIGINAL_MARGIN_TOP * animationStage;
    newMarginTop = newMarginTop > 0 ? newMarginTop : 0;
    header.style.marginTop = `${newMarginTop}px`;
  };

  document.addEventListener("scroll", (e) => {
    window.requestAnimationFrame(changeHeaderStyling);
  });
};

init();
