"use client";

import { useEffect, useState } from "react";

import CreateServerModal from "@components/modals/create-server-modal";

export default function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateServerModal />
    </>
  );
}
