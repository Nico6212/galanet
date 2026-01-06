
import { ArrowBigRight } from "lucide-react";

export default function Recherche() {
	return (
		<div className="w-full ">
			<label className="relative block">
				<input
					type="text"
					placeholder="recherche"
					className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-bleue-500 focus:ring-2 focus:ring-bleue-500"
				/>
				<span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
					<ArrowBigRight size={18} />
				</span>
			</label>
		</div>
	);
}