<script context="module" lang="ts">
  import { sotion } from "sotion";

  export function preload() {
    sotion.setFetch(this.fetch).setScope("ae6b5c6a74d048f0b646dad06ba319d8");
  }
</script>

<slot />
