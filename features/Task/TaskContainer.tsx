import styles from "@/styles/Task/TaskContainer.module.css";

export default function TaskContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
