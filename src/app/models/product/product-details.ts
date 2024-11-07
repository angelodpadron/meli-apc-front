export interface ProductDetails {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    pictures: { url: string }[];
    description: string;
}