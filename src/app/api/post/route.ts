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
    console.log(request);
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

// export async function PUT(request: Request, response: NextResponse) {
//   try {
//     console.log(request.url);
//     const body = await request.json();
//     console.log(body);
//     const postId = Number(body.id);
//     console.log(postId);
//     const post = await primsa.post.update({
//       where: { id: postId },
//       data: { likes: { increment: 1 } },
//     });
//     return NextResponse.json({ message: "Success", post });
//   } catch (err) {
//     return NextResponse.json({ message: "Error", err });
//   } finally {
//     await primsa.$disconnect();
//   }
// }
