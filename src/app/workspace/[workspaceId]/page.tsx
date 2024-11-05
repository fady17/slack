"use client";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdpage = () => {
  const workspaceId = useWorkspaceId();
  return <div>ID: {workspaceId}</div>;
};

export default WorkspaceIdpage;
