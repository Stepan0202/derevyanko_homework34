import Button from 'react-bootstrap/Button';
 function Header(props){
    return (
        <header className="header">
            <div className="header__logo">LOGO<br/>GOGO</div>
            <div className="header__menu">
            </div>
            <div className="header__buttons">
                <Button className="btn" variant="primary" data-goto="usersTable" onClick={props.setPage}>MAIN PAGE</Button>
                <Button className="btn" variant="primary" id="addUser" data-goto="addUser" onClick={props.setPage}>ADD USER</Button>
            </div>
        </header>

    )
 }
 export default Header;