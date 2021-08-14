
function getCarsList(filterData) {
    var content = '';
    let temp = JSON.parse(JSON.stringify(CAR_LIST));
    if (filterData) {
        if (filterData.category) {
            temp = temp.filter(el => (el.category === filterData.category || filterData.category === 'All'));
        }

        if (filterData.type) {
            temp.forEach(el => {
                el.cars = el.cars.filter(car => (car.mode.indexOf(filterData.type) >-1 || filterData.type === 'All'));
            });
        }

        if (filterData.name) {
            temp.forEach(el => {
                el.cars = el.cars.filter(car => (car.name === filterData.name));
            });
        }
    }
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].cars.length; j++) {
            content += `<div class="thumbnail no-border no-padding thumbnail-car-card clearfix">
                            <div class="media">
                                <a class="media-link" data-gal="prettyPhoto" href="assets/img/Cars/${temp[i].cars[j].imageUrlPreview}">
                                    <img class="car-list-img-thumbnail" src="assets/img/Cars/${temp[i].cars[j].imageUrl}" alt=""/>
                                    <span class="icon-view"><strong><i class="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div class="caption">
                                
                                <h4 class="caption-title"><a href="#">${temp[i].cars[j].name}</a></h4>
                                <h5 class="caption-title-sub">Start from ${temp[i].cars[j].rateFrom}$/per a day</h5>
                                <div class="caption-text m-h-0 m-b-5"></div>
                                <table class="table">
                                    <tr>
                                        <td class="w-15"><i class="fa fa-car"></i> <br> ${temp[i].cars[j].model}</td>
                                        <td class="w-35"><i class="fa fa-dashboard"></i><br> ${temp[i].cars[j].variant}</td>
                                        <td class="w-25"><i class="fa fa-cog"></i><br> ${temp[i].cars[j].mode}</td>
                                        <td class="buttons w-25 car-list-button" onclick="goToBookingPage   (${temp[i].cars[j].id})">Select Car</td>
                                    </tr>
                                </table>
                            </div>
                        </div>`
        }
    }
    

    var div = document.getElementById('carListingContent');
    div.innerHTML = content;
    document.querySelector('.container').scrollIntoView({
        behavior: 'smooth'
    });
    
}
// default call
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('searchInput');
getCarsList({ name: myParam });

// filter method
function filterCars() {
    let myFormValues = {category: document.forms["filterForm"]["category"].value,type: document.forms["filterForm"]["type"].value}
    getCarsList(myFormValues)
}


function clearFilter() {
    document.forms["filterForm"]["category"].value = 'All'
    document.forms["filterForm"]["type"].value = 'All'
    getCarsList("");
}

function goToBookingPage(id) {
    window.location.href ="booking.html?id="+id;
}
