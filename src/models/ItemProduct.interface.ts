export interface ItemProduct {
  id: number;
  name: string;
  newPrice: number;
  oldPrice: number;
  image: string;
  category: "Best Sellers" | "New Arrivals" | "Hot Sales";
}
