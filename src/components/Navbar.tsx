import Button from "./Button";
import Recherche from "./Recherche";
import Logo from "./Logo"; export default function Navbar() { 
    return ( 
    <nav className="flex items-center justify-between gap-2 p-4 shadow"> 
    <Logo /> 
    <Recherche />
    <Button />
    </nav> ); }