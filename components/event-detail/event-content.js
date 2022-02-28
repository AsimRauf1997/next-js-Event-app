import styles from '../../styles/event-content.module.css';

function EventContent(props) {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
