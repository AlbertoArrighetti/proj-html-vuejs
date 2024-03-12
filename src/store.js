import { reactive } from "vue";

export const store = reactive({
    
            cars: [
                {
                    img: '/src/assets/bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg',
                    model: 'BMW M9',
                    brand: 'BMW',
                    type: 'Cabrio',
                    avaible: true,
                    price: '34.000',
                    alimentation: 'Electric',
                },
                {
                    img: '/src/assets/bmw88-400x300.jpg',
                    model: 'BMW M8',
                    brand: 'BMW',
                    type: 'Cabrio',
                    avaible: true,
                    price: '34.000',
                    alimentation: 'Diesel',
                },
                {
                    img: '/src/assets/bmw442-400x300.jpg',
                    model: 'BMV 4',
                    brand: 'BMW',
                    type: 'Cabrio',
                    avaible: true,
                    price: '34.000',
                    alimentation: 'Gasoline',
                },
                {
                    img: '/src/assets/yeni-ibiza-2-400x300.jpg',
                    model: 'Seat Ibiza',
                    brand: 'Seat',
                    type: 'Hatchback',
                    avaible: true,
                    price: '27.000',
                    alimentation: 'Electric',
                },
                {
                    img: '/src/assets/makyajli-2022-seat-arona-1-400x300.jpg',
                    model: 'Seat Arona',
                    brand: 'Seat',
                    type: 'SUV',
                    avaible: true,
                    price: '68.000',
                    alimentation: 'Gasoline',
                },
                {
                    img: '/src/assets/vw-taigo3832-400x300.jpg',
                    model: 'Volswagen Taigo',
                    brand: 'Volswagen',
                    type: 'SUV',
                    avaible: true,
                    price: '52.000',
                    alimentation: 'Electric',
                },
                {
                    img: '/src/assets/2019-vw-t-cross-400x300.jpg',
                    model: 'Volswagen T-Cross',
                    brand: 'Volswagen',
                    type: 'SUV',
                    avaible: true,
                    price: '47.000',
                    alimentation: 'Diesel',
                },
                {
                    img: '/src/assets/volkswagen-passat-1280x720-1-400x300.jpg',
                    model: 'Volswagen Passat',
                    brand: 'Volswagen',
                    type: 'Sedan',
                    avaible: true,
                    price: '32.000',
                    alimentation: 'Diesel',
                },
            ],

            carType: [
                {
                    src: 'cabrio',
                    type: 'Cabrio',
                    listing: 3,
                },
                {
                    src: 'coupe',
                    type: 'Coupe',
                    listing: 0,
                },
                {
                    src: 'hatchback',
                    type: 'Hatchback',
                    listing: 2,
                },
                {
                    src: 'pickup',
                    type: 'Pick Up',
                    listing: 0,
                },
                {
                    src: 'sedan',
                    type: 'Sedan',
                    listing: 3,
                },
                {
                    src: 'suv',
                    type: 'SUV',
                    listing: 4,
                },
            ],


            customersReview: [
                {
                    picture: '/src/assets/man1.png',
                    comment: 'We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.',
                    name: 'Adam',
                },
                {
                    picture: '/src/assets/testimonial2-1.png',
                    comment: 'One of the quality websites I apply to rent a car. There are hundreds of different tools.',
                    name: 'Cristian',
                },
                {
                    picture: '/src/assets/man2.png',
                    comment: 'I was trying to sell my car. And I put it here and sold it for more than it was worth.',
                    name: 'Robert',
                },
                {
                    picture: '/src/assets/testimonial4-1.png',
                    comment: 'A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles.',
                    name: 'Elizabeth',
                },
            ]
        
})