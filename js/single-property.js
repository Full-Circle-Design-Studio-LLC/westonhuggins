availabilitySection = document.querySelector('.property-availability-section');
listings = document.querySelectorAll('.suite-list__suite');
downloadSpecButton = document.querySelector('.download-spec');

function availabilityToggle(currentListing) {
    currentListingContainer = currentListing.parentElement;
    availabilitySection.classList.toggle('property-availability-section_toggle');

    for (let i = 0; i < listings.length; i++) {
        if (listings[i] != currentListingContainer) {
            listings[i].classList.toggle('suite-list__suite_hide');
        } else {
            listings[i].querySelector('.suite-list__suite__specs').classList.toggle('suite-list__suite__specs_show');
            listings[i].classList.toggle('suite-list__suite_'+i);
            // if (listings[i].querySelector('.suite-list__suite__specs').classList.contains('suite-list__suite__specs_show')) {
            //     listings[i].style.transform = 'translateY(-' + i*70 + 'px)';
            // } else {
            //     listings[i].style.transform = 'translateY(0)';
            // }
        }
        downloadSpecButton.classList.toggle('download-spec_show');
    }
}