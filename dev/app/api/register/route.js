import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import bycrypt from "bcrypt";

async function createUser(username,password){
  const user = await prisma.user.create({
    data: { username, password },
  });
}


export async function POST(req, res) {
try {
    const { username, strpassword } = await req.json();
    const password = await bycrypt.hash(strpassword, 10);
    
    if (!username || !strpassword) {
      return NextResponse.json({message: "all fields are required"},{status: 400});

    }

    
    try {

        await createUser(username,password);

    } catch (error) {

      if(error.code === 'P2002'){
        return NextResponse.json({message: "username already exists"},{status: 400});
      }

    }

    return NextResponse.json({message: "registered!"},{status: 201});
} catch (error) {
  return NextResponse.json({message: "an error occured while registering the user!"},{status: 500});
  
}
};