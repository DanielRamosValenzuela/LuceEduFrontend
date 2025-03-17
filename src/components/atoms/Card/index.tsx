import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadcnCard
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'growth' | 'creative' | 'wisdom';
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const variantStyles = {
  default: 'bg-white border-neutral-200',
  primary: 'bg-primary-50 border-primary-200',
  growth: 'bg-growth-50 border-growth-200',
  creative: 'bg-creative-50 border-creative-200',
  wisdom: 'bg-wisdom-50 border-wisdom-200'
};

export const Card = ({
  className,
  variant = 'default',
  title,
  description,
  footer,
  children,
  ...props
}: CardProps) => {
  return (
    <ShadcnCard className={cn(variantStyles[variant], 'border shadow-sm', className)} {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadcnCard>
  );
};
