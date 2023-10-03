import { primsa } from "../../../../prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextResponse) {
  try {
    const allPosts = await primsa.post.findMany();
    return NextResponse.json({ message: "Success", allPosts });
  } catch (err) {
    return NextResponse.json({ message: "Error", err });
  } finally {
    await primsa.$disconnect();
  }
}

export async function POST(request: Request, response: NextResponse) {
  try {
    const body = await request.json();
    const post = await primsa.post.create({
      data: {
        content: body.content,
      },
    });
    return NextResponse.json({ message: "Success", post });
  } catch (err) {
    return NextResponse.json({ message: "Error", err });
  } finally {
    await primsa.$disconnect();
  }
}
