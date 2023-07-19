import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Calculator from "@/components/Calculator";
import FooterComponent from "src/components/FooterComponent";
import HeaderComponent from "src/components/HeaderComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>React Calculator</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={` ${inter.className} d-flex flex-column`}>
				<HeaderComponent />
				<Calculator />

				<FooterComponent
					name="Lex Oxales"
					fbLink="https://www.facebook.com/lex.oxales"
					igLink="https://www.instagram.com/_jowsep_/"
					githubLink="https://github.com/ajoxales"
				/>
			</main>
		</>
	);
}
