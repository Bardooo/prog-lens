import './scss/App.scss';

function App() {
  return (
    <div className="app">
      <div className="header">
        <ul className="header__list">
          <li className="header__list-item">Файл</li>
          <li className="header__list-item">Процессы</li>
          <li className="header__list-item">Режим</li>
          <li className="header__list-item">Играть</li>
          <li className="header__list-item">Выход</li>
        </ul>
      </div>
      <div className="body">
        <div className="body__left">
          <div className="body__left-header">
            <h4 className="body__left-title">Таблица событий</h4>
            <h4 className="body__left-time">
              Текущее время <span>0</span>
            </h4>
          </div>
          <div className="body__left-main"></div>
        </div>
        <div className="body__right">
          <h4 className="body__right-title">Таблица процессов</h4>
          <div className="body__right-main"></div>
        </div>
      </div>
      <ul className="footer">
        <li className="footer__button">Изменить время</li>
        <li className="footer__button">Сортировка событий</li>
        <li className="footer__button">Выбрать следующее текущее</li>
        <li className="footer__button">Обработать текущее событие</li>
        <li className="footer__button">Добавить шаг другого процесса</li>
      </ul>
    </div>
  );
}

export default App;
