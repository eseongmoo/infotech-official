"use client";
import { Map, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Phone size={20} />,
		href: "tel:070-4756-8378",
		label: "연락처",
		handle1: "T. 070-4756-8378",
		handle2: "F. 070-7614-3083",
		handle3: "M. 010-9165-6185",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:woodplan@hanmail.net",
		label: "이메일",
		handle: "woodplan@hanmail.net",
	},
	{
		icon: <Map size={20} />,
		href: "https://www.google.com/maps/place/2%EC%B8%B5+202%ED%98%B8,+124+Songha+1-gil,+Andong,+Gyeongsangbuk-do/data=!3m1!4b1!4m5!3m4!1s0x3566a0dfa323255d:0x43be93ef953dc40c!8m2!3d36.5677212!4d128.6934029?hl=en&entry=ttu",
		label: "주소",
		handle: "경상북도 안동시 송하1길 124, 2층 202호",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
									<span className="mt-4 lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display text-center">
										{socials.indexOf(s) === 0 ? (
											<p className="text-left">{s.handle1}<br/>{s.handle2}<br/>{s.handle3}</p>
											) : (
											s.handle
										)}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
