import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="contact">
				<span className="contact__title">connect</span>
				<ul role="list" className="contact__list">
					<li role="listitem">
						<a
							href="https://www.goodreads.com/user/show/86319226-khasai"
							target="_blank"
							className="contact__link"
						>
							goodreads
						</a>
					</li>
					<li role="listitem">.</li>
					<li role="listitem">
						<a
							href="https://substack.com/@khasayi?"
							target="_blank"
							className="contact__link"
						>
							substack
						</a>
					</li>
					<li role="listitem">.</li>
					<li role="listitem">
						<a
							href="mailto:khasaimm@gmail.com"
							target="_blank"
							className="contact__link"
						>
							email
						</a>
					</li>
					<li role="listitem">.</li>
					<li role="listitem">
						<a
							href="https://www.linkedin.com/in/kmakhulo/"
							target="_blank"
							className="contact__link"
						>
							linkedin
						</a>
					</li>
				</ul>
			</div>
			<span>
				Designed by{" "}
				<a href="ifeonuorah.com" className="contact__link">
					Ife Onuorah
				</a>
				{" <3"}
			</span>
		</footer>
	);
}
