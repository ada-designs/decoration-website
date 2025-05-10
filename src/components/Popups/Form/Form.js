import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [placeholders, setPlaceholders] = useState({
    name: "Име",
    family: "Фамилия",
    question: "Попитайте вашите въпроси тук",
  });

  const handleFocus = (field) => {
    setPlaceholders((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, defaultText) => {
    setPlaceholders((prev) => ({
      ...prev,
      [field]: prev[field] === "" ? defaultText : prev[field],
    }));
  };

  return (
    <form className={styles.form}>
      <div
        style={{
          display: "flex",
          gap: "6%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "48%",
            textTransform: "none",
          }}
          type="text"
          placeholder={placeholders.name.toUpperCase()}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name", "Име")}
          required
        />
        <input
          style={{
            width: "48%",
            textTransform: "none",
          }}
          type="text"
          placeholder={placeholders.family.toUpperCase()}
          onFocus={() => handleFocus("family")}
          onBlur={() => handleBlur("family", "Фамилия")}
          required
        />
      </div>
      <input
        type="email"
        placeholder="ИМЕЙЛ"
        style={{ width: "100%" }}
        required
      />
      <textarea
        placeholder={placeholders.question.toUpperCase()}
        style={{
          textTransform: "none",
          textAlign: "center",
        }}
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
  );
}
