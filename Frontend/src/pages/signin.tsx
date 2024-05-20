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
import { Input } from "@/components/ui/input";
import { SigninForm } from "@/lib/validation";
import { Link } from "react-router-dom";
import UseLogin from "@/hooks/useLogin";

const signin = () => {
  const { loginUser } = UseLogin();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninForm>>({
    resolver: zodResolver(SigninForm),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SigninForm>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    loginUser(values);
  }

  return (
    <section className="flex flex-col flex-1 justify-center items-center py-10">
      <Form {...form}>
        <div className="flex flex-col justify-center py-10">
          <img
            src="/public/logo.svg"
            alt="logo"
            className="relative left-12"
            width={150}
          />
          <h2 className="pt-5 mt-2 font-semibold">Create an Account</h2>
          <p className="text-[15px] text-purple-600">
            to use InstaGame Enter Account Details
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-purple-600 hover:border-blue-600"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-purple-600 hover:border-blue-600"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-purple-600 hover:bg-blue-600"
              type="submit"
            >
              Signin
            </Button>
            <p className="ml-2 ">
              Dont have an account?
              <Link
                to={"/signup"}
                className="px-2 text-purple-600 underline hover:text-blue-600"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </section>
  );
};

export default signin;
