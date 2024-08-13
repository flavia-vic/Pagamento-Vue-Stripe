<template>
  <div class="container">
    <article class="card">
      <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <img src="@/assets/money.gif" alt="Meu GIF">

      <button @click="submit" class="cta-button" :disabled="loading">
        {{ loading ? 'Processando...' : 'Comprar Agora' }}
      </button>
    </article>
  </div>
</template>


<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  components: {
    StripeCheckout,
  },
  data() {
    return {
      publishableKey: 'your_Ppk_test',
      successURL:'http://localhost:8080/success',
      cancelURL:'http://localhost:8080/error',
      loading: false,
      lineItems: [
        {
          price: 'your_price',
          quantity: 1,
        },
      ],
    }
  },
  methods: {
    async submit() {
      await this.$nextTick();
      
      const checkoutRef = this.$refs.checkoutRef;
      if (checkoutRef && checkoutRef.redirectToCheckout) {
        checkoutRef.redirectToCheckout();
      } else {
        console.error('Checkout reference is null or redirectToCheckout method is not available');
      }
    },
  }
}
</script>
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
    max-width: 50%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
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
}

.cta-button:disabled {
  background-color: #ffc8d2; 
  cursor: not-allowed;
}

.cta-button:hover:not(:disabled) {
  background-color: #ff69b4; 
}
</style>
