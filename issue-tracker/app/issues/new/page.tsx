"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/createIssueSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import delay from "delay";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false
});
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = async () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (err) {
      setSubmitting(true);
      setError("An unexpected error is occured");
    }
    setSubmitting(false);
  });
  //await delay(2000);
  return (
    <div className="max-w-xl space-y-2">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit} className="max-w-xl space-y-2">
        <TextField.Root
          {...register("title")}
          placeholder="Title"
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit a New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
