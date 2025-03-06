const frases = [
    {
        "dia": 1,
        "frase": "La vida es aquello que te pasa mientras estás ocupado haciendo otros planes.",
        "autor": "John Lennon"
    },
    {
        "dia": 2,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 3,
        "frase": "En tres palabras puedo resumir todo lo que he aprendido sobre la vida: sigue adelante.",
        "autor": "Robert Frost"
    },
    {
        "dia": 4,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 5,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 6,
        "frase": "No cuentes los días, haz que los días cuenten.",
        "autor": "Muhammad Ali"
    },
    {
        "dia": 7,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 8,
        "frase": "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "autor": "Albert Schweitzer"
    },
    {
        "dia": 9,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 10,
        "frase": "La única manera de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 11,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 12,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 13,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 14,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 15,
        "frase": "La única forma de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 16,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 17,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 18,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 19,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 20,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 21,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 22,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 23,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 24,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 25,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 26,
        "frase": "No cuentes los días, haz que los días cuenten.",
        "autor": "Muhammad Ali"
    },
    {
        "dia": 27,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 28,
        "frase": "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "autor": "Albert Schweitzer"
    },
    {
        "dia": 29,
        "frase": "La vida es aquello que te pasa mientras estás ocupado haciendo otros planes.",
        "autor": "John Lennon"
    },
    {
        "dia": 30,
        "frase": "En tres palabras puedo resumir todo lo que he aprendido sobre la vida: sigue adelante.",
        "autor": "Robert Frost"
    },
    {
        "dia": 31,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 32,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 33,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 34,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 35,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 36,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 37,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 38,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 39,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 40,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 41,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 42,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 43,
        "frase": "No cuentes los días, haz que los días cuenten.",
        "autor": "Muhammad Ali"
    },
    {
        "dia": 44,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 45,
        "frase": "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "autor": "Albert Schweitzer"
    },
    {
        "dia": 46,
        "frase": "La vida es aquello que te pasa mientras estás ocupado haciendo otros planes.",
        "autor": "John Lennon"
    },
    {
        "dia": 47,
        "frase": "En tres palabras puedo resumir todo lo que he aprendido sobre la vida: sigue adelante.",
        "autor": "Robert Frost"
    },
    {
        "dia": 48,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 49,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 50,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 51,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 52,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 53,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 54,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 55,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 56,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 57,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 58,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 59,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 60,
        "frase": "No cuentes los días, haz que los días cuenten.",
        "autor": "Muhammad Ali"
    },
    {
        "dia": 61,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 62,
        "frase": "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "autor": "Albert Schweitzer"
    },
    {
        "dia": 63,
        "frase": "La vida es aquello que te pasa mientras estás ocupado haciendo otros planes.",
        "autor": "John Lennon"
    },
    {
        "dia": 64,
        "frase": "En tres palabras puedo resumir todo lo que he aprendido sobre la vida: sigue adelante.",
        "autor": "Robert Frost"
    },
    {
        "dia": 65,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 66,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 67,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 68,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 69,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 70,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 71,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 72,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 73,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 74,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 75,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
{
        "dia": 76,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 77,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 78,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 79,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 80,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 81,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 82,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 83,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 84,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 85,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 86,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 87,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 88,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 89,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 90,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 91,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 92,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 93,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 94,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 95,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 96,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 97,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 98,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 99,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 100,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 101,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 102,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 103,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 104,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 105,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 106,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 107,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 108,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 109,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 110,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 111,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 112,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 113,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 114,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 115,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 116,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 117,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 118,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 119,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 120,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 121,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 122,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 123,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 124,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 125,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 126,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 127,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 128,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 129,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 130,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 131,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 132,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 133,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 134,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 135,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 136,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 137,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 138,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 139,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 140,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 141,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 142,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 143,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 144,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 145,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 146,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 147,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 148,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 149,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 150,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 151,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 152,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 153,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 154,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 155,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 156,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 157,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 158,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 159,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 160,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 161,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 162,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 163,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 164,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 165,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 166,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 167,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 168,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 169,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 170,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 171,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 172,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 173,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 174,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 175,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 176,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 177,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 178,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 179,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 180,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 181,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 182,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 183,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 184,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 185,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 186,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 187,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 188,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 189,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 190,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 191,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 192,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 193,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 194,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 195,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 196,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 197,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 198,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 199,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 200,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 201,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 202,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 203,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 204,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 205,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 206,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 207,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 208,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 209,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 210,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 211,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 212,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 213,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 214,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 215,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 216,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 217,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 218,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 219,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 220,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 221,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 222,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 223,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 224,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 225,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 226,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 227,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 228,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 229,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 230,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 231,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 232,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 233,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 234,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 235,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 236,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 237,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 238,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 239,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 240,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 241,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 242,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 243,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 244,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 245,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 246,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 247,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 248,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 249,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 250,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 251,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 252,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 253,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 254,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 255,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 256,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 257,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 258,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 259,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 260,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 261,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 262,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 263,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 264,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 265,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 266,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 267,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 268,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 269,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 270,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 271,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 272,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 273,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 274,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 275,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 276,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 277,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 278,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 279,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 280,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 281,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 282,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 283,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 284,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 285,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 286,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 287,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 288,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 289,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 290,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 291,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 292,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 293,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 294,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 295,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 296,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 297,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 298,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 299,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 300,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 301,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 302,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 303,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 304,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 305,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 306,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 307,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 308,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 309,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 310,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 311,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 312,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 313,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 314,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 315,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 316,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 317,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 318,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 319,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 320,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 321,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 322,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 323,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 324,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 325,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 326,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 327,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 328,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 329,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 330,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 331,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 332,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 333,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 334,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 335,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 336,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 337,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 338,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 339,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 340,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 341,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 342,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 343,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 344,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 345,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 346,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 347,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 348,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 349,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 350,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 351,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 352,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 353,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 354,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 355,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    },
    {
        "dia": 356,
        "frase": "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
        "autor": "Winston Churchill"
    },
    {
        "dia": 357,
        "frase": "La vida es realmente simple, pero insistimos en hacerla complicada.",
        "autor": "Confucio"
    },
    {
        "dia": 358,
        "frase": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "autor": "Steve Jobs"
    },
    {
        "dia": 359,
        "frase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "autor": "Robert Collier"
    },
    {
        "dia": 360,
        "frase": "La mejor manera de predecir el futuro es inventarlo.",
        "autor": "Alan Kay"
    },
    {
        "dia": 361,
        "frase": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "autor": "Nelson Mandela"
    },
    {
        "dia": 362,
        "frase": "El mayor riesgo es no tomar ninguno.",
        "autor": "Mark Zuckerberg"
    },
    {
        "dia": 363,
        "frase": "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
        "autor": "Charles R. Swindoll"
    },
    {
        "dia": 364,
        "frase": "El único límite a nuestros logros de mañana está en nuestras dudas de hoy.",
        "autor": "Franklin D. Roosevelt"
    },
    {
        "dia": 365,
        "frase": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "autor": "Dalai Lama"
    }
];

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear;
}

function getFraseDelDia() {
    const dayOfYear = getDayOfYear();
    const fraseDelDia = frases.find(frase => frase.dia === dayOfYear);

    if (fraseDelDia) {
        const showsPhrase = document.createElement("div");
        showsPhrase.className = 'col-md-12 text-center align-middle';
        showsPhrase.innerHTML = `<p id="text" class="align-middle">"${fraseDelDia.frase}"</p><p id="name" class="align-middle"><strong>${fraseDelDia.autor}</strong></p>`;
        window.document.getElementById('fraseDia').appendChild(showsPhrase);
    } else {
    }
}

getFraseDelDia();