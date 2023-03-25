import AuthLayout from "@/layouts/AuthLayout";
import Head from "next/head";
import { useState } from "react";
import styles from '../styles/Layout.module.css'

export default function Auth() {
    const [loginDisplayed, setLoginDisplayed] = useState(true);
    const [signUpDisplayed, setSignUpDisplayed] = useState(false);
	return (
		<AuthLayout>
			<Head>
				<title>Login</title>
			</Head>
			<div className="h-1/8 w-100 top-20 flex justify-around">
				<div
					onClick={() => {
						setLoginDisplayed(true);
						setSignUpDisplayed(false);
					}}>
					<h2 id={loginDisplayed ? styles.lightUp : styles.darken}>Login</h2>
				</div>
				<div
					onClick={() => {
						setLoginDisplayed(false);
						setSignUpDisplayed(true);
					}}>
					<h2 id={signUpDisplayed ? styles.lightUp : styles.darken}>Sign Up</h2>
				</div>
			</div>
			<section
				id={loginDisplayed ? styles.authDisplayed : styles.authHidden}
				className="w-3/4 mx-auto flex flex-col gap-10">
				<div className="title">
					<h1 className="text-gray-800 text-4xl font-bold py-4">Login</h1>
					<p className="w-3/4 mx-auto text-gray-400"></p>
				</div>
				<form className="flex flex-col gap-5">
					<div className="input-group">
						<input type="text" name="email" placeholder="Email" />
					</div>
					<div className="input-group">
						<input type="password" name="password" placeholder="Password" />
					</div>
					<div className="input-button">
						<button type="submit">Login</button>
					</div>
				</form>
			</section>
			<section
				id={signUpDisplayed ? styles.authDisplayed : styles.authHidden}
				className="w-3/4 mx-auto flex flex-col gap-10">
				<div className="title">
					<h1 className="text-gray-800 text-4xl font-bold py-4">Sign Up</h1>
					<p className="w-3/4 mx-auto text-gray-400"></p>
				</div>
				<form className="flex flex-col gap-5">
					<div className="input-group">
						<input type="text" name="First name" placeholder="First name" />
					</div>
					<div className="input-group">
						<input type="text" name="Last name" placeholder="Last name" />
					</div>
					<div className="input-group">
						<input type="text" name="email" placeholder="Email" />
					</div>
					<div className="input-group">
						<input type="password" name="password" placeholder="Password" />
					</div>
					<div className="input-button">
						<button type="submit">Sign Up</button>
					</div>
				</form>
			</section>
			<section className="w-3/4 mx-auto flex flex-col gap-10">
				<div className="input-button">Sign In with Google</div>
				<div className="input-button">Sign In with GitHub</div>
			</section>
		</AuthLayout>
	);
}
