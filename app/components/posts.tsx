import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import styles from '../components/styles/Posts.module.css';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  const sortedBlogs = allBlogs.slice().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className={styles.container}>
      {sortedBlogs.map((post) => (
        <Link
          key={post.slug}
          className={styles.postLink}
          href={`/blog/${post.slug}`}
        >
          <div className={styles.postContent}>
            <p className={styles.postData}>
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className={styles.postTitle}>
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}