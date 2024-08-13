<template>
    <div class="container">
      <article class="card">
        <img src="@/assets/sad.gif" alt="Erro no pagamento">
        <h1>Falha no pagamento</h1>
        <p>We're sorry, but your payment could not be processed.</p>
        <a href="/" role="button" class="cta-button">Buy Again</a>
      </article>
    </div>
</template>
  
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdf5e6; 
}

.card {
  padding: 2rem;
  background-color: #fffafa; 
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

h1 {
  color: #ff6b6b;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2em;
  margin-bottom: 1.5rem;
}

.cta-button {
  background-color: #ffb6c1; 
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  width: 100%;
  text-decoration: none;
  text-align: center;
}

.cta-button:hover {
  background-color: #ff69b4; 
}
</style>