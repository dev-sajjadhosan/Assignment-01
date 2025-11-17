1. What are some differences between interfaces and types in TypeScript?

ভিন্নতা হল interface and types এর মধ্যে:

- interface একই নামে একাধিক বার ডিক্লেয়ার করলে তারা মার্জ হয়ে যায়।
- types একই নামে একাধিক বার ডিক্লেয়ার করা যায় না।
- interface কে object, function type, array, tuple, class,etc এ ব্যবহার করা হয়।
- types আমরা union, intersection বা primitive types এ ব্যবহার করা হয়।
- interface কে class এর সাথে implement করা যায়।
- Class কেবলমাত্র interface-কে implement করতে পারে, type-কে নয় (যদি না type টি object shape হয়)।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof keyword এর ব্যবহার -

keyof কোনো object type-এর সবগুলো key-কে একটি union type হিসাবে ফেরত দেয়। এটি মূলত type-safe access এবং generic utility functions লিখতে সাহায্য করে।
উদাহরন:

```ts
    type Person = {
        name: string
        age: number
    }

    const PersonKeys = keyof Person
    // PersonKeys = name | age
```

3. Explain the difference between any, unknown, and never types in TypeScript?

any, unknown এবং never এর পার্থক্য হল:

- any হল:

  - যে কোন type এর value ব্যবহার করতে পারি।
  - এটি ব্যবহার করলে আমার কোন type checking অপসন দেখতে পাই না।
  - runtime error হওয়ার সম্ভাবনা বেশি।

- unknown হল:

  - এখানেও আমার any এর মত যে কোন value রাখতে পারি।
  - একে ব্যবহার করলে আগের type check করে নিতে হয়।
  - api response এ ব্যবহার করা হয়।

- never হল:
  - এমন জায়গায় যেখানে কোন value রিটান আসবে না।
  - এমন function যেখানে কোন value রিটান আসবে না।

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum?

- enum এর ব্যবহার হল typescript এ:
  এটি আমাদের ১ সেট নিদিষ্ট নাম দেওয়া constant তৈরি করতে সাহায্য করে।মানে, এটি আমরা ব্যবহার করেতে পারি এমন object এ যেখানে আমাদের value নির্দিষ্ট category এর মধ্যে থাকে। এর ব্যবহারের ফলে আমাদের code আরও readable, clean structure, type-safety এবং maintain করতে সহজ হয়। enum এ আমরা ২ ধরনের value রাখতে পারি :

  - Numeric Enum
  - String Enum

- Numeric Enum: এখানে আমরা সংখ্যা ভিত্তিক value রাখতে পারি এর নাম রেখে।
  উদাহরন:

```ts
enum ResponseCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500,
}
```

- String Enum: এখানে আমরা character ভিত্তিক value রাখতে পারি এর নাম রেখে।
  উদাহরন:

```ts
enum UserRoles {
  Admin = "admin",
  User = "User",
  Editor = "editor",
  Guest = "guest",
}
```

5. Provide an example of using union and intersection types in TypeScript.

- union ব্যবহার করা হয় যেখানে আমরা ২টি type এর মধ্য যে কোন ১টি হবে।
  উদাহরন:

```ts
type UserId = string | number;

let userId: UserId;

userId = 123;
userId = "123";
```

- intersection ব্যবহার করা হয় যখন আমরা ২টি class কে মিলিয়ে একটা নতুন class তৈরি করা জন্য।
  উদাহরন:

```ts
type Person = { id: number; name: string };
type Employee = { role: string };

type Staff = Person & Employee;

const sajjad: Staff = {
  id: 123,
  name: "Mohammad Sajjad",
  role: "Full-Stack Developer",
};
```
