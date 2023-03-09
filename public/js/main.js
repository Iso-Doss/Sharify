let properties=[
    {
        'id': 1,
        'name': 'Maison Cotonou',
        'img': 'images/properties-grid-02.jpg',
        'sale': true,
        'featured': true,
        'img_count':9,
        'vid_count':1,
        'adress': 'Cotonou, Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
    {
        'id': 2,
        'name': 'Villa Parakou',
        'img': 'images/properties-grid-01.jpg',
        'sale': true,
        'featured': false,
        'img_count':9,
        'vid_count':1,
        'adress': 'Parakou, Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
    {
        'id': 3,
        'name': 'Appartement calavi',
        'img': 'images/properties-grid-03.jpg',
        'sale': false,
        'featured': false,
        'img_count':9,
        'vid_count':1,
        'adress': 'Calavi, Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
    {
        'id': 4,
        'name': 'Villa Djeffa',
        'img': 'images/properties-grid-04.jpg',
        'sale': false,
        'featured': true,
        'img_count':9,
        'vid_count':1,
        'adress': 'Djeffa Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
 
]
let rent=[
   {
        'id': 1,
        'name': 'Maison Cotonou',
        'img': 'images/properties-grid-02.jpg',
        'sale': true,
        'featured': true,
        'img_count':9,
        'vid_count':1,
        'adress': 'Cotonou, Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
    {
        'id': 2,
        'name': 'Villa Parakou',
        'img': 'images/properties-grid-05.jpg',
        'sale': true,
        'featured': false,
        'img_count':9,
        'vid_count':1,
        'adress': 'Parakou, Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
    {
        'id': 3,
        'name': 'Appartement calavi',
        'img': 'images/properties-grid-06.jpg',
        'sale': false,
        'featured': false,
        'img_count':9,
        'vid_count':1,
        'adress': 'Calavi, Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
    {
        'id': 4,
        'name': 'Villa Djeffa',
        'img': 'images/properties-grid-07.jpg',
        'sale': false,
        'featured': true,
        'img_count':9,
        'vid_count':1,
        'adress': 'Djeffa Benin',
        'room': 3,
        'bath': 2,
        'size': 1200,
        'park': 1,
        'price': 10000,
        'currency': 'XOF'
    },
]

function _(target){
   return document.querySelector(target)
}

function last(_p, t){
    for(var p of _p){
        let target = _(t)
        target.innerHTML+=
            
            `
            <div class="box pb-7 pt-2">
            <div class="card shadow-hover-2" data-animate="zoomIn">
              <div
                class="hover-change-image bg-hover-overlay rounded-lg card-img-top"
              >
                <img
                  src="${p.img}"
                  alt="${p.name}"
                />
                <div class="card-img-overlay p-2 d-flex flex-column">
                  <div>
                    <span class="badge mr-2 badge-orange" ${p.featured?'hidden':''}>Top</span>
                    <span class="badge mr-2 badge-primary" ${p.sale?'hidden':''}>A vendre</span>
                  </div>
                  <ul class="list-inline mb-0 mt-auto hover-image">
                    <li
                      class="list-inline-item mr-2"
                      data-toggle="tooltip"
                      title="${p.img_count} Images"
                    >
                      <a href="#" class="text-white hover-primary">
                        <i class="far fa-images"></i
                        ><span class="pl-1">9</span>
                      </a>
                    </li>
                    <li
                      class="list-inline-item"
                      data-toggle="tooltip"
                      title="${p.vid_count} Video"
                    >
                      <a href="#" class="text-white hover-primary">
                        <i class="far fa-play-circle"></i
                        ><span class="pl-1">2</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body pt-3">
                <h2 class="card-title fs-16 lh-2 mb-0">
                  <a
                    href="single-property-1.html"
                    class="text-dark hover-primary"
                    >${p.name} </a
                  >
                </h2>
                <p class="card-text font-weight-500 text-gray-light mb-2">
                ${p.adress}
                </p>
                <ul class="list-inline d-flex mb-0 flex-wrap mr-n5">
                  <li
                    class="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                    data-toggle="tooltip"
                    title="${p.room}  Bedroom"
                  >
                    <svg class="icon icon-bedroom fs-18 text-primary mr-1">
                      <use xlink:href="#icon-bedroom"></use>
                    </svg>
                    ${p.room} Br
                  </li>
                  <li
                    class="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                    data-toggle="tooltip"
                    title="${p.bath}  Bathrooms"
                  >
                    <svg class="icon icon-shower fs-18 text-primary mr-1">
                      <use xlink:href="#icon-shower"></use>
                    </svg>
                    ${p.bath} Ba
                  </li>
                  <li
                    class="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                    data-toggle="tooltip"
                    title="Size"
                  >
                    <svg class="icon icon-square fs-18 text-primary mr-1">
                      <use xlink:href="#icon-square"></use>
                    </svg>
                    2300 Sq.Ft
                  </li>
                  <li
                    class="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                    data-toggle="tooltip"
                    title="1 Garage"
                  >
                    <svg class="icon icon-Garage fs-18 text-primary mr-1">
                      <use xlink:href="#icon-Garage"></use>
                    </svg>
                    1 Gr
                  </li>
                </ul>
              </div>
              <div
                class="card-footer bg-transparent d-flex justify-content-between align-items-center py-3"
              >
                <p class="fs-17 font-weight-bold text-heading mb-0">
                ${p.price} ${p.currency}
                </p>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"
                      data-toggle="tooltip"
                      title="Wishlist"
                      ><i class="fas fa-heart"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                      data-toggle="tooltip"
                      title="Compare"
                      ><i class="fas fa-exchange-alt"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

            `
        
    }
}
last(properties, '#last')
last(rent, '#rent')
