"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/infotech/about"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							회사소개
						</Link>
						<Link
							href="https://infotech04.notion.site/2114085b1fa1416d83fc83863d8fea60?v=24bf3d44fffa47bb87408adbdf9404ee"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							target="_blank"
						>
							제품소개
						</Link>
						<Link
							href="https://gallery.infotech04.com/"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							target="_blank"
						>
							갤러리
						</Link>
						<Link
							href="/infotech.pdf"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							target="_blank"
						>
							카달로그
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							문의
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />

					</Link>
				</div>
			</div>
		</header>
	);
};
