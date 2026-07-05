import { conference } from "../data/site";

const Program = () => {
  return (
    <section id='program'>
      <div className="wrapper">
        <h1>Программа конференции</h1>
        <p>
          С программой конференции можно ознакомиться{" "}
          <a target="_blank" rel="noopener noreferrer" href={conference.programFile}>
            здесь
          </a>
        </p>
      </div>
    </section>
  );
};

export default Program;
