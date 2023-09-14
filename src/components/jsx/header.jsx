import Button from 'react-bootstrap/Button';
 function Header(props){
    return (
        <header className="header">
            <div className="header__logo">LOGO<br/>GOGO</div>
            <div className="header__menu">
            </div>
            <div className="header__buttons">
                <Button className="btn" variant="primary" id="addUser" onclick={props.goToForm}>ADD USER</Button>
            </div>
        </header>      
    )
 }
 export default Header;