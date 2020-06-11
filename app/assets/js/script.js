const roomsDom = document.querySelector('.col-2-rooms-container');
const homeRoomsDom = document.getElementById('home-rooms');

class UI {
	displayRooms(rooms) {
		let result = '';
		rooms.forEach(({ img, title, price, size, users }) => {
			result += `
        <!-- single room -->
					<div class="room-card">
						<div style="overflow: hidden">
            	<img class='scale'  src=${img} alt="">
						</div>

            <div class="card-content-wrapper">
              <div class="room-title">${title}</div>
              <div class="room-price">${price}</div>
              <div class="icon-wrapper">
                <span class="size-icon"><i></i> ${size}</span>
                <span class="user-icon"> <i></i> ${users}</span>
              </div>

              <div class="card-action-wrapper">
                <button class='scale'>Book now</button>
              </div>
            </div>
          </div>
        <!-- end of single room -->
      `;
		});

		roomsDom.innerHTML = result;
	}

	displayHomeRooms = (rooms) => {
		let result = '';
		rooms.forEach(({ img, title, price }) => {
			result += `
        <!-- single room -->
          <div class="column scale">
						<img src=${img} class="img-responsive" alt=""
							style="width:100%">
						<div class="content-1">
							<h1>${title}</h1>
							<p>${price}</p>
						</div>
					</div>
        <!-- end of single room -->
      `;
		});

		homeRoomsDom.innerHTML = result;
	};
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

const homeRooms = [
	{
		img: '../assets/img/febrian-zakaria-sjvU0THccQA-unsplash.jpg',
		title: 'Single Room',
		price: '₦50,000 per Night',
	},

	{
		img: '../assets/img/stephen-leonardi--TsLaYk1DLM-unsplash.jpg',
		title: 'Business Suite',
		price: '₦70,000 per Night',
	},

	{
		img: '../assets/img/paul-postema-nj6AXrnyEac-unsplash.jpg',
		title: 'Standard Room',
		price: '₦100,000 per Night',
	},

	{
		img: '../assets/img/steven-ungermann-aRT5UCf2MYY-unsplash.jpg',
		title: 'Couple Suite',
		price: '₦120,000 per Night',
	},

	{
		img: '../assets/img/reisetopia-aI6Su7Mu9Ro-unsplash.jpg',
		title: 'Family Suite',
		price: '₦190,000 per Night',
	},

	{
		img: '../assets/img/aw-creative-VGs8z60yT2c-unsplash.jpg',
		title: 'Presidential Suite',
		price: '₦210,000 per Night',
	},
];

document.addEventListener('DOMContentLoaded', () => {
	const ui = new UI();

	// get all room
	roomsDom && ui.displayRooms(rooms);
	homeRoomsDom && ui.displayHomeRooms(homeRooms);

	const togglerBtn = document.querySelector('.menu-toggler');
	const menu = document.querySelector('.menu-container');

	togglerBtn.addEventListener('click', () => {
		const toggle = menu.classList.contains('show');

		if (toggle) {
			menu.classList.remove('show');
			togglerBtn.classList.remove('change');
		} else {
			menu.classList.add('show');
			togglerBtn.classList.add('change');
		}
	});
});
