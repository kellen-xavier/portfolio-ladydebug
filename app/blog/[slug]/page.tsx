import { notFound } from 'next/navigation';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { baseUrl } from 'app/sitemap';
import styles from 'app/components/styles/Content.module.css';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
<<<<<<< HEAD
=======
  await params;
>>>>>>> main
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  let content;

  try {
    // Se `post.content` já contém o conteúdo Markdown ou MDX
    if (post.metadata.format === 'mdx') {
      // Processa o conteúdo MDX
      const mdxSource = await serialize(post.content);
      content = <MDXRemote {...mdxSource} />;
    } else {
      // Processa o conteúdo Markdown
      const processedContent = await remark().use(html).process(post.content);
      const contentHtml = processedContent.toString();
      content = <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
    }
  } catch (error) {
    throw new Error(`Erro ao processar o conteúdo: ${error.message}`);
  }

  return (
    <section className={styles.container}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className={styles.title}>{post.metadata.title}</h1>
      <div className={styles.dateContainer}>
        <p className={styles.date}>{formatDate(post.metadata.publishedAt)}</p>
      </div>
      <article className={styles.content}>
<<<<<<< HEAD
        {/* Renderiza o conteúdo processado */}
        {content}
=======
        <CustomMDX source={post.content} className={styles.prose} />
>>>>>>> main
      </article>
    </section>
  );
}
