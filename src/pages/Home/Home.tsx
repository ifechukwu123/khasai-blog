import { useNavigate } from "react-router-dom";
import LinkArrow from "../../assets/icons/top-right.svg";
import "./Home.scss";

export default function Home() {
	const navigate = useNavigate();
	const posts = [
		{
			id: 1,
			title: "What I Have Learned In 25 years",
			date: "12th July 2025",
			intro:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.",
			link: "https://www.google.com/",
		},
		{
			id: 2,
			title: "What I Have Learned In 25 years",
			date: "12th July 2025",
			intro:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.",
			link: "https://www.google.com/",
		},
		{
			id: 3,
			title: "What I Have Learned In 25 years",
			date: "12th July 2025",
			intro:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.",
			link: "https://www.google.com/",
		},
		{
			id: 4,
			title: "What I Have Learned In 25 years",
			date: "12th July 2025",
			intro:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.",
			link: "https://www.google.com/",
		},
		{
			id: 5,
			title: "What I Have Learned In 25 years",
			date: "12th July 2025",
			intro:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.",
			link: "https://www.google.com/",
		},
	];

	return (
		<main className="home">
			<section className="hero">
				<h1 className="hero__title">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris.
				</h1>
			</section>
			<section className="posts">
				<ul role="list" className="posts__list">
					{posts.map((post) => (
						<li
							key={post.id}
							role="listitem"
							className={
								post.id % 2 == 0
									? "posts__item posts__item--reverse"
									: "posts__item"
							}
						>
							<img
								src="https://placehold.co/16x9"
								alt="Picture of something related to the blog"
								className="posts__image"
							/>
							<div className="posts__info">
								<div className="posts__header">
									<h2 className="posts__title">{post.title}</h2>
									<span className="posts__date">{post.date}</span>
								</div>
								<p className="posts__intro">{post.intro}</p>
								<a href="google.com" className="posts__link">
									Read more <img src={LinkArrow} alt="" aria-hidden="true" />
								</a>
							</div>
						</li>
					))}
				</ul>
				<div className="posts__button-container">
					<button
						className="posts__button"
						onClick={() =>
							setTimeout(() => {
								navigate("/blog");
							}, 500)
						}
					>
						Check out more posts
					</button>
				</div>
			</section>
		</main>
	);
}
