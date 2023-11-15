/**
 * form
 *
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast as shadcnToast } from "@/components/ui/use-toast";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

// client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formSchema = z.object({
  query: z.string(),
  type: z.string(),
});

type submitFormTypes = {
  loading: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  setSearchParams: Dispatch<SetStateAction<{}>>;
  // handleSearchSubmit: () => void;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

console.log("form");

export function SubmitGPTsForm({
  loading,
  setLoading,
  setSearchParams,
  setIsSearching,
}: submitFormTypes) {
  // ...
  // 1. Define your form.
  // const [filterCategory, setFilterCategory] = useState("title");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    if (values.query !== "") {
      setIsSearching(true);
      const data = {
        query: values["query"],
        type: values["type"],
      };

      toast.success("search");
      setSearchParams(data);
    }

    shadcnToast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 md:flex-row "
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <SelectDemo
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                  /> */}
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select a filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Filters</SelectLabel>
                      <SelectItem value="title">title</SelectItem>
                      <SelectItem value="author">author</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[250px]"
                    placeholder="GPTs link"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />

        <Button
          type="submit"
          className={cn("flex gap-3", { disabled: loading })}
        >
          {loading && <Loader2 className="animate-spin" />}
          <span>Search</span>
        </Button>
      </form>
    </Form>
  );
}
