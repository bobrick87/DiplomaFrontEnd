import './NotFound.css'

const NotFound = () => {
    return (
        <div className="section">
            <h1 className="error">404</h1>
            <div className="page">Ooops!!! Сторінку не знайдено!</div>
            <a className="back-home" href="#!">Додому</a>
        </div>
    )
}

export default NotFound;