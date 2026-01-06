import Liaison from "./Liaison";
import Vider from "./Vider";

export default function Button() {
	return (
        <div className="flex items-center gap-2">
            <Liaison />
            <Vider />
        </div>
    );
}   