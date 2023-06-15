import React from "react";

export default function generateSkeletonArray(size) {
	const skeletonHtml = (index) => (
		<div key={index} className="animate-pulse space-y-4">
			<div className="bg-gray-300 rounded-lg h-32"></div>
			<div className="flex space-x-4 items-center">
				<div className="flex-1 space-y-2 py-1">
					<div className="h-4 bg-gray-300 rounded w-3/4"></div>
					<div className="space-y-2">
						<div className="h-4 bg-gray-300 rounded"></div>
						<div className="h-4 bg-gray-300 rounded w-5/6"></div>
					</div>
				</div>
			</div>
		</div>
	);

	const skeletonArray = Array.from({ length: size }, (_, index) =>
		skeletonHtml(index)
	);
	return skeletonArray;
}
