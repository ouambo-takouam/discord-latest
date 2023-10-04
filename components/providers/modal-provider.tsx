"use client";

import { useEffect, useState } from "react";

import CreateServerModal from "@components/modals/create-server-modal";
import InviteModal from "@components/modals/invite-modal";

export default function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
}
