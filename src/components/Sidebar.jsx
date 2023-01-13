import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
      />
      <div className={styles.profile}>
        <Avatar className={styles.avatar} src="https://github.com/rossanodr.png" />

        <strong>Rossano Dala Rosa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
        <PencilLine size={20} />
        Editar seu perfil</a>
      </footer>
    </aside>
  );
}
