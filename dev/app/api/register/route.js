import { NextResponse } from "next/server";

export async function POST(req, res) {
try {
    const { username, password } = await req.json();

    console.log(username);
    console.log(password);

    return NextResponse.json({message: "registered!"},{status: 200});
} catch (error) {
  return NextResponse.json({message: "an error occured while registering the user!"},{status: 500});
  
}
};