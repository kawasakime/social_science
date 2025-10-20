// import ProgramFile from '../assets/ПРОГРАММА_15.10.2025.pdf'


const Program = () => {
  return (
    <section id='program'>
      <div className="wrapper">
        <h1>Программа конференции</h1>
        <p>
          С программой конференции можно ознакомиться{" "}
          <a target="_blank" rel="noopener noreferrer" href={'/assets/ПРОГРАММА_15.10.2025.pdf'}>
            здесь
          </a>
        </p>
      </div>
    </section>
  );
};

export default Program;
