import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request){
    try{
        const body = await req.json()
        const {id,email_addresses,first_name,image_url} = body?.data;

        const email = email_addresses[0]?.email_address
        console.log("✔", body);

        await db.user.upsert({
            where :{
                clerkId:id
            },
            update:{
                email,
                name:first_name,
                profileImage: image_url,
            },
            create:{
                clerkId:id,
                email,
                name: first_name || '',
                profileImage: image_url || '',
            },
        })

        return new NextResponse('User updated in databse successfully',{
            status: 200,

        })
    }
    catch(error){
        console.error("Error updating databse: ", error);
        return new NextResponse('Error updating user in databse',{status:500})
    }
}