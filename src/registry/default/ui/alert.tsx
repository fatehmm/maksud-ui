import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const alertDissmissButtonVariants = cva(
  'absolute right-2 top-2 rounded-md p-1 text-muted-foreground/80 hover:text-foreground ',
  {
    variants: {
      variant: {
        default: 'hover:bg-accent',
        destructive: 'hover:bg-destructive/10',
        success: 'hover:bg-success/10',
        warning: 'hover:bg-attention/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-surface/5 text-card-foreground',
        success:
          'bg-success/5 text-success border-success/30 [&>svg]:text-success *:data-[slot=alert-description]:text-success/90',
        warning:
          'bg-attention/5 text-attention border-attention/30 [&>svg]:text-attention *:data-[slot=alert-description]:text-attention/90',
        destructive:
          'bg-destructive/5 text-destructive border-destructive/30 [&>svg]:text-destructive *:data-[slot=alert-description]:text-destructive/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AlertProps extends React.ComponentProps<'div'>, VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

function Alert({
  className,
  variant,
  icon,
  dismissible,
  onDismiss,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      data-slot='alert'
      role='alert'
      className={cn(alertVariants({ variant }), className, 'shadow')}
      {...props}
    >
      {icon}
      <div className='col-start-2'>{children}</div>
      {dismissible ? (
        <button
          type='button'
          aria-label='Dismiss'
          onClick={onDismiss}
          className={cn(alertDissmissButtonVariants({ variant }))}
        >
          <X className='size-4' />
        </button>
      ) : null}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-title'
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-description'
      className={cn(
        'text-foreground col-start-2 grid justify-items-start gap-2 text-sm [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='alert-action' className={cn('col-start-2 mt-2', className)} {...props} />;
}

export { Alert, AlertAction, AlertDescription, AlertTitle };
