export default function NavigationButtons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Previous services"
        className="our-services-swiper-prev text-primary hover:bg-primary hover:text-heading flex items-center justify-center rounded-full bg-white p-4 text-base shadow-md transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <i className="lnr-icon-arrow-left"></i>
      </button>
      <button
        type="button"
        aria-label="Next services"
        className="our-services-swiper-next text-primary hover:bg-primary hover:text-heading flex items-center justify-center rounded-full bg-white p-4 text-base shadow-md transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <i className="lnr-icon-arrow-right"></i>
      </button>
    </div>
  );
}
