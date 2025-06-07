import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import React from "react";
import { Link, redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
	try {
		const user = await account.get();

		if (user.$id) return redirect("/");
	} catch (error) {
		console.error("Error fetching user", error);
	}
}

const SignIn = () => {
	return (
		<main className="auth">
			<section className="size-full glassmorphism flex-center px-6">
				<div className="sign-in-card">
					<header className="header">
						<Link to="/" className="flex gap-2 items-center p-2">
							<img
								src="/assets/icons/logo.svg"
								alt="logo"
								className="size-[30px]"
							/>
							<h1 className="text-2xl p-28-bold font-bold">Vinatours</h1>
						</Link>
					</header>

					<article className="">
						<h2 className="p-28-semibold text-dark-100 text-center">
							Start Your Travel
						</h2>

						<p className="p-18-regular text-gray-100 text-center !leading-8">
							Sign in with Google to manage destinations, itineraries, and
							bookings, and user activity with ease.
						</p>
					</article>

					<ButtonComponent
						type="button"
						iconCss="e-search-icon"
						className="button-class !h-11 w-full"
						onClick={loginWithGoogle}
					>
						<img
							src="/assets/icons/google.svg"
							alt="google icon"
							className="size-5"
						/>

						<span className="p-18-semibold text-white">
							Sign in with Google
						</span>
					</ButtonComponent>
				</div>
			</section>
		</main>
	);
};

export default SignIn;
