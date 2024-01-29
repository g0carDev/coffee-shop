
const certified = '/assets/certified.svg';
const coffeeBeans = '/assets/coffee-beans.svg';
const coffee = '/assets/coffee.svg';
const freeDelivery = '/assets/free-delivery.svg';

const menu1 = '/assets/01.jpg';
const menu2 = '/assets/02.jpg';
const menu3 = '/assets/03.jpg';
const menu4 = '/assets/04.jpg';
const menu5 = '/assets/05.jpg';
const menu6 = '/assets/06.jpg';
const menu7 = '/assets/07.jpg';
const menu8 = '/assets/08.jpg';

const gallery1 = '/assets/gallery-1.jpg';
const gallery2 = '/assets/gallery-2.jpg';
const gallery3 = '/assets/gallery-3.jpg';
const gallery4 = '/assets/gallery-4.jpg';
const gallery5 = '/assets/gallery-5.jpg';

const offer1 = '/assets/offer-1.jpg';
const offer2 = '/assets/offer-2.jpg';

const testimonial1 = '/assets/testimonial-1.jpg';
const testimonial2 = '/assets/testimonial-2.jpg';
const testimonial3 = '/assets/testimonial-3.jpg';
const testimonial4 = '/assets/testimonial-4.jpg';

interface FeaturesProps{
    id: number;
    img: string;
    title: string;
    description: string;

}

export const features: FeaturesProps[] = [
    {
        id: 1,
        img: freeDelivery,
        title: 'Free Shipping',
        description:
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
    },
    {
        id: 2,
        img: certified,
        title: 'Organic Certified',
        description:
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
    },
    {
        id: 3,
        img: coffee,
        title: 'High Quality',
        description:
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
    },
    {
        id: 4,
        img: coffeeBeans,
        title: 'Proper Roasting',
        description:
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
    },
];

export const menuItems = [
    {
        id: 1,
        img: menu1,
        title: 'Americano Coffee',
        description: 'Milk with vanilla flavored',
        price: 50.25,
    },
    {
        id: 2,
        img: menu2,
        title: 'Cappuccino Arabica',
        description: 'Milk with vanilla flavored',
        price: 70.25,
    },
    {
        id: 3,
        img: menu3,
        title: 'Milk Cream Coffee',
        description: 'Milk with vanilla flavored',
        price: 30.25,
    },
    {
        id: 4,
        img: menu4,
        title: 'Special Raw Coffee',
        description: 'Milk with vanilla flavored',
        price: 80.25,
    },
    {
        id: 5,
        img: menu5,
        title: 'Fresh Black Coffee',
        description: 'Milk with vanilla flavored',
        price: 90.25,
    },
    {
        id: 6,
        img: menu6,
        title: 'Cappuccino Arabica',
        description: 'Milk with vanilla flavored',
        price: 70.25,
    },
    {
        id: 7,
        img: menu7,
        title: 'Milk Cream Coffee',
        description: 'Milk with vanilla flavored',
        price: 120.25,
    },
    {
        id: 8,
        img: menu8,
        title: 'Cold Coffee',
        description: 'Milk with vanilla flavored',
        price: 40.25,
    },
];


export const galleryItems = [
    {
      id: 1,
      img: gallery1,
      title: 'Cappuccino Arabica',
    },
    {
      id: 2,
      img: gallery2,
      title: 'Cappuccino Arabica',
    },
    {
      id: 3,
      img: gallery3,
      title: 'Cappuccino Arabica',
    },
    {
      id: 4,
      img: gallery4,
      title: 'Cappuccino Arabica',
    },
    {
      id: 5,
      img: gallery5,
      title: 'Cappuccino Arabica',
    },
  ];
  
  export const offerItems = [
    {
      id: 1,
      img: offer1,
      title: 'Cappuccino Arabica',
      discount: 'Get 40% Offer',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.',
    },
    {
      id: 2,
      img: offer2,
      title: 'Cappuccino Arabica',
      discount: 'Get 40% Offer',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.',
    },
  ];
  
  export const testimonialsItems = [
    {
      id: 1,
      img: testimonial1,
      title: 'Reid E Butt',
      service: 'Customer',
      description:
        'There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.',
    },
    {
      id: 2,
      img: testimonial2,
      title: 'Parker Jimenez',
      service: 'Customer',
      description:
        'There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.',
    },
    {
      id: 3,
      img: testimonial3,
      title: 'Sylvia H Green',
      service: 'Customer',
      description:
        'There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.',
    },
    {
      id: 4,
      img: testimonial4,
      title: 'Gordon D Novak',
      service: 'Customer',
      description:
        'There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.',
    },
  ];