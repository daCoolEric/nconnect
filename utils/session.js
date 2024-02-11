import { useSession } from "next-auth/react";

export const session = useSession({
  required: true,
  onUnauthenticated() {
    return null;
  },
});
