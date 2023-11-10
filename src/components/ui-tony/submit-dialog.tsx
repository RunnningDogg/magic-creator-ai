"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import { SubmitGPTsForm } from "./submit-form";
import Link from "next/link";

export function SubmitDialog() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold text-blue-500">
          Submit GPTs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <span className="text-blue-400">Submit GPTs</span>
          </DialogTitle>
          <DialogDescription>
            Share Your GPTs and Spread the Word!
          </DialogDescription>
        </DialogHeader>

        {/* github issue */}
        <Link
          href="https://github.com/RunnningDogg/GPTs-Store/issues/1"
          target="_blank"
          className="underline underline-offset-2 hover:text-blue-500"
        >
          Via Github Issue
        </Link>

        {/* 提交表格 */}
        <SubmitGPTsForm
          loading={loading}
          setLoading={setLoading}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
}
