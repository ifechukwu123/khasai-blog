import { useState } from "react";
import MenuIcon from "../../assets/icons/menu.svg";
import SearchIcon from "../../assets/icons/search.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="header">
			<Link to="/" className="header__logo">
				khasai makhulo
			</Link>

			{/* Mobile Menu */}
			<button
				aria-label={isOpen ? "Close menu options" : "Open menu options"}
				onClick={() => setIsOpen(!isOpen)}
				className="header__button header__button--mobile"
			>
				<img
					src={MenuIcon}
					alt=""
					aria-hidden="true"
					className="header__icon"
				/>
			</button>

			{/* Tablet & Desktop Navigation */}
			<nav className="nav" aria-label="Main Navigation">
				<ul className="nav__list" role="list">
					<li className="nav__item" role="listitem">
						<Link to="/blog" className="nav__link">
							blog
						</Link>
					</li>
					<li className="nav__item" role="listitem">
						<Link to="/about" className="nav__link">
							about
						</Link>
					</li>
					<li className="nav__item" role="listitem">
						<button
							aria-label="Search"
							className="header__button header__button--tablet"
						>
							<img
								src={SearchIcon}
								alt=""
								aria-hidden="true"
								className="header__icon"
							/>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
