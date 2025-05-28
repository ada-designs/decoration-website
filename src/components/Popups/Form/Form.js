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

  // const handleSubmit = (e) => {
  //   e.target.reset();
  // };

  return (
    <form
      className={styles.form}
      action="https://formsubmit.co/el/rufozo"
      method="POST"
    >
      <div
        style={{
          display: "flex",
          gap: "6%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Captcha and redirect */}

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://decoration-website.vercel.app/"
        />

        <input
          style={{
            width: "48%",
            textTransform: "none",
          }}
          type="text"
          name="име"
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
          name="фамилия"
          placeholder={placeholders.family.toUpperCase()}
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
