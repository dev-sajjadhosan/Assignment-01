type FormatValueProps = string | number | boolean;
const formatValue = (value: FormatValueProps) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? false : true;
  }
};

type LengthValueProps = string | (string | number)[];
const getLength = (value: LengthValueProps) => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.split("").length;
  }
};

class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Books = { title: string; rating: number };
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterByRating = (array: Books[]): Books[] => {
  return array.filter((item) => item.rating >= 4);
};

type User = { id: number; name: string; email: string; isActive: boolean };
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

const filterActiveUsers = (array: User[]) => {
  return array.reduce((acc, cur) => {
    if (cur.isActive === true) {
      acc.push(cur);
    }
    return acc;
  }, [] as User[]);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails = (obj: Book) => {
  return `Title: ${obj.title}, Author: ${obj.author}, Published: ${
    obj.publishedYear
  }, Available: ${obj.isAvailable ? "Yes" : "No"}`;
};

type ArrayType = string | number;
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const getUniqueValues = (
  array1: ArrayType[],
  array2: ArrayType[]
): ArrayType[] => {
  const newArray: ArrayType[] = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    let match = false;

    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === array2[i]) {
        match = true;
        break;
      }
    }
    if (!match) {
      newArray.push(array2[i]);
    }
  }

  return newArray;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice = (array: Product[]) => {
  return array.reduce((acc, item) => {
    let itemTotal = item.price * item.quantity;

    if (item.discount !== undefined) {
      const discountAmount = (itemTotal * item.discount) / 100;
      itemTotal -= discountAmount;
    }
    return acc + itemTotal;
  }, 0);
};
