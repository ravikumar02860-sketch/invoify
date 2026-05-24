/**
 * Accessible Image Component with SEO-optimized alt text
 * Usage: <AccessibleImage src="..." alt="..." title="..." />
 */

import Image, { ImageProps } from "next/image";

interface AccessibleImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  title?: string;
  caption?: string;
  loading?: "lazy" | "eager";
}

export default function AccessibleImage({
  alt,
  title,
  caption,
  loading = "lazy",
  ...props
}: AccessibleImageProps) {
  return (
    <figure className="my-6">
      <Image
        alt={alt}
        title={title || alt}
        loading={loading}
        className="rounded-lg"
        {...props}
      />
      {caption && (
        <figcaption className="text-sm text-slate-600 dark:text-slate-400 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Semantic heading component with proper h-tag management
 */
interface SemanticHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SemanticHeading({
  level,
  children,
  id,
  className = "",
}: SemanticHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClasses = {
    1: "text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white",
    2: "text-3xl font-bold mb-4 text-slate-900 dark:text-white",
    3: "text-2xl font-semibold mb-4 text-slate-900 dark:text-white",
    4: "text-xl font-semibold mb-3 text-slate-900 dark:text-white",
    5: "text-lg font-semibold mb-2 text-slate-900 dark:text-white",
    6: "font-semibold mb-2 text-slate-900 dark:text-white",
  };

  return (
    <Tag id={id} className={`${baseClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}

/**
 * Semantic article component with proper structure
 */
interface SemanticArticleProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  author?: string;
  publishDate?: string;
}

export function SemanticArticle({
  children,
  title,
  description,
  author,
  publishDate,
}: SemanticArticleProps) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <header className="mb-8">
        {publishDate && (
          <time dateTime={publishDate} className="text-sm text-slate-500 dark:text-slate-400">
            {new Date(publishDate).toLocaleDateString()}
          </time>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-slate-600 dark:text-slate-300">{description}</p>
        )}
        {author && (
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            By <strong>{author}</strong>
          </div>
        )}
      </header>
      <div className="text-slate-700 dark:text-slate-300">{children}</div>
    </article>
  );
}

/**
 * Semantic section component with proper heading hierarchy
 */
interface SemanticSectionProps {
  children: React.ReactNode;
  title?: string;
  level?: 2 | 3 | 4;
  id?: string;
}

export function SemanticSection({
  children,
  title,
  level = 2,
  id,
}: SemanticSectionProps) {
  return (
    <section id={id} className="mb-12">
      {title && <SemanticHeading level={level}>{title}</SemanticHeading>}
      {children}
    </section>
  );
}