let userFormValue = sessionStorage.getItem("userValue");
if(userFormValue) {
    userFormValue = JSON.parse(userFormValue);
    document.forms["checkoutForm"]["pickup"].value = userFormValue.pickup;
    document.forms["checkoutForm"]["pickupDate"].value = userFormValue.pickupDate;
    document.forms["checkoutForm"]["pickupTime"].value = userFormValue.pickupTime;
    document.forms["checkoutForm"]["dropOff"].value = userFormValue.dropOff;
}



const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

var carDetails = '';
var carouselConent = '';
for (let i = 0; i < CAR_LIST.length;i++) {
    for(let j=0;j<CAR_LIST[i].cars.length;j++) {
        if (parseInt(CAR_LIST[i].cars[j].id) === parseInt(myParam)) {
            carDetails = CAR_LIST[i].cars[j];
        }
    }
}

if (carDetails) {
    for(let i=0;i<carDetails.detailedInfo.imagesUrl.length;i++) {
        carouselConent += `<div class="item"><a class="btn btn-zoom" href="assets/img/Cars/${carDetails.detailedInfo.imagesUrl[i].previewUrl}" data-gal="prettyPhoto"><i class="fa fa-arrows-h"></i></a><a href="assets/img/Cars/${carDetails.detailedInfo.imagesUrl[i].previewUrl}" data-gal="prettyPhoto"><img class="img-responsive" src="assets/img/Cars/${carDetails.detailedInfo.imagesUrl[i].previewUrl}" alt=""/></a></div>`
    }
}
var owlContent = carDetails.detailedInfo.imagesUrl.length > 1 ? `<div class="owl-carousel img-carousel">${carouselConent}</div>` : `<div class="">${carouselConent}</div>`

var bookingContent = `<div class="row">
                                <div class="col-md-8">${owlContent}</div>
                                <div class="col-md-4">
                                    <div class="car-details">
                                        <div class="list">
                                            <ul>
                                                <li class="title" id="booking-car-name">
                                                    <h3>${carDetails.name}</h3>
                                                </li>
                                                <li id="booking-car-variant">${carDetails.variant} </li>
                                                <li id="booking-car-mode">${carDetails.mode} </li>
                                            </ul>
                                        </div>
                                        <hr width="100" class="m-b-0">
                                        <div class="price p-t-0">
                                            <strong>${carDetails.detailedInfo.dayRate}</strong> <span>₹/Day</span> <i class="fa fa-info-circle"></i>
                                        </div>
                                        <div class="price p-t-0">
                                            <strong>${carDetails.detailedInfo.weekRate}</strong> <span>₹/Week</span> <i class="fa fa-info-circle"></i>
                                        </div>
                                        <div class="price p-t-0">
                                            <strong>${carDetails.detailedInfo.monthRate}</strong> <span>₹/Month</span> <i class="fa fa-info-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>`



var bookingCard = document.getElementById('bookingCard');
bookingCard.innerHTML = bookingContent;