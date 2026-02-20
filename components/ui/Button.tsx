import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={isLoading || props.disabled}
                className={cn(
                    // Base styles
                    "relative inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

                    // Variants
                    variant === 'primary' && "bg-black text-white hover:bg-gray-800 border border-transparent",
                    variant === 'outline' && "bg-transparent border border-black/10 hover:border-black text-black",
                    variant === 'ghost' && "bg-transparent hover:bg-black/5 text-black",
                    variant === 'link' && "bg-transparent underline-offset-4 hover:underline text-black p-0 h-auto",

                    // Sizes
                    size === 'sm' && "h-9 px-4 text-[10px]",
                    size === 'md' && "h-11 px-6 text-xs",
                    size === 'lg' && "h-14 px-8 text-sm",

                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
