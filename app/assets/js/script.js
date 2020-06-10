const roomsDom = document.querySelector('.col-2-rooms-container');

class UI {
	displayRooms(rooms) {
		let result = '';
		rooms.forEach(({ img, title, price, size, users }) => {
			result += `
        <!-- single room -->
          <div class="room-card">
            <img src=${img} alt="">

            <div class="card-content-wrapper">
              <div class="room-title">${title}</div>
              <div class="room-price">${price}</div>
              <div class="icon-wrapper">
                <span class="size-icon"><i></i> ${size}</span>
                <span class="user-icon"> <i></i> ${users}</span>
              </div>

              <div class="card-action-wrapper">
                <button>Book now</button>
              </div>
            </div>
          </div>
        <!-- end of single room -->
      `;
		});

		roomsDom.innerHTML = result;
	}
}

const rooms = [
	{
		img: '../assets/img/bedroom-1.jpg',
		title: 'Single Room',
		price: '₦50,000 per Night',
		size: 'size:32msq',
		users: 'max guests: 2 adults',
	},

	{
		img: '../assets/img/bedroom-2.jpg',
		title: 'Business Suite',
		price: '₦70,000 per Night',
		size: 'size:32msq',
		users: 'max guests: 2 adults',
	},

	{
		img: '../assets/img/bedroom-3.jpg',
		title: 'Standard Room',
		price: '₦100,000 per Night',
		size: 'size:32msq',
		users: 'max guests: 2 adults',
	},

	{
		img: '../assets/img/bedroom-4.jpg',
		title: 'Couple Suite',
		price: '₦120,000 per Night',
		size: 'size:32msq',
		users: 'max guests: 2 adults',
	},

	{
		img: '../assets/img/bedroom-5.jpg',
		title: 'Family Suite',
		price: '₦190,000 per Night',
		size: 'size:32msq',
		users: 'max guests: 2 adults',
	},

	{
		img: '../assets/img/bedroom-6.jpg',
		title: 'Presidential Suite',
		price: '₦210,000 per Night',
		size: 'size:32msq',
		users: 'max guests: 2 adults',
	},
];

document.addEventListener('DOMContentLoaded', () => {
	const ui = new UI();

	// get all products
	ui.displayRooms(rooms);
});
