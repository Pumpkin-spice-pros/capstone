// 'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import calendarIcon from "../assets/calendar.png";
import userIcon from '../assets/user.png';
import brainIcon from '../assets/brain.png';
import logo from '../assets/S.png';
import styles from "../styles/Home.module.css";
import phoneLogo from '../assets/subtle-phone-logo.png';
import menuIcon from '../assets/hamburger-menu-icon.png';
import chat from "../assets/chat.png";
import { ChatGPT } from "@/components/chatGPT";

// added .env and prisma to gitignore
export default function MainLayout({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = React.useState(false);

	const openChat = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={styles.bodyEle}>
			<nav className={styles.webNav}>
				<Link href="/dashboard">
					<Image
						className={styles.logoInNav}
						src={logo}
						height={512}
						width={512}
						alt="Home"
					/>
				</Link>
				<Link href="/calendar">
					<Image
						className={styles.sideNavIcon}
						src={calendarIcon}
						height={512}
						width={512}
						alt="Calendar"
					/>
				</Link>
				<Link href="/view-habits">
					<Image
						className={styles.sideNavIcon}
						src={brainIcon}
						height={512}
						width={512}
						alt="Habits"
					/>
				</Link>
				<Link href="/profile/myhabits">
					<Image
						className={styles.sideNavIcon}
						src={userIcon}
						height={512}
						width={512}
						alt="Profile"
					/>
				</Link>
				{/* <button onClick={openChat}> */}
				<div>
					<Image
						onClick={openChat}
						className={styles.sideNavIcon}
						src={chat}
						height={512}
						width={512}
						alt="Chat"
					/>
				</div>
				{/* </button> */}
			</nav>
			{isOpen && <ChatGPT isOpen={isOpen} onClose={openChat} />}
			<nav className={styles.phoneNav}>
				<Image
					height={78}
					width={78}
					alt="menu"
					src={menuIcon}
					style={{
						position: "absolute",
						left: "0px",
						top: "15%",
						height: "70%",
						width: "15%",
						margin: "0px"
					}}
				/>
				<Image
					style={{
						height: "50%",
						width: "50%"
					}}
					src={phoneLogo}
					alt="logo"
				/>
			</nav>
			{children}
		</div>
	);
}
