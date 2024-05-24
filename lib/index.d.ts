import { InputHTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import { authFormSchema } from "./utils";


declare type signTypeProp =  {
    signType: string;
}


const formSchema = authFormSchema('sign-up')

declare interface customForm{
    name: Field<z.infer<typeof formSchema>>;
    label: string;
    type?: string;
    form: UseFormReturn;
    placehoder: InputHTMLAttributes<HTMLInputElement>
  
  }

type classNameProps = {
    className?: string;
}