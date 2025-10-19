import { useNavigate } from "react-router-dom";
import LinkArrow from "../../assets/icons/top-right.svg";
import "./Home.scss";
import { useState } from "react";

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

	const intros = [
		{
			id: 1,
			name: "Kasai",
			pronunciation: "ha-sa-yi",
			title: "not my name",
			description: [
				"as a young school girl, i was told i had a difficult name. the mere act of reading it was a task. teachers contorted their faces, emptiness in their eyes during the first roll call. i felt embarrassed and ashamed to correct them after I gave the right pronounciation and they decided what they wanted to hear.",
				"few people in my life still call me Kasai. it signifies an innocent period of my life where i was afraid to take up space.",
			],
		},
		{
			id: 2,
			name: "Kasai",
			pronunciation: "ha-sa-yi",
			title: "a communal name",
			description: [
				"I accept this pronunciation if you are Ethiopian, or Congolese. I feel so pan-African, so in the fray.",
			],
		},
		{
			id: 3,
			name: "Khasayi",
			pronunciation: "ha-sa-yi",
			title: "a spiritual name",
			description: [
				"did you know that when a woman is pregnant with a xx embryo, the ovaries of the fetus with all the eggs it will have over it’s entire life are present?",
				"i was named after my father’s mother’s mother. of significance because culturally it is one a sign of respect to respectable elders and a passing on of spirit. a permanent linkage to the past. a reincarnation.",
				"when i introduce myself in swahili, i add the extra syllable “yi”.",
			],
		},
		{
			id: 4,
			name: "Khasai",
			pronunciation: "ha-sa-yi",
			title: "a communal name",
			description: [
				"In the South African pronunciation, the h is silent. they recognize the name, there is no hesitation. people who read my name think it is south african and I think that is fucking cool.",
				"I once introduced myself to a Hispanic man and he said “oh! with a “j”… i’ve never felt so seen.",
				"i do tell people that the “k” is silent although it isn’t.",
			],
		},
		{
			id: 5,
			name: "Khasai",
			pronunciation: "ha-sa-yi",
			title: "my name",
			description: [
				"(kh) is a back fricative sound.",
				"a few definitions that people of varying intimacy have shared with me include “prayerful”. When I first heard this, i immediately knew that it was true.",
				"“Blood” which was an interesting one.",
				"“someone who makes others laugh” which i hope is true",
				"”dove”",
			],
		},
	];

	// to change to different intros
	const [value, setValue] = useState(3);
	const intro = intros.find((intro) => intro.id === value);

	return (
		<main className="home">
			<section className="hero">
				<h1 className="intro">
					<div className="intro__header">
						<span className="intro__title">{intro?.title}</span>{" "}
						<span>[{intro?.pronunciation}]</span>
					</div>
					<p className="intro__description">
						{intro?.description.map((sentence) => (
							<span>{sentence}</span>
						))}
					</p>
				</h1>
				<div className="hero__select">
					{intros.map((intro) => (
						<label
							key={intro.id}
							htmlFor={`${intro.id}`}
							className="hero__label"
						>
							<input
								type="radio"
								id={`${intro.id}`}
								name="intro"
								value={intro.name}
								checked={intro.id === value}
								onChange={() => {
									setValue(intro.id);
								}}
								className="hero__option"
							/>
							{intro.name}
						</label>
					))}
				</div>
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
