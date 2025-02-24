"use client"

import {
    AlertDialog,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogFooter,
    AlertDialogContent
} from "@/components/ui/alert-dialog";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const router = useRouter();
    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Remove Document</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    Are you sure you want to remove this document?
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e)=> e.stopPropagation()}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={isRemoving}
                        onClick={(e) => {
                            // Remove document
                            e.stopPropagation();
                            setIsRemoving(true);
                            remove({ id: documentId })
                            .then(() => {
                                toast.success("Document removed")
                                router.push("/")
                            })
                            .catch(()=> toast.error("Failed to remove document"))
                            .finally(() => setIsRemoving(false));
                        }}
                    >
                        Remove
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>    
        )
}