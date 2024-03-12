import { reactive } from "vue";

export const store = reactive({
    data() {
        return {
            cars: [
                {
                    img: '/src/assets/bmw-8-series-convertible-technical-data-sp-desktop-400x300',
                    brand: 'BMW M9',
                    type: 'Cabrio',
                    avaible: true,
                },
                {
                    img: '/src/assets/bmw88-400x300.jpg',
                    brand: 'BMW M8',
                    type: 'Cabrio',
                    avaible: true,
                },
                {
                    img: '/src/assets/bmw442-400x300.jpg',
                    brand: 'BMV 4',
                    type: 'Cabrio',
                    avaible: true,
                },
                {
                    img: '/src/assets/yeni-ibiza-2-400x300.jpg',
                    brand: 'Seat Ibiza',
                    type: 'Hatchback',
                    avaible: true,
                },
                {
                    img: '/src/assets/makyajli-2022-seat-arona-1-400x300.jpg',
                    brand: 'Seat Arona',
                    type: 'SUV',
                    avaible: true,
                },
                {
                    img: '/src/assets/vw-taigo3832-400x300.jpg',
                    brand: 'Volswagen Taigo',
                    type: 'SUV',
                    avaible: true,
                },
                {
                    img: '/src/assets/2019-vw-t-cross-400x300.jpg',
                    brand: 'Volswagen T-Cross',
                    type: 'SUV',
                    avaible: true,
                },
                {
                    img: '/src/assets/volkswagen-passat-1280x720-1-400x300.jpg',
                    brand: 'Volswagen Passat',
                    type: 'Sedan',
                    avaible: true,
                },
            ],

            carType: [
                'Cabrio',
                'Coupe',
                'Hatchback',
                'Pick Up',
                'Sedan',
                'SUV',
            ],
        }
    },
})