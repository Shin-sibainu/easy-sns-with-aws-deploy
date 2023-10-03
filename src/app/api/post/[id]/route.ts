import { NextResponse } from "next/server";
import { primsa } from "../../../../../prisma";

export async function POST(request: Request, response: NextResponse) {
  try {
    const body = await request.json();
    const postId = body.id;

    const post = await primsa.post.update({
      where: { id: Number(postId) },
      data: { likes: { increment: 1 } },
    });
    return NextResponse.json({ message: "Success", post });
  } catch (err) {
    return NextResponse.json({ message: "Error", err });
  } finally {
    await primsa.$disconnect();
  }
}
