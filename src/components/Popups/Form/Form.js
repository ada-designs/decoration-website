import { useState } from "react";
import styles from "./Form.module.css"; // смени с твоя CSS файл

export default function Form() {
  const [thankYou, setThankYou] = useState(false);
  const [placeholders, setPlaceholders] = useState({
    name: "Име",
    family: "Фамилия",
    question: "Попитайте вашите въпроси тук",
  });

  const handleFocus = (field) => {
    setPlaceholders((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, defaultValue) => {
    setPlaceholders((prev) => ({
      ...prev,
      [field]: prev[field] === "" ? defaultValue : prev[field],
    }));
  };

  return !thankYou ? (
    <form
      className={styles.form}
      action="https://usebasin.com/f/6ee0e9d43c69"
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            setThankYou(true);
            form.reset();
          } else {
            alert("Нещо се обърка.");
          }
        } catch (error) {
          alert("Грешка при изпращане.");
          console.error(error);
        }
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "6%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <input
          style={{ width: "48%", textTransform: "none" }}
          type="text"
          name="име"
          placeholder={placeholders.name}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name", "Име")}
          required
        />
        <input
          style={{ width: "48%", textTransform: "none" }}
          type="text"
          name="фамилия"
          placeholder={placeholders.family}
          onFocus={() => handleFocus("family")}
          onBlur={() => handleBlur("family", "Фамилия")}
          required
        />
      </div>

      <input
        type="email"
        name="имейл"
        placeholder="ИМЕЙЛ"
        style={{ width: "100%" }}
        required
      />

      <textarea
        name="съобщение"
        placeholder={placeholders.question}
        style={{ textTransform: "none", textAlign: "center" }}
        onFocus={(e) => {
          e.target.style.textAlign = "left";
          handleFocus("question");
        }}
        onBlur={(e) => {
          if (e.target.value === "") e.target.style.textAlign = "center";
          handleBlur("question", "Попитайте вашите въпроси тук");
        }}
        maxLength="300"
        required
      ></textarea>

      <button
        type="submit"
        className="btn orange-btn"
        style={{ width: "200px" }}
      >
        Изпрати
      </button>
    </form>
  ) : (
    <h4 className={styles.thankYouMessage}>
      <b>
        Благодаря ви за съобщението! <br />
        Ще се свържа с вас скоро!
      </b>
    </h4>
  );
}
