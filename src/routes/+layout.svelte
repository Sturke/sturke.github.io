<script lang="ts">
    import Header from "$lib/components/header.svelte"
    import Footer from "$lib/components/footer.svelte"

    
    ;
</script>

<div class="layout">
    <!-- Header -->
      <Header />
  
      <main>
          <!-- Black hole for other content -->
          <slot />
      </main>
  
    <!-- Footer -->
      <Footer />
  </div>
  
  <style>
      .layout {
          height: 100%;
          max-inline-size: 1440px;
          display: grid;
          grid-template-rows: auto 1fr auto;
          margin-inline: auto;
          padding-inline: var(--size-7);
      }
  
      main {
          padding-block: var(--size-9);
      }
  
      @media (min-width: 1440px) {
          .layout {
              padding-inline: 0;
          }
      }
  </style>