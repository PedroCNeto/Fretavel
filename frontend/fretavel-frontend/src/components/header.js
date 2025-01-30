import '../styles/header.css'

export default function Header() {
    return (
      <>
        <div className="header">
            <nav className="navBar">
                  <div className='navBarContent'>
                  <h2 className="titleNavBar">Fretavel</h2>
                  <div className='links'>
                    <a className="linkNavBar" href="#">Página Inicial</a>
                    <a className="linkNavBar" href="#">Fretes</a>
                    <a className="linkNavBar" href="#">Motoristas Livres</a>
                    <a className="linkNavBar" href="#">Ajuda</a>
                  </div>
                  <div className='userLinks'>
                    <a className="linkLogin" href="#">Login</a>
                    <a className="linkRegister" href="#">Registro</a>
                  </div>
                </div>

            </nav>
        </div>
      </>
    )
  }
