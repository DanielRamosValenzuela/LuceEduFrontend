import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'growth' | 'creative' | 'wisdom' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const baseStyles = 'cursor-pointer transition-colors duration-200';

const variantStyles = {
  default: 'bg-neutral-900 text-white hover:bg-neutral-800',
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  growth: 'bg-growth-500 text-white hover:bg-growth-600',
  creative: 'bg-creative-500 text-white hover:bg-creative-600',
  wisdom: 'bg-wisdom-500 text-white hover:bg-wisdom-600',
  outline: 'border-2 border-neutral-200 hover:bg-neutral-100',
  ghost: 'hover:bg-neutral-100'
};

export const Button = ({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <ShadcnButton
      className={cn(baseStyles, variantStyles[variant], className)}
      size={size}
      {...props}
    />
  );
};
