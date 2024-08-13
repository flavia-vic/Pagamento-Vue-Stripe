<template>
    <div class="container">
      <article class="card">
        <img src="@/assets/coelho.gif" alt="Meu GIF">
        <h1>pagamento efetuado com sucesso!</h1>
        <a href="/">Comprar denovo</a>
      </article>
    </div>
    </template>
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fdf5e6; /* Uma cor de fundo suave */
  }
  
  .card {
    padding: 2rem;
    background-color: #fffafa; /* Fundo claro */
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
  }
  
  .card img {
    max-width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .card h1 {
    color: #ff69b4; /* Cor rosa suave */
    font-weight: bold;
    margin-bottom: 1rem;
    border-radius: 15px;
  }
  
  .card a {
    text-decoration: none;
    background-color: #ffb6c1; /* Cor de botão suave */
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .card a:hover {
    background-color: #ff69b4; /* Cor mais vibrante ao passar o mouse */
  }
  </style>
  