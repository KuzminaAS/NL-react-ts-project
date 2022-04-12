export const fields:
  Array<{
        id: number,
        name: string,
        type?: string,
        placeholder?: string,
        errorMessage?: string,
        pattern?: string,
        required?: boolean
  }
> = Array(
  {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Представьтесь пожалуйста",
      errorMessage: "Введите имя. Имя должно начинаться из одной заглавной буквы и состоять не менее чем из двух букв",
      pattern: "^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Введите ваш e-mail",
      errorMessage: "Введите e-mail. Должен быть валидный e-mail адрес!",
      required: true,
    }
)

