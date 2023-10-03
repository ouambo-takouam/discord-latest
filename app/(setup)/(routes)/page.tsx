import { redirect } from "next/navigation";

import { db } from "@lib/db";
import initialprofile from "@lib/intial-profile";

export default async function Home() {
  const profile = await initialprofile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <div>Initial modal</div>;
}
