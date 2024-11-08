// "use client";

// import { Button } from "@/components/ui/button";

// import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
// import { useJoin } from "@/features/workspaces/api/use-join";
// import { useWorkspaceId } from "@/hooks/use-workspace-id";
// import { cn } from "@/lib/utils";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// import VerificationInput from "react-verification-input";
// import { toast } from "sonner";

// const JoinPage = () => {
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
//           toast.error("Failed to join workspace");
//         },
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
//         <VerificationInput
//           onComplete={handleCompelete}
//           length={6}
//           classNames={{
//             container: cn(
//               "flex gap-x-2 w-full p-5",
//               isPending && "opacity-50 cursor-not-allowed"
//             ),
//             character:
//               "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-3xl font-medium text-gray-500",
//             characterInactive: "bg-muted",
//             characterSelected: "bg-white text-black",
//             characterFilled: "bg-white text-black",
//           }}
//           autoFocus
//         />
//       </div>

//       <div className="flex gap-x-4">
//         <Button size={"lg"} variant={"outline"} asChild>
//           <Link href={"/"}>Back to home</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default JoinPage;

// "use client";

// import { Button } from "@/components/ui/button";
// import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";

// import { useJoin } from "@/features/workspaces/api/use-join";
// import { useWorkspaceId } from "@/hooks/use-workspace-id";
// import { cn } from "@/lib/utils";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { toast } from "sonner";
// import { Input } from "@/components/ui/input";

// const JoinPage = () => {
//   const router = useRouter();
//   const [joinCode, setJoinCode] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const workspaceId = useWorkspaceId();
//   const { mutate, isPending } = useJoin();
//   const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const result = await mutate(
//         { workspaceId, joinCode },
//         {
//           throwError: true,
//         }
//       );

//       if (result) {
//         router.replace(`/workspace/${result}`);
//         toast.success("Workspace joined successfully");
//       } else {
//         setError("Failed to join workspace. Please check your join code.");
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         if (error.message === "Invalid join code") {
//           setError("Invalid join code. Please check and try again.");
//         } else {
//           setError(error.message);
//         }
//       } else {
//         setError("An unexpected error occurred");
//       }
//       toast.error("Failed to join workspace");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="h-full flex items-center justify-center">
//         <Loader className="size-6 animate-spin text-muted-foreground" />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
//       <Image src="/fady.jpg" alt="fady" width={60} height={60} />
//       <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
//         <div className="flex flex-col gap-y-2 items-center justify-center">
//           <h1 className="text-2xl font-bold">Join {data?.name}</h1>
//           <p className="text-md text-muted-foreground">
//             Enter the workspace code to join
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="w-full">
//           <Input
//             value={joinCode}
//             onChange={(e) => setJoinCode(e.target.value)}
//             placeholder="Enter 6-digit code"
//             maxLength={6}
//             className={cn(
//               "text-center text-2xl",
//               isPending && "opacity-50 cursor-not-allowed"
//             )}
//             disabled={isPending}
//           />
//           {error && (
//             <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
//           )}
//           <Button
//             type="submit"
//             className="mt-4 w-full"
//             disabled={joinCode.length !== 6 || isPending}
//           >
//             {isPending ? "Joining..." : "Join Workspace"}
//           </Button>
//         </form>
//       </div>
//       <div className="flex gap-x-4">
//         <Button size="lg" variant="outline" asChild>
//           <Link href="/">Back to home</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default JoinPage;

// "use client";

// import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
// import { useJoin } from "@/features/workspaces/api/use-join";
// import { useWorkspaceId } from "@/hooks/use-workspace-id";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState, useRef, useEffect } from "react";
// import { toast } from "sonner";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";

// const formSchema = z.object({
//   otp: z.string().length(6, {
//     message: "Your join code must be 6 characters.",
//   }),
// });

// const JoinPage = () => {
//   const router = useRouter();
//   const [error, setError] = useState<string | null>(null);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   const workspaceId = useWorkspaceId();
//   const { mutate, isPending } = useJoin();
//   const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       otp: "",
//     },
//   });

//   const handleComplete = async (value: string) => {
//     setError(null);

//     try {
//       const result = await mutate(
//         { workspaceId, joinCode: value },
//         {
//           throwError: true,
//         }
//       );

//       if (result) {
//         router.replace(`/workspace/${result}`);
//         toast.success("Workspace joined successfully");
//       } else {
//         setError("Failed to join workspace. Please check your join code.");
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         if (error.message === "Invalid join code") {
//           setError("Invalid join code. Please check and try again.");
//         } else if (error.message === "Already a member of this workspace") {
//           setError("You are already a member of this workspace.");
//           toast.info("You're already a member of this workspace");
//         } else {
//           setError(error.message);
//         }
//       } else {
//         setError("An unexpected error occurred");
//       }
//       toast.error("Failed to join workspace");
//     }
//   };

//   const handleInputChange = (index: number, value: string) => {
//     const newOtp = form.getValues("otp").split("");
//     newOtp[index] = value;
//     const updatedOtp = newOtp.join("");
//     form.setValue("otp", updatedOtp);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }

//     if (updatedOtp.length === 6) {
//       handleComplete(updatedOtp);
//     }
//   };

//   const handleKeyDown = (
//     index: number,
//     e: React.KeyboardEvent<HTMLInputElement>
//   ) => {
//     if (e.key === "Backspace" && !form.getValues("otp")[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   useEffect(() => {
//     inputRefs.current[0]?.focus();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="h-full flex items-center justify-center">
//         <Loader className="size-6 animate-spin text-muted-foreground" />
//       </div>
//     );
//   }

//   return (
//     <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
//       <Image src="/fady.jpg" alt="fady" width={60} height={60} />
//       <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
//         <div className="flex flex-col gap-y-2 items-center justify-center">
//           <h1 className="text-2xl font-bold">Join {data?.name}</h1>
//           <p className="text-md text-muted-foreground">
//             Enter the workspace code to join
//           </p>
//         </div>
//         <Form {...form}>
//           <form className="w-full space-y-6">
//             <FormField
//               control={form.control}
//               name="otp"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Join Code</FormLabel>
//                   <FormControl>
//                     <div className="flex gap-2">
//                       {[0, 1, 2, 3, 4, 5].map((index) => (
//                         <Input
//                           key={index}
//                           type="text"
//                           maxLength={1}
//                           className="w-10 h-10 text-center text-lg"
//                           value={field.value[index] || ""}
//                           onChange={(e) =>
//                             handleInputChange(index, e.target.value)
//                           }
//                           onKeyDown={(e) => handleKeyDown(index, e)}
//                           ref={(el) => (inputRefs.current[index] = el)}
//                           disabled={isPending}
//                         />
//                       ))}
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             {error && (
//               <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
//             )}
//           </form>
//         </Form>
//       </div>
//       <div className="flex gap-x-4">
//         <Button size="lg" variant="outline" asChild>
//           <Link href="/">Back to home</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default JoinPage;

"use client";

import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace info";
import { useJoin } from "@/features/workspaces/api/use-join";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  otp: z.string().length(6, {
    message: "Your join code must be 6 characters.",
  }),
});

const JoinPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useJoin();
  const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });
  const isMember = useMemo(() => data?.isMember, [data?.isMember]);
  useEffect(() => {
    if (isMember) {
      router.push(`/workspace/${workspaceId}`);
    }
  }, [isMember, router, workspaceId]);

  const handleComplete = async (value: string) => {
    setError(null);

    try {
      const result = await mutate(
        { workspaceId, joinCode: value },
        {
          throwError: true,
        }
      );

      if (result) {
        router.replace(`/workspace/${result}`);
        toast.success("Workspace joined successfully");
      } else {
        setError("Failed to join workspace. Please check your join code.");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Invalid join code") {
          setError("Invalid join code. Please check and try again.");
        } else if (error.message === "Already a member of this workspace") {
          setError("You are already a member of this workspace.");
          toast.info("You're already a member of this workspace");
        } else {
          setError(error.message);
        }
      } else {
        setError("An unexpected error occurred");
      }
      toast.error("Failed to join workspace");
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newOtp = form.getValues("otp").split("");
    newOtp[index] = value;
    const updatedOtp = newOtp.join("");
    form.setValue("otp", updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (updatedOtp.length === 6) {
      handleComplete(updatedOtp);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !form.getValues("otp")[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  //
  // const handlePaste = (e: React.ClipboardEvent) => {
  //   e.preventDefault();
  //   const pastedData = e.clipboardData.getData("text");
  //   const cleanedData = pastedData.replace(/\D/g, "").slice(0, 6);
  //   form.setValue("otp", cleanedData);

  //   cleanedData.split("").forEach((char, index) => {
  //     if (inputRefs.current[index]) {
  //       inputRefs.current[index]!.value = char;
  //     }
  //   });

  //   if (cleanedData.length === 6) {
  //     handleComplete(cleanedData);
  //   } else {
  //     inputRefs.current[cleanedData.length]?.focus();
  //   }
  // };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <Image src="/fady.jpg" alt="fady" width={60} height={60} />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">Join {data?.name}</h1>
          <p className="text-md text-muted-foreground">
            Enter the workspace code to join
          </p>
        </div>
        <Form {...form}>
          <form className="w-full space-y-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Join Code</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <Input
                          key={index}
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 text-center text-lg"
                          value={field.value[index] || ""}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          // onPaste={handlePaste}
                          ref={(el) => {
                            inputRefs.current[index] = el as HTMLInputElement;
                          }}
                          disabled={isPending}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
            )}
          </form>
        </Form>
      </div>
      <div className="flex gap-x-4">
        <Button size="lg" variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default JoinPage;
