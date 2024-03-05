import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    },
    select: {
        id: true,
        username: true
    },
  })
  console.log(res)
}



interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {firstName,lastName}: UpdateParams) {
  const res = await prisma.user.update({
    where: {username},
    data: {
        firstName,
        lastName
    }
  })
  console.log(res)
}

// updateUser("Rohith",{firstName:"RR",lastName:"Y"})

async function deleteUser(username: string) {
    const res = await prisma.user.delete({
        where: {username}
    })
    console.log(res)
}

// deleteUser("Yeswanth")

async function getUser(username: string) {
    const user = await prisma.user.findUnique({
        where: {username}
})
        console.log(user)
}

getUser("random")


