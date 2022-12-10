export const apiUrl: string = 'http://localhost:5000/api/v1';
//export const apiUrl: string = 'https://beready-env.eba-ct8pphes.eu-central-1.elasticbeanstalk.com/api/v1';


export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
}

export interface SharedItem {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
}