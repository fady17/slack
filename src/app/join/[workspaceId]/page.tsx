// "use client";

// import { Button } from "@/components/ui/button";

// import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
// import { useJoin } from "@/features/workspaces/api/use-join";
// import { useWorkspaceId } from "@/hooks/use-workspace-id";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import OtpInput from "react-otp-input";
// import { toast } from "sonner";

// const JoinPage = () => {
//   const [otp, setOtp] = useState("");
//   const router = useRouter();
//   const handleCompelete = (value: string) => {
//     mutate(
//       { workspaceId, joinCode: value },
//       {
//         onSuccess: (id) => {
//           router.replace(`/workspace/${id}`);
//           toast.success("Workspace joined");
//         },
//         onError: () => {
//             toast.error("Failed to join workspace")
//         }
//       }
//     );
//   };

//   const workspaceId = useWorkspaceId();
//   const { mutate, isPending } = useJoin();
//   const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });
//   if (isLoading) {
//     return (
//       <div className="h-full flex items-center justify-center">
//         <Loader className="size-6 animate-spin text-muted-foreground" />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
//       <Image src={"/fady.jpg"} alt="fady" width={60} height={60} />
//       <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
//         <div className="flex flex-col gap-y-2 items-center justify-center">
//           <h1 className="text-2xl font-bold">Join {data?.name}</h1>
//           <p className="text-md text-muted-foreground">
//             Enter the workspace code to join
//           </p>
//         </div>
//         <OtpInput
//           shouldAutoFocus
//           containerStyle="flex gap-x-2 w-full p-5"
//           inputStyle={
//             "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-3xl font-medium text-gray-500"
//           }
//           value={otp}
//           onChange={setOtp}

//           numInputs={6}
//           renderSeparator={<span>-</span>}
//           renderInput={(props) => <input {...props} />}
//         />
//       </div>
//       {/* <div className="flex gap-x-4">
//         <Button onClick={handleCompelete} size={"lg"} variant={"outline"}>
//             submit
//         </Button>
//         </div> */}
//       <div className="flex gap-x-4">
//         <Button size={"lg"} variant={"outline"} asChild>
//           <Link href={"/"}>Back to home</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default JoinPage;

// "use client"
// import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
// import { useJoin } from "@/features/workspaces/api/use-join";
// import { useWorkspaceId } from "@/hooks/use-workspace-id";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { toast } from "sonner";
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";

// const FormSchema = z.object({
//   pin: z.string().min(6, {
//     message: "Your one-time password must be 6 characters.",
//   }),
// })

// export function InputOTPForm() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       pin: "",
//     },
//   })

// //   function onSubmit(data: z.infer<typeof FormSchema>) {
// //     toast({
// //       title: "You submitted the following values:",
// //       description: (
// //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
// //           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
// //         </pre>
// //       ),
// //     })
// //   }

//   const router = useRouter();
//   const handleCompelete = (value: string) => {
//     mutate(
//       { workspaceId, joinCode: value },
//       {
//         onSuccess: (id) => {
//           router.replace(`/workspace/${id}`);
//           toast.success("Workspace joined");
//         },
//         onError: () => {
//             toast.error("Failed to join workspace")
//         }
//       }
//     );
//   };

//   const workspaceId = useWorkspaceId();
//   const { mutate, isPending } = useJoin();
//   const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });
//   if (isLoading) {
//     return (
//       <div className="h-full flex items-center justify-center">
//         <Loader className="size-6 animate-spin text-muted-foreground" />
//       </div>
//     );
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="pin"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>One-Time Password</FormLabel>
//               <FormControl>
//                 <InputOTP maxLength={6} {...field}>
//                   <InputOTPGroup>
//                     <InputOTPSlot index={0} />
//                     <InputOTPSlot index={1} />
//                     <InputOTPSlot index={2} />
//                     <InputOTPSlot index={3} />
//                     <InputOTPSlot index={4} />
//                     <InputOTPSlot index={5} />
//                   </InputOTPGroup>
//                 </InputOTP>
//               </FormControl>
//               <FormDescription>
//                 Please enter the one-time password sent to your phone.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }

"use client";

import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
import { useJoin } from "@/features/workspaces/api/use-join";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// Define form schema
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const JoinPage = () => {
  // Initialize form with validation schema
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useJoin();
  const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });

  // Define handleComplete function to process OTP submission
  const handleCompelete = (value: string) => {
    mutate(
      { workspaceId, joinCode: value },
      {
        onSuccess: (id) => {
          router.replace(`/workspace/${id}`);
          toast.success("Workspace joined");
        },
        onError: () => {
          toast.error("Failed to join workspace");
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Attach handleSubmit to form's onSubmit, calling handleComplete with the 'pin' value
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    handleCompelete(data.pin); // Pass the OTP value to handleCompelete
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default JoinPage;
