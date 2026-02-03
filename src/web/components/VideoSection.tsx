import React from "react";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
	children: React.ReactNode;
	overlayClassName?: string;
	containerClassName?: string;
	id?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
	children,
	overlayClassName,
	containerClassName,
	id,
}) => {
	return (
		<section
			id={id}
			className={cn(
				"relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background",
				containerClassName,
			)}
		>
			<div className="absolute inset-0 z-0">
				<div
					className={cn(
						"absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/80 z-10",
						overlayClassName,
					)}
				/>
				<div className="absolute inset-0 bg-background/30 z-10" />
			</div>

			<div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
				{children}
			</div>
		</section>
	);
};
