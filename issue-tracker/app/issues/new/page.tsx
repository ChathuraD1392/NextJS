"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-2">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit a New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
