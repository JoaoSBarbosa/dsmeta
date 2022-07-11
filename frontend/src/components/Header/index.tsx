import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por:
          <a
            href="https://www.linkedin.com/in/joao-da-silva-barbosa/"
            target="_blank"
          >
            @João Barbosa
          </a>
        </p>
        <p>
          GitHub:
          <a href="https://github.com/JoaoSBarbosa" target="_blank">
            @JoaoSBarbosa
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header