/**
 * form
 *
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast as shadcnToast } from "@/components/ui/use-toast";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

// client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formSchema = z.object({
  url: z
    .string()
    .regex(/^https:\/\/chat\.openai\.com\/g\/g-[a-zA-Z0-9-]+-[a-zA-Z0-9-]+$/, {
      message: "URL must start with https://chat.openai.com/g Please Try again",
    }),
});

type submitFormTypes = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function SubmitGPTsForm({
  loading,
  setLoading,
  setOpen,
}: submitFormTypes) {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);
    setLoading(true);

    // const url = await prisma.posts.create({ data: values });
    // Try to create the post and await its result
    const url = "/api/posts";

    // Data to be sent in the request body
    const data = {
      url: values["url"],
    };

    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data);

    // Create the options for the request
    const requestOptions = {
      method: "POST", // Method type
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: jsonData, // Attach the JSON data as the body
    };

    // Send the request using fetch
    fetch(url, requestOptions)
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        console.log("Success:", data); // Handle the success response
      })
      .catch((error) => {
        toast.error("submit error");
        console.error("Error:", error); // Handle errors if any
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
        toast.success(
          `Submit ${values["url"]} Success We will process it ASAP`,
        );
        shadcnToast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(values, null, 2)}
              </code>
            </pre>
          ),
        });
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-end space-y-8"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="GPTs link" {...field} />
              </FormControl>
              <FormDescription>This is your GPTs URL</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button className="ml-auto" type="submit">
          Submit
        </Button> */}
        <Button type="submit" className={cn({ disabled: loading })}>
          {loading && <Loader2 className="animate-spin" />}
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  );
}
