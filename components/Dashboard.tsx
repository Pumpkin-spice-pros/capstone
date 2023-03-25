import styles from "../styles/Home.module.css";

export default function Dashboard() {
	return (
		<div className={styles.mainPage}>
			<div className={styles.week}>
				<div className={styles.day}>S</div>
				<div className={styles.day}>M</div>
				<div className={styles.day}>T</div>
				<div className={styles.day}>W</div>
				<div className={styles.day}>T</div>
				<div className={styles.day}>F</div>
				<div className={styles.day}>S</div>
			</div>
			<div className={styles.mainHeader}>
				<h1>Today</h1>
			</div>
			<div className={styles.dailyHabitsList}>
				<h3>Morning</h3>
				<hr />
				<h3>Afternoon</h3>
				<hr />
				<h3>Evening</h3>
				<hr />
				<h3>Any Time</h3>
				<hr />
			</div>
		</div>
	);
}
