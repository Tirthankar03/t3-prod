import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

const mockUrls = [
  "https://utfs.io/f/144b8144-39b9-46d5-91d3-e9ce33128f40-wzsr1w.jpg",
  "https://utfs.io/f/9c706f99-af2c-42d6-9a6c-367a85257218-2fof.png",
  "https://utfs.io/f/8ecc9078-c6a7-4758-9550-f865cc2554c7-23n9.jpg",
  "https://utfs.io/f/614f7e92-7840-4398-8a48-bf1ef4c853df-1w0bl.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
