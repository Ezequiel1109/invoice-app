import { Invoice } from "../models/invoice";

export const invoiceData: any = {
  id: 1,
  name: "John Doe",
  client: {
    name: "Andres",
    lastName: "Reveco",
    address: {
      country: "USA",
      city: "Anytown",
      street: "123 Main St",
      number: 14,
    },
  },
  company: {
    name: "ABC Inc.",
    fiscalNumber: 321321,
  },
  items: [
    {
      id: 1,
      product: "cpu intel core i9",
      price: 564,
      quantity: 2
    },
    {
        id: 2,
        product: "cpu intel core i5",
        price: 564433,
        quantity: 56
    },
    {
        id: 3,
        product: "cpu intel core i3",
        price: 56324,
        quantity: 222
    }
  ]
};
