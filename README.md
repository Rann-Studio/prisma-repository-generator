# 🚀 Prisma Repository Generator

## 🌟 Description
Prisma Repository Generator is a powerful utility designed to automate the creation of repository files based on your Prisma models. It eliminates repetitive boilerplate code by generating common CRUD operations for database interactions, which improves consistency, scalability, and maintainability across your applications.

Instead of manually generating repetitive database logic code for each Prisma model, it generates reusable repository classes with standard methods. Developers can focus on application development instead of tedious CRUD generation.

> 📌 **NOTE**\
> This generator currently **only works with TypeScript**. Support for additional languages ​​may be added in the future.

## 📥 Prerequisites
Before using the Prisma Repository Generator, make sure you have the necessary dependencies and tools ready:

#### 1. Install Prisma Client
```console
npm install @prisma/client
```

#### 2. Install Prisma Repository Generator
```console
npm install prisma-repository-generator --save-dev
```

## ⚙️ Setup Instructions
Follow the steps below to set up Prisma and generate repositories:

#### 1. Set Up Prisma Database Schema
Make sure you define the Prisma schema in `prisma/schema.prisma`. Here is an example of a schema you can use:
```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}

model Post {
  id      Int    @id @default(autoincrement())
  title   String
  content String
  userId  Int
}
```

#### 2. Run Migrations
After defining your schema, apply it to the database using the following command:
```console
npx prisma migrate dev --name init
```
This will create the necessary database structure.

> ⚠️ **IMPORTANT**\
> Make sure you run migrations (npx prisma migrate dev --name init) before using the repository generator to avoid runtime issues.


#### 3. Generate Repositories
Import and execute the repository generator with the following:

```typescript
import { generateRepositories } from 'prisma-repository-generator';

// Generate repositories
generateRepositories()
  .then(() => {
    console.log('Repositories generated successfully!');
  })
  .catch(err => {
    console.error('Error generating repositories:', err);
  });
```

This will create repository files based on your Prisma models.


## ✅Features

- [x] `findUnique` : Retrieve a single record by unique identifier.
- [x] `findUniqueOrThrow` : Retrieve a single record or throw an error if it doesn't exist.
- [x] `findFirst` : Fetch the first matching record with optional filtering and sorting.
- [x] `findFirstOrThrow` : Same as findFirst, but throws an error if no record is found.
- [x] `findMany` : Fetch multiple records with filtering, pagination, and cursor support.
- [x] `create` : Insert a single record.
- [x] `update` : Update a record by unique identifier.
- [x] `upsert` : Insert or update a record based on a unique condition.
- [x] `delete` : Delete a single record by unique identifier.
- [x] `createMany` : Insert multiple records at once.
- [x] `createManyAndReturn` : Insert multiple records and return them.
- [x] `updateMany` : Update multiple records with specific conditions.
- [x] `deleteMany` : Delete multiple records based on optional filtering.
- [x] `count` : Count records with optional filtering.
- [x] `aggregate` : Perform aggregation queries.


## 💰Support Me

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/leuguna) [![Saweria](https://img.shields.io/badge/Saweria-F79F01?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAIcUExURQAAACoqKodkKn9kOyoqKhcXF4NcFIBfKRodGhoaHh0dIRsbJBkdHS0qJTctGBkdIoZbE3NYKSAgKC8pJlBDME9AMCMjICMjI3NRFJNmD0BAQCMjHIBYFp9rDqdxEohfEBkZGVZAGEo4GS0oH4RiJX1cHSQkHi4uLphnD5BjDzMzM1lBGlhGIyIiIq1zEbiCJR4eHjozHS0qJJBjEIRcDyAgICAgILB1DrR4CUBAQAAAAGVKGceCD8+ICWxOFwAAACcnH5ZmE3pXF21OFopfECMnHj4yI5FkEqdxDXJRFCgoKE07GpBiD3lXEu+bA+aoQe6bAuSfJ96QBvqxNPyjAOCXFvqnFv6kAMmECOqdFf2sHP2tIMOLJr9+CpVoEYhgFvmhAbx9Cs2HB++bAnZZJahzENjY2F5eXodeE6NvDbh6C2VJGXd3d9fW1qmXdfn5+ScnJ0Y6NMWQjDArKjQ0NP7+/qqNV/CbBKWOY////4KCgk1EXV9Rd2BReEQ+UZOTk6d/M/OdAtmOBqeNXaR+Obp9FDgvHzsxH7h7Fqd/NKd+M/OdAcOADeOUBIxhEY5eHI5eG5JkENuPBf2oCNWSGvjKRPnDOOWVBJNPP5xPRtKLBv2lA/fQUfjJQvywF72MH6NvDqJwEtGKCNGJCcyGCbd8C45jEaR0H7WQNPyuEqZxDeuZA6l5JrF6FaJuDcWDCfSeAah0Fv2jAO2aBCu+rZUAAABOdFJOUwAMxrcGC8G8RjtGOT1aYTTXoiBXb2tQHanQBCTE/v67H3dkOfn0KgvZywWJdB737xFqVdzOCBj9+AgCpv7+kwFC6vbw0jtCz9+aE3S4nuXZMCkAAAABYktHRHmh3NTQAAAAB3RJTUUH5wEWCwogQlOHygAAAPlJREFUGNNjYGBkYmZhAANWNnYQi8PPnxMiwBUQyA2keIKCeSECfCGh/ECKRSBMUEhYRFRMXCJcUgokIS0TIRsZFR0jFyuvAFGqGBefkJiUnJKqBOErq6SlZ2RmZefkqqqB+OoaefkFhUVFxSWlZZpaQAHt8orKquqa2rr6/IZGHQYGXb3wpuaW1rb2js6u7nB9AwbDnvDw8N6+/gkTJ4VPnjzFiIHVeOq08PDpM2bOCp89Z66JKYOZ+bz5CxYuWrxk6bLlK1ZaWDJYWdusClm9Zu269RvCN9ra2TMw2Ds4bgoPcXLeHB7u4gpxmZu7h6eXqbePry6QAwBguEYkRi5KGAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMS0yMlQxMToxMDozMiswMDowMCmdD7cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDEtMjJUMTE6MTA6MzIrMDA6MDBYwLcLAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAxLTIyVDExOjEwOjMyKzAwOjAwD9WW1AAAAABJRU5ErkJggg==&logoColor=white)](https://saweria.co/rannstudio) [![Trakteer](https://img.shields.io/badge/Trakteer-E50027?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAASBQTFRFAAAA/wAA5wAm6AAm5QAn5gAn5gAn5QAm5gAm5gAn5QAn5QAn5AAn5QAm5QAn5QAn5QEn5QYs5gct5gku5gwx5g0y5hA05xI25xY55xY66Bs+6Bw+6B1A6SdI6StM6S1N6S5N6S5O6jBQ6jFR6jVT6z5b6z9d60Bd60Jf7Exn7l127l538G6E8HCG8XWK8XaK8XeM8XuQ8X6R8n6S8n+S8n+T8oGU8oaY84qb84uc9JSk9aCv9aKx9qi19q+79q+897O+97TA97XA+LnE+LvG+cLL+cLM+cXN+cfP+s/W+tHY+tPa+tTa+9je+9nf+9vg+9zh/evu/e3w/e7x/e/y/fDy/fHz/fL0/vL0/vP0/vb3/vf4/vn6//z9//39////y+eVhAAAAA90Uk5TAAI1Q4m209TU5vL1+fz+/z/KzwAAAWJJREFUOMuFk9dWAlEMRTOdNgQLYgF7L9hRsCuCIs2CIqjn///CB3BycQ1wnpLcvWZWkhMiIs0wLTsYirhRZmbmqBsJBR3LNDQiIiLd4T4K6EREepj7KqwTaQEeIEcjgwfKIFPJZm4/H1d6AZMsJXsA8DHVA1iktDAJAJcbSRWwKSjJWAs4u8dPWgGCFFKyPeAEwNe4lEIUUT+4drgN4HtCKhFylffpZHL2NJvdiUnJpagkaXS1K7UoSRw/KBbrAIDzuFQFSFTgqZLwATJQlPEB8gBu9kvl4zsAeR+gBFwxj4xy7Boo+QAVYLMTbQEVAbw2a96fj4CatOkqwPsiM/PcmwK4MuoqgJdl5qVnAFUZtbesMgA01ldfAeBJluWtu6DOoSDrtv/CnArkPNeK5VJNeW+mxHJi2oWLeqPVbrca9Yt5xbRDba85g94D2vDTI9L7Hp+jd85bM0zL+X/+dvf8fwFNBHDZ+Ab1WwAAAABJRU5ErkJggg==&logoColor=white)](https://trakteer.id/rannstudio/tip)
