export default function NavigationButtons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Previous services"
        className="our-services-swiper-prev flex items-center justify-center text-primary text-base p-4 rounded-full 
        bg-white shadow-md hover:bg-primary hover:text-heading transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="lnr-icon-arrow-left"></i>
      </button>
      <button
        type="button"
        aria-label="Next services"
        className="our-services-swiper-next flex items-center justify-center text-primary text-base p-4 rounded-full 
        bg-white shadow-md hover:bg-primary hover:text-heading transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="lnr-icon-arrow-right"></i>
      </button>
    </div>
  );
}
