import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/rossanodr.png"
          />
          <div className={styles.authorInfo}>
            <strong>Rossano Dala Rosa</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="12 de Janeiro as 8:13h" dateTime="2022-05-23 08:13:30">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
       <Comment />
      </div>
    </article>
  );
}
