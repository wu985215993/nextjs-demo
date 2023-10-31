import Link from "next/link";
import { useRouter } from "next/router";
import styles from './index.module.css'
export default () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <img src="/docker.webp"></img>
    <ul>
      <li>
        <Link href="/">首页</Link>
      </li>
      <li>
        <Link href="/movies/[id]" as="/movies/3">
          电影详情3
        </Link>
      </li>
      <li>
        <button
          onClick={() => router.push("/movies/[...params]", "/movies/3/a/s")}
        >
          跳转到 [...params].jsx
        </button>
      </li>
    </ul>
    </div>
  );
};
