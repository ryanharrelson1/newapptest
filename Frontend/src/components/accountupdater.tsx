import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { ProfileForm } from "@/lib/validation";

const accountupdater = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof ProfileForm>>({
    resolver: zodResolver(ProfileForm),
    defaultValues: {
      file: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ProfileForm>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger className="mb-10 text-[20px] bg-purple-600 flex justify-center items-center rounded-full p-2 hover:bg-blue-600">
        <FaEdit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile pic</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="file"
                render={() => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl></FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default accountupdater;
