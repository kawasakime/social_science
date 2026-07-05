import { conference } from "../data/site";

const Program = () => {
  return (
    <section id="program">
      <div className="wrapper">
        <div className="program-card">
          <div>
            <span className="program-card__label">PDF</span>
            <h1>Программа конференции</h1>
            <p>Актуальная программа конференции доступна для просмотра и скачивания.</p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={conference.programFile}>
            Открыть программу
          </a>
        </div>
      </div>
    </section>
  );
};

export default Program;
