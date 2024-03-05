// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data: {
//         username,
//         password,
//         firstName,
//         lastName
//     }
//   })
//   console.log(res);
// }

// // insertUser("admin1", "123456", "harkirat", "singh")


// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: { username },
//         data: {
//           firstName,
//           lastName
//         }
//       });
//       console.log(res);
// }

// // updateUser("rohith9",{firstName:"rohithh",lastName:"reddyy"})

// async function getUser(username: string) {
//     const user = await prisma.user.findFirst({
//       where: {
//           username: username
//       }
//     })
//     console.log(user);
//   }
  
// getUser("rohithsf9");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function createTodo(userId: number, title: string, description: string) {
//     const newTodo = await prisma.todo_shitha.create({
//         data: {
//             title,
//             description,
//             userId
//         }
//     });
//     console.log(newTodo);
// }

// createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(userId: number) {
    const res = await prisma.todo_shitha.findMany({
        where:{
            userId: userId
        }
    })
    console.log(res);
}

// getTodos(1)

async function getTodosAndUserDetails(userId: number, ) {
    const deke_bal = await prisma.todo_shitha.findMany({
        where:{
            userId: userId
        },
        select:{
            user: true,
            title: true,
            description: true
        }
    })
    console.log(deke_bal)
}

getTodosAndUserDetails(1);