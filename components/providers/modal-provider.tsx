"use client";

import { useEffect, useState } from "react";

import CreateServerModal from "@components/modals/create-server-modal";
import InviteModal from "@components/modals/invite-modal";
import EditServerModal from "@components/modals/edit-server-modal";
import MembersModal from "@components/modals/members-modal";
import CreateChannelModal from "@components/modals/create-channel-modal";
import LeaveServerModal from "@components/modals/leave-server-modal";
import DeleteServerModal from "@components/modals/delete-server-modal";

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
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
}
