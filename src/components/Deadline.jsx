import React from "react";
import Button from "./UI/Button";

const Deadline = () => {
  return (
    <section id="deadline">
      <div className="wrapper">
        <h1>Ключевые даты</h1>
        <div className="container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470 470"
            className="calendar"
          >
            <path d="M462.5 425H7.5a7.5 7.5 0 0 0 0 15h455c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM462.5 455H7.5a7.5 7.5 0 0 0 0 15h455c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM462.5 30h-25v-7.5C437.5 10.093 427.406 0 415 0s-22.5 10.093-22.5 22.5V30h-75v-7.5C317.5 10.093 307.406 0 295 0s-22.5 10.093-22.5 22.5V30h-75v-7.5C197.5 10.093 187.407 0 175 0s-22.5 10.093-22.5 22.5V30h-75v-7.5C77.5 10.093 67.407 0 55 0S32.5 10.093 32.5 22.5V30h-25A7.5 7.5 0 0 0 0 37.5v365a7.5 7.5 0 0 0 7.5 7.5h455a7.5 7.5 0 0 0 7.5-7.5v-365a7.5 7.5 0 0 0-7.5-7.5zm-55-7.5c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v30c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-30zm-120 0c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v30c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-30zm-120 0c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v30c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-30zm-120 0c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v30c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-30zM32.5 45v7.5C32.5 64.907 42.593 75 55 75s22.5-10.093 22.5-22.5V45h75v7.5c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5V45h75v7.5c0 12.407 10.094 22.5 22.5 22.5s22.5-10.093 22.5-22.5V45h75v7.5c0 12.407 10.094 22.5 22.5 22.5s22.5-10.093 22.5-22.5V45H455v77.3H15V45h17.5zM15 395V137.3h440V395H15z" />
            <path d="M412 226.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM331 226.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM250 226.8h-30a7.5 7.5 0 0 0 0 15h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM169 226.8h-30a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM88 226.8H58a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM331 280.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM250 280.8h-30a7.5 7.5 0 0 0 0 15h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM169 280.8h-30a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM88 280.8H58a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM331 334.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM412 280.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM412 334.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM250 334.8h-30a7.5 7.5 0 0 0 0 15h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM169 334.8h-30a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM88 334.8H58a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM412 172.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM331 172.8h-30c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM250 172.8h-30a7.5 7.5 0 0 0 0 15h30c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM169 172.8h-30a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15zM88 172.8H58a7.5 7.5 0 0 0 0 15h30a7.5 7.5 0 0 0 0-15z" />
          </svg>
          <div className="left-side">
            <h4>до 10 октября 2022 года</h4>
            <p>
              Выслать научную статью (требования по оформлению в Информационном
              письме) для включения в сборник конференции (
              <b>РИНЦ</b>) и пройти онлайн
              регистрацию&nbsp;
              <a href="https://forum.ui.ranepa.ru/crt2022">
                https://forum.ui.ranepa.ru/crt2022
              </a>
              &nbsp; Материалы можно отправить на почту{" "}
              <span className="red">udolgashova@uriu.ranepa.ru</span>
            </p>
          </div>
        </div>
        <Button link={"https://forms.gle/SFaoJRiU1CS4Ni2h9"} text={"Регистрация"}/>
      </div>
    </section>
  );
};

export default Deadline;