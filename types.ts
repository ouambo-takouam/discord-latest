import { Server } from "@prisma/client";
import { Member } from "@prisma/client";
import { Profile } from "@prisma/client";

export type ServerWithmembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
