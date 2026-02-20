import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, containerClassName, ...props }, ref) => {
        return (
            <div className={cn("group flex flex-col gap-2 relative", containerClassName)}>
                {label && (
                    <label className={cn(
                        "text-[10px] uppercase tracking-widest text-gray-400 transition-colors group-focus-within:text-black",
                        error && "text-red-500 group-focus-within:text-red-600"
                    )}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        "w-full bg-transparent border-b border-black/10 py-3 text-lg font-light outline-none transition-colors placeholder:text-gray-300 focus:border-black disabled:opacity-50 disabled:cursor-not-allowed",
                        error && "border-red-500 focus:border-red-600 placeholder:text-red-200",
                        className
                    )}
                    {...props}
                />
                {error && (
                    <span className="text-[10px] text-red-500 mt-1 absolute -bottom-5 left-0">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
