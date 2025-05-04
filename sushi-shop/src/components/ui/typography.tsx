import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Typography components for Sushi Shop
 * Uses the defined font families:
 * - Headings: Poppins (font-heading)
 * - Body: Inter (font-sans)
 * - Japanese terms: Noto Sans JP (font-japanese)
 */

/**
 * Heading 1 component
 */
export function H1({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight font-heading text-foreground lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

/**
 * Heading 2 component
 */
export function H2({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight font-heading text-foreground first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

/**
 * Heading 3 component
 */
export function H3({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight font-heading text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Heading 4 component
 */
export function H4({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight font-heading text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

/**
 * Paragraph component
 */
export function P({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 text-foreground [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Lead paragraph component (larger, more prominent)
 */
export function Lead({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xl text-muted-foreground font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Large text component
 */
export function Large({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Small text component
 */
export function Small({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </small>
  );
}

/**
 * Muted text component (less prominent)
 */
export function Muted({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Japanese text component (uses Noto Sans JP font)
 */
export function Japanese({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("font-japanese", className)}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Blockquote component
 */
export function Blockquote({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-primary pl-6 italic text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

/**
 * Ordered list component
 */
export function OrderedList({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
      {...props}
    >
      {children}
    </ol>
  );
}

/**
 * Unordered list component
 */
export function UnorderedList({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

/**
 * List item component
 */
export function ListItem({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("", className)}
      {...props}
    >
      {children}
    </li>
  );
}

/**
 * Inline code component
 */
export function InlineCode({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

/**
 * Section header component (with optional description)
 */
export function SectionHeader({
  title,
  description,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <H3>{title}</H3>
      {description && <Muted>{description}</Muted>}
    </div>
  );
}
