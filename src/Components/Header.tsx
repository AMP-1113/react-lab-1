import './Header.css'

interface Props {
    name: string;
}

function Header({name}: Props) {

    return (
        <div className="HeaderContainer">
            <h1 className="Header">Ice Cream Wars</h1>
            <h4>{name}</h4>
        </div>
    )
}

export default Header;